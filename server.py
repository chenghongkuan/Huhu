#!/usr/bin/env python3
import json
import os
import re
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
CONFIG_PATH = Path(
    os.environ.get(
        "HULUNBUIR_AMAP_CONFIG",
        str(Path.home() / ".codex" / "hulunbuir-roadtrip-amap.json"),
    )
)


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        safe_args = list(args)
        if safe_args and isinstance(safe_args[0], str):
            safe_args[0] = re.sub(
                r"(GET|POST|HEAD) ([^ ?]+)\?[^ ]+ (HTTP/[0-9.]+)",
                r"\1 \2?[redacted] \3",
                safe_args[0],
            )
        super().log_message(format, *safe_args)

    def do_GET(self):
        parsed = urlparse(self.path)
        route = parsed.path.lstrip("/")
        if route == "amap-config.local.js":
            self.serve_amap_config()
            return
        if route == "api/amap-driving":
            self.serve_amap_driving(parsed.query)
            return
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path.lstrip("/") == "api/amap-config":
            self.save_amap_config()
            return
        self.send_json(404, {"ok": False, "message": "Not found"})

    def do_HEAD(self):
        parsed = urlparse(self.path)
        if parsed.path.lstrip("/") == "amap-config.local.js":
            self.serve_amap_config(head_only=True)
            return
        super().do_HEAD()

    def read_private_config(self):
        if not CONFIG_PATH.exists():
            return {}
        with CONFIG_PATH.open("r", encoding="utf-8") as f:
            return json.load(f)

    def serve_amap_config(self, head_only=False):
        config = self.read_private_config()

        payload = {
            "key": config.get("key") or config.get("amapKey") or config.get("jsapiKey") or "",
            "securityCode": config.get("securityCode") or config.get("securityJsCode") or "",
            "routeKeyReady": bool(
                config.get("routeKey")
                or config.get("webServiceKey")
                or config.get("restKey")
                or config.get("drivingKey")
            ),
        }
        body = (
            "window.HULUNBUIR_AMAP_CONFIG = "
            + json.dumps(payload, ensure_ascii=False)
            + ";\n"
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "application/javascript; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if not head_only:
            self.wfile.write(body)

    def send_json(self, status, payload):
        body = (json.dumps(payload, ensure_ascii=False) + "\n").encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def as_list(self, value):
        if value is None:
            return []
        if isinstance(value, list):
            return value
        return [value]

    def save_amap_config(self):
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if length <= 0 or length > 32768:
            self.send_json(400, {"ok": False, "message": "配置内容为空或过大"})
            return

        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except Exception:
            self.send_json(400, {"ok": False, "message": "配置 JSON 无法解析"})
            return

        config = self.read_private_config()
        field_map = {
            "key": "key",
            "securityCode": "securityCode",
            "routeKey": "routeKey",
        }
        for source, target in field_map.items():
            value = str(payload.get(source) or "").strip()
            if value:
                config[target] = value

        CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
        tmp_path = CONFIG_PATH.with_suffix(".json.tmp")
        with tmp_path.open("w", encoding="utf-8") as f:
            json.dump(config, f, ensure_ascii=False, indent=2)
            f.write("\n")
        os.chmod(tmp_path, 0o600)
        tmp_path.replace(CONFIG_PATH)
        os.chmod(CONFIG_PATH, 0o600)

        self.send_json(
            200,
            {
                "ok": True,
                "saved": {
                    "key": bool(config.get("key")),
                    "securityCode": bool(config.get("securityCode")),
                    "routeKey": bool(config.get("routeKey")),
                },
            },
        )

    def serve_amap_driving(self, raw_query):
        config = self.read_private_config()
        key = (
            os.environ.get("AMAP_ROUTE_KEY", "")
            or os.environ.get("AMAP_WEB_SERVICE_KEY", "")
            or ""
        ).strip() or (
            config.get("routeKey")
            or config.get("webServiceKey")
            or config.get("restKey")
            or config.get("drivingKey")
            or ""
        ).strip()
        if not key:
            self.send_json(
                400,
                {
                    "ok": False,
                    "message": "缺少高德 Web服务路线规划 key，请填写包含“路径规划API”的 Web服务 key",
                },
            )
            return

        query = urllib.parse.parse_qs(raw_query)
        raw_points = (query.get("points") or [""])[0]
        points = [item for item in raw_points.split("|") if item.strip()]
        if len(points) < 2:
            self.send_json(400, {"ok": False, "message": "至少需要两个导航点"})
            return

        merged_path = []
        legs = []
        try:
            for index in range(len(points) - 1):
                params = urllib.parse.urlencode(
                    {
                        "key": key,
                        "origin": points[index],
                        "destination": points[index + 1],
                        "strategy": "0",
                        "show_fields": "polyline,cost,navi",
                        "output": "json",
                    }
                )
                with urllib.request.urlopen(
                    "https://restapi.amap.com/v5/direction/driving?" + params,
                    timeout=20,
                ) as resp:
                    data = json.loads(resp.read().decode("utf-8", "ignore"))

                if data.get("status") != "1":
                    self.send_json(
                        502,
                        {
                            "ok": False,
                            "message": data.get("info") or "高德驾车路线规划失败",
                            "infocode": data.get("infocode"),
                            "leg": index + 1,
                        },
                    )
                    return

                paths = self.as_list((data.get("route") or {}).get("paths"))
                first_path = paths[0] if paths else {}
                steps = self.as_list(first_path.get("steps"))
                leg_path = []
                for step in steps or []:
                    polyline = step.get("polyline") or ""
                    for pair in polyline.split(";"):
                        if not pair:
                            continue
                        lng_lat = pair.split(",")
                        if len(lng_lat) != 2:
                            continue
                        point = [float(lng_lat[0]), float(lng_lat[1])]
                        if not leg_path or leg_path[-1] != point:
                            leg_path.append(point)

                if len(leg_path) < 2:
                    self.send_json(
                        502,
                        {"ok": False, "message": "高德未返回可用道路坐标", "leg": index + 1},
                    )
                    return

                for point in leg_path:
                    if not merged_path or merged_path[-1] != point:
                        merged_path.append(point)
                legs.append(
                    {
                        "origin": points[index],
                        "destination": points[index + 1],
                        "distance": first_path.get("distance") if first_path else "",
                        "duration": ((first_path.get("cost") or {}).get("duration") if first_path else ""),
                        "pointCount": len(leg_path),
                    }
                )
        except Exception as exc:
            self.send_json(
                502,
                {"ok": False, "message": f"高德驾车路线请求异常：{type(exc).__name__}"},
            )
            return

        self.send_json(200, {"ok": True, "path": merged_path, "legs": legs})


def main():
    os.chdir(ROOT)
    port = int(os.environ.get("PORT", "8126"))
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Serving on http://127.0.0.1:{port}/")
    server.serve_forever()


if __name__ == "__main__":
    main()
