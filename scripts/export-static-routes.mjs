import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";

const projectRoot = resolve(import.meta.dirname, "..");
const scriptPath = resolve(projectRoot, "script.js");
const outputPath = resolve(projectRoot, "data", "amap-driving-paths.js");
const apiBase = process.env.AMAP_ROUTE_EXPORT_ENDPOINT || "http://127.0.0.1:8126/api/amap-driving";

const source = await readFile(scriptPath, "utf8");
const dataBoundary = source.indexOf("let map;");
if (dataBoundary < 0) {
  throw new Error("Unable to locate route definitions in script.js");
}

const routeDefinitions = new Function(
  `${source.slice(0, dataBoundary)}\nreturn { mainRouteStops, dayRoutes, optionalRouteBranches };`,
)();

const collections = [
  { label: "main", routes: [{ points: routeDefinitions.mainRouteStops }] },
  { label: "day", routes: Object.values(routeDefinitions.dayRoutes) },
  { label: "optional", routes: routeDefinitions.optionalRouteBranches },
];

const legs = new Map();
for (const collection of collections) {
  for (const route of collection.routes) {
    for (let index = 0; index < route.points.length - 1; index += 1) {
      const start = route.points[index];
      const end = route.points[index + 1];
      const key = `${start.lng},${start.lat}->${end.lng},${end.lat}`;
      legs.set(key, { start, end, collection: collection.label });
    }
  }
}

const paths = {};
let completed = 0;
for (const [key, leg] of legs) {
  const url = new URL(apiBase);
  url.searchParams.set("points", `${leg.start.lng},${leg.start.lat}|${leg.end.lng},${leg.end.lat}`);

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { "Cache-Control": "no-store" } });
      const data = await response.json();
      if (!response.ok || !data.ok || !Array.isArray(data.path) || data.path.length < 2) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }
      paths[key] = data.path;
      lastError = undefined;
      break;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
    }
  }

  if (lastError) {
    throw new Error(`Failed to export ${leg.start.name} -> ${leg.end.name}: ${lastError.message || lastError}`);
  }
  completed += 1;
  process.stdout.write(`Exported ${completed}/${legs.size}: ${leg.start.name} -> ${leg.end.name}\n`);
}

const payload = [
  "/* Generated from AMap driving results. Contains road geometry only; no API keys. */",
  "window.HULUNBUIR_STATIC_DRIVING_PATHS = ",
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      paths,
    },
    null,
    0,
  ),
  ";\n",
].join("");

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, payload, "utf8");
process.stdout.write(`Wrote ${Object.keys(paths).length} road legs to ${outputPath}\n`);
