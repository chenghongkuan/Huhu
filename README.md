# 呼伦贝尔·大兴安岭金秋自驾攻略

静态旅行攻略站，部署目标为 GitHub Pages：
`https://chenghongkuan.github.io/Huhu/`

## 打开方式

- GitHub Pages 默认使用本仓库保存的高德驾车道路坐标，显示在 OSM 回退底图上，不请求路线 API，也不包含任何高德密钥。
- 本地使用 `python3 server.py` 时，会从仓库外的私有配置读取高德 JSAPI 凭据，展示高德底图。浏览器手动输入的 key 仅留在浏览器 localStorage。
- “高德打开”始终可将当前日程交给高德导航客户端或网页继续导航。

## 本地运行

```bash
cd /data/data/github/Huhu
python3 server.py
```

访问 `http://127.0.0.1:8126/`。

## 更新默认道路数据

静态道路数据来自本地高德路线接口，几何坐标保存在 `data/amap-driving-paths.js`，不含 API key。

```bash
node scripts/export-static-routes.mjs
```

运行前需启动本地 `server.py`，并在仓库外私有配置中提供含路径规划权限的高德 Web 服务 key。

## 发布

推送到 `main` 后由 `.github/workflows/deploy-pages.yml` 发布到 GitHub Pages。首次发布前，在 GitHub 仓库 **Settings > Pages** 中选择 **GitHub Actions** 作为发布源。
