const AMAP_STORAGE_KEY = "hulunbuir_amap_jsapi_key";
const AMAP_SECURITY_STORAGE_KEY = "hulunbuir_amap_security_js_code";
const AMAP_CONFIG_GLOBAL = "HULUNBUIR_AMAP_CONFIG";
const AMAP_LOCAL_CONFIG_SRC = "./amap-config.local.js";

const stops = [
  {
    name: "初青·茶设计师酒店（呼伦贝尔海拉尔古城店）",
    lng: 119.750203,
    lat: 49.211921,
  },
  { name: "扎兰屯柴河赫家酒店", lng: 121.314542, lat: 47.555256 },
  { name: "阿尔山森林公园天池服务区", lng: 120.423638, lat: 47.300281 },
  { name: "阿兰度森林温泉小镇", lng: 120.195988, lat: 46.992306 },
  { name: "维也纳智好酒店（满洲里中苏金街店）", lng: 117.449421, lat: 49.589865 },
  {
    name: "向北方居·View star观星·原野美宿（黑山头新镇28幢32号）",
    lng: 119.577057,
    lat: 50.215048,
  },
  { name: "额尔古纳市室韦萨沙之家", lng: 119.904068, lat: 51.335714 },
  { name: "莫尔道嘎龙运宾馆", lng: 120.772625, lat: 51.265725 },
  { name: "满归镇佳辰宾馆", lng: 122.067535, lat: 52.044583 },
  { name: "麗枫酒店（北极星广场松苑公园店）", lng: 122.538907, lat: 52.970049 },
  { name: "北红村", lng: 123.2408, lat: 53.4902 },
  {
    name: "锦江之星酒店（漠河北极村中国最北邮局店）",
    lng: 122.36034,
    lat: 53.48039,
  },
  { name: "根河市静林山庄酒店", lng: 121.505775, lat: 50.775475 },
  { name: "额尔古纳湿地景区（新入口）", lng: 120.146813, lat: 50.242355 },
  { name: "莫日格勒河观景台（牧云山顶）", lng: 119.969455, lat: 49.603753 },
  { name: "隐居繁华庄园（海拉尔机场店）", lng: 119.794101, lat: 49.229181 },
];

const airportStop = { name: "呼伦贝尔海拉尔国际机场T2", lng: 119.827073, lat: 49.212751 };

const routeWaypoints = {
  boketuStation: { name: "博克图站", lng: 121.919072, lat: 48.754276 },
  chaiheBridge: { name: "柴河大桥 / 十大湾", lng: 121.299694, lat: 47.552172 },
  moonTianchi: { name: "柴河月亮天池景区", lng: 120.936092, lat: 47.539529 },
  aershanStation: { name: "阿尔山火车站", lng: 119.947575, lat: 47.172702 },
  wuliquan: { name: "五里泉", lng: 119.937688, lat: 47.192384 },
  rosePeak: { name: "玫瑰峰", lng: 119.770514, lat: 47.323633 },
  qixianLake: { name: "七仙湖第一湖旅游景区", lng: 119.343783, lat: 47.751128 },
  nomenhanMuseum: { name: "诺门罕战役遗址陈列馆", lng: 118.838025, lat: 47.834235 },
  ganjurTemple: { name: "甘珠尔庙", lng: 118.142743, lat: 48.36136 },
  hulunLakeGoldCoast: { name: "呼伦湖金海岸", lng: 116.973026, lat: 48.845359 },
  mammothPark: { name: "扎赉诺尔猛犸旅游景区", lng: 117.677857, lat: 49.498412 },
  guomen: { name: "满洲里国门景区", lng: 117.353708, lat: 49.630182 },
  matryoshkaSquare: { name: "套娃广场正门停车场", lng: 117.401707, lat: 49.611216 },
  tengdaStable: { name: "腾达马场", lng: 119.553125, lat: 50.208575 },
  colorRiver186: { name: "186彩带河", lng: 119.034798, lat: 49.962573 },
  heishantouSunset: { name: "黑山头日落山", lng: 119.554693, lat: 50.21621 },
  wulanshanStation: { name: "六卡乌兰山驿站", lng: 119.351776, lat: 50.614142 },
  wulanshan: { name: "乌兰山太极湾", lng: 119.39105, lat: 50.622386 },
  qika: { name: "七卡", lng: 119.530987, lat: 50.745489 },
  bakaiIsland: { name: "八卡岛", lng: 119.524622, lat: 50.903776 },
  jiuka: { name: "九卡", lng: 119.749176, lat: 51.056132 },
  enheTownship: { name: "恩和北山", lng: 119.909769, lat: 50.832647 },
  haurRiverScenicArea: { name: "哈乌尔河景区", lng: 120.03425, lat: 50.958544 },
  shiweiPort: { name: "室韦边境口岸停车场", lng: 119.904825, lat: 51.342137 },
  eagleBeak: { name: "老鹰嘴", lng: 120.033336, lat: 51.49149 },
  moonPaozi: { name: "月亮泡子", lng: 120.100946, lat: 51.53213 },
  taipingVillage: { name: "太平村", lng: 120.271505, lat: 51.503768 },
  longshanPark: { name: "莫尔道嘎龙山公园", lng: 120.783028, lat: 51.262486 },
  mordagaForestPark: { name: "莫尔道嘎国家森林公园", lng: 120.673537, lat: 51.337518 },
  bailuIsland: { name: "白鹿岛", lng: 120.858815, lat: 51.952518 },
  ningcuiMountain: { name: "凝翠山公园", lng: 122.079779, lat: 52.049906 },
  yikesamaForestPark: { name: "伊克萨玛国家森林公园", lng: 121.810405, lat: 52.142048 },
  songyuanPark: { name: "松苑公园", lng: 122.541118, lat: 52.971305 },
  fireMemorial: { name: "大兴安岭五六火灾纪念馆", lng: 122.540258, lat: 52.969741 },
  beijiStarSquare: { name: "北极星广场", lng: 122.525962, lat: 52.971057 },
  yanzhigou: { name: "胭脂沟", lng: 122.169957, lat: 53.291618 },
  liJinyongHall: { name: "李金镛祠堂", lng: 122.165977, lat: 53.290196 },
  jiuquShibawan: { name: "九曲十八湾", lng: 122.663848, lat: 52.933653 },
  longjiangFirstBend: { name: "龙江第一湾", lng: 123.251575, lat: 53.467425 },
  wusuliShoal: { name: "乌苏里浅滩", lng: 123.283758, lat: 53.555484 },
  aoluguya: { name: "敖鲁古雅使鹿部落景区", lng: 121.479454, lat: 50.776185 },
  genheWetland: { name: "根河源国家湿地公园", lng: 121.680386, lat: 50.866938 },
  ergunaCity: { name: "额尔古纳市区", lng: 120.180506, lat: 50.242364 },
  birchForest: { name: "额尔古纳白桦林景区", lng: 120.160433, lat: 50.538147 },
};

const mainRouteStops = [
  stops[0],
  routeWaypoints.boketuStation,
  stops[1],
  routeWaypoints.chaiheBridge,
  routeWaypoints.moonTianchi,
  stops[2],
  routeWaypoints.wuliquan,
  routeWaypoints.aershanStation,
  stops[3],
  routeWaypoints.rosePeak,
  routeWaypoints.qixianLake,
  routeWaypoints.hulunLakeGoldCoast,
  routeWaypoints.mammothPark,
  stops[4],
  routeWaypoints.guomen,
  routeWaypoints.matryoshkaSquare,
  routeWaypoints.colorRiver186,
  routeWaypoints.tengdaStable,
  stops[5],
  routeWaypoints.wulanshanStation,
  routeWaypoints.wulanshan,
  routeWaypoints.qika,
  routeWaypoints.bakaiIsland,
  routeWaypoints.jiuka,
  routeWaypoints.shiweiPort,
  stops[6],
  routeWaypoints.eagleBeak,
  routeWaypoints.moonPaozi,
  routeWaypoints.taipingVillage,
  routeWaypoints.longshanPark,
  routeWaypoints.mordagaForestPark,
  stops[7],
  routeWaypoints.bailuIsland,
  routeWaypoints.yikesamaForestPark,
  routeWaypoints.ningcuiMountain,
  stops[8],
  stops[9],
  routeWaypoints.songyuanPark,
  routeWaypoints.fireMemorial,
  routeWaypoints.beijiStarSquare,
  stops[11],
  stops[10],
  routeWaypoints.wusuliShoal,
  routeWaypoints.longjiangFirstBend,
  routeWaypoints.jiuquShibawan,
  stops[9],
  stops[8],
  routeWaypoints.genheWetland,
  stops[12],
  routeWaypoints.aoluguya,
  stops[13],
  routeWaypoints.ergunaCity,
  stops[14],
  stops[15],
];

const routeSegmentPalette = [
  "#a44928",
  "#d89731",
  "#3e6f5a",
  "#3f8192",
  "#b6652f",
  "#6f7f34",
  "#245642",
  "#c58a2b",
  "#8f4f2e",
  "#517d6b",
  "#a4772a",
  "#2f6f76",
  "#bd6f28",
  "#5c7330",
  "#9c5b32",
  "#48786c",
  "#c49a37",
];

const dayRoutePalette = [
  "#a44928",
  "#d89731",
  "#245642",
  "#3f8192",
  "#b6652f",
  "#6f7f34",
  "#8f4f2e",
  "#c58a2b",
  "#2f6f76",
  "#bd6f28",
  "#517d6b",
  "#9c5b32",
  "#c49a37",
];

const dayRoutes = {
  1: { label: "D1 海拉尔机场 - 初青·茶设计师酒店", points: [airportStop, stops[0]] },
  2: {
    label: "D2 初青·茶设计师酒店 - 博克图 - 扎兰屯柴河赫家酒店",
    points: [stops[0], routeWaypoints.boketuStation, stops[1]],
  },
  3: {
    label: "D3 柴河赫家酒店 - 十大湾 - 月亮天池 - 阿尔山森林公园天池服务区 - 五里泉 - 阿尔山火车站 - 阿兰度森林温泉小镇",
    points: [
      stops[1],
      routeWaypoints.chaiheBridge,
      routeWaypoints.moonTianchi,
      stops[2],
      routeWaypoints.wuliquan,
      routeWaypoints.aershanStation,
      stops[3],
    ],
  },
  4: {
    label: "D4 阿兰度森林温泉小镇 - 玫瑰峰 - 七仙湖 - 呼伦湖金海岸 - 猛犸旅游景区 - 维也纳智好酒店",
    points: [
      stops[3],
      routeWaypoints.rosePeak,
      routeWaypoints.qixianLake,
      routeWaypoints.hulunLakeGoldCoast,
      routeWaypoints.mammothPark,
      stops[4],
    ],
  },
  5: {
    label: "D5 维也纳智好酒店 - 国门 - 套娃广场正门停车场 - 186彩带河 - 腾达马场 - 向北方居",
    points: [
      stops[4],
      routeWaypoints.guomen,
      routeWaypoints.matryoshkaSquare,
      routeWaypoints.colorRiver186,
      routeWaypoints.tengdaStable,
      stops[5],
    ],
  },
  6: {
    label: "D6 向北方居 - 六卡乌兰山驿站 - 乌兰山 - 七卡 - 八卡岛 - 九卡 - 室韦边境口岸停车场 - 室韦萨沙之家",
    points: [
      stops[5],
      routeWaypoints.wulanshanStation,
      routeWaypoints.wulanshan,
      routeWaypoints.qika,
      routeWaypoints.bakaiIsland,
      routeWaypoints.jiuka,
      routeWaypoints.shiweiPort,
      stops[6],
    ],
  },
  7: {
    label: "D7 室韦萨沙之家 - 老鹰嘴 - 月亮泡子 - 太平村 - 龙山公园 - 莫尔道嘎国家森林公园 - 莫尔道嘎龙运宾馆",
    points: [
      stops[6],
      routeWaypoints.eagleBeak,
      routeWaypoints.moonPaozi,
      routeWaypoints.taipingVillage,
      routeWaypoints.longshanPark,
      routeWaypoints.mordagaForestPark,
      stops[7],
    ],
  },
  8: {
    label: "D8 莫尔道嘎龙运宾馆 - 白鹿岛 - 伊克萨玛国家森林公园 - 凝翠山公园 - 满归镇佳辰宾馆",
    points: [
      stops[7],
      routeWaypoints.bailuIsland,
      routeWaypoints.yikesamaForestPark,
      routeWaypoints.ningcuiMountain,
      stops[8],
    ],
  },
  9: {
    label: "D9 满归镇佳辰宾馆 - 漠河市区三点 - 锦江之星北极村店",
    points: [
      stops[8],
      stops[9],
      routeWaypoints.songyuanPark,
      routeWaypoints.fireMemorial,
      routeWaypoints.beijiStarSquare,
      stops[11],
    ],
  },
  10: {
    label: "D10 锦江之星北极村店 - 北红村 - 乌苏里浅滩 - 龙江第一湾 - 九曲十八湾 - 麗枫酒店",
    points: [
      stops[11],
      stops[10],
      routeWaypoints.wusuliShoal,
      routeWaypoints.longjiangFirstBend,
      routeWaypoints.jiuquShibawan,
      stops[9],
    ],
  },
  11: {
    label: "D11 麗枫酒店 - 满归镇佳辰宾馆 - 根河源湿地 - 静林山庄酒店",
    points: [
      stops[9],
      stops[8],
      routeWaypoints.genheWetland,
      stops[12],
    ],
  },
  12: {
    label: "D12 静林山庄酒店 - 敖鲁古雅 - 额尔古纳湿地景区（新入口） - 额尔古纳市区 - 莫日格勒河观景台（牧云山顶） - 隐居繁华庄园",
    points: [
      stops[12],
      routeWaypoints.aoluguya,
      stops[13],
      routeWaypoints.ergunaCity,
      stops[14],
      stops[15],
    ],
  },
  13: { label: "D13 隐居繁华庄园 - 海拉尔机场", points: [stops[15], airportStop] },
};

const optionalRouteBranches = [
  {
    day: 4,
    label: "可选支线：七仙湖 - 诺门罕 - 甘珠尔庙 - 呼伦湖",
    points: [
      routeWaypoints.qixianLake,
      routeWaypoints.nomenhanMuseum,
      routeWaypoints.ganjurTemple,
      routeWaypoints.hulunLakeGoldCoast,
    ],
    color: "#8f4f2e",
  },
  {
    day: 5,
    label: "可选支线：黑山头 - 黑山头日落山",
    points: [stops[5], routeWaypoints.heishantouSunset, stops[5]],
    color: "#d89731",
  },
  {
    day: 6,
    label: "替代内线：七卡 - 恩和北山 - 哈乌尔河景区 - 室韦边境口岸停车场",
    points: [
      routeWaypoints.qika,
      routeWaypoints.enheTownship,
      routeWaypoints.haurRiverScenicArea,
      routeWaypoints.shiweiPort,
    ],
    color: "#976548",
  },
  {
    day: 9,
    label: "可选支线：漠河 - 胭脂沟 - 李金镛祠堂 - 锦江之星北极村店",
    points: [
      routeWaypoints.beijiStarSquare,
      routeWaypoints.yanzhigou,
      routeWaypoints.liJinyongHall,
      stops[11],
    ],
    color: "#bd6f28",
  },
  {
    day: 12,
    label: "可选支线：额尔古纳 - 白桦林 - 莫日格勒河观景台（牧云山顶）",
    points: [routeWaypoints.ergunaCity, routeWaypoints.birchForest, stops[14]],
    color: "#c49a37",
  },
];

let map;
let mapMode = "";
let fullRouteLines = [];
let highlightLines = [];
let optionalRouteLines = [];
let markers = [];
let optionalMarkers = [];
let carMarker = null;
let activeDay = null;
let localConfigPromise = null;
let routeRequestSeq = 0;
let scrollCarFrame = null;
const drivingPathCache = new Map();
const routeProgressTracks = new Map();
const staticDrivingRouteData = window.HULUNBUIR_STATIC_DRIVING_PATHS || {};
const staticDrivingPaths = staticDrivingRouteData.paths || {};

Object.entries(staticDrivingPaths).forEach(([key, path]) => {
  if (Array.isArray(path) && path.length > 1) {
    drivingPathCache.set(key, path);
  }
});

const setupPanel = document.getElementById("amapSetup");
const statusNode = document.getElementById("mapStatus");
const keyInput = document.getElementById("amapKeyInput");
const securityInput = document.getElementById("amapSecurityInput");
const routeKeyInput = document.getElementById("amapRouteKeyInput");
const loadBtn = document.getElementById("amapLoadBtn");
const showFullRouteBtn = document.getElementById("showFullRouteBtn");
const editAmapConfigBtn = document.getElementById("editAmapConfigBtn");
const openAmapLink = document.getElementById("openAmapLink");
const routeColorLegend = document.getElementById("routeColorLegend");
const dayCards = Array.from(document.querySelectorAll(".day-card[data-day]"));

function setStatus(message) {
  if (statusNode) {
    statusNode.textContent = message;
  }
}

function normalizeAmapConfig(rawConfig) {
  if (!rawConfig || typeof rawConfig !== "object") {
    return { key: "", securityCode: "" };
  }

  const key =
    rawConfig.key ||
    rawConfig.amapKey ||
    rawConfig.jsapiKey ||
    rawConfig.AMAP_JSAPI_KEY ||
    "";
  const securityCode =
    rawConfig.securityCode ||
    rawConfig.securityJsCode ||
    rawConfig.amapSecurity ||
    rawConfig.AMAP_SECURITY_JS_CODE ||
    "";

  return {
    key: String(key).trim(),
    securityCode: String(securityCode).trim(),
    routeKeyReady: Boolean(
      rawConfig.routeKeyReady ||
        rawConfig.routeKey ||
        rawConfig.webServiceKey ||
        rawConfig.restKey ||
        rawConfig.drivingKey,
    ),
  };
}

function loadLocalAmapConfig() {
  if (window[AMAP_CONFIG_GLOBAL]) {
    return Promise.resolve(normalizeAmapConfig(window[AMAP_CONFIG_GLOBAL]));
  }

  if (localConfigPromise) {
    return localConfigPromise;
  }

  localConfigPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    const separator = AMAP_LOCAL_CONFIG_SRC.includes("?") ? "&" : "?";
    script.src = `${AMAP_LOCAL_CONFIG_SRC}${separator}t=${Date.now()}`;
    script.async = true;
    script.onload = () => resolve(normalizeAmapConfig(window[AMAP_CONFIG_GLOBAL]));
    script.onerror = () => resolve({ key: "", securityCode: "" });
    document.head.appendChild(script);
  });

  return localConfigPromise;
}

async function saveLocalAmapConfig(config) {
  try {
    const response = await fetch("./api/amap-config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data.ok) {
      return data;
    }
  } catch (error) {
    // GitHub Pages is static. The JSAPI key still stays in this browser's localStorage.
  }
  return { ok: true, localOnly: true };
}

function toLngLat(point) {
  return [point.lng, point.lat];
}

function isLeafletMap() {
  return mapMode === "leaflet";
}

function outOfChina(lng, lat) {
  return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271;
}

function transformLatitude(lng, lat) {
  let value = -100 + 2 * lng + 3 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  value += ((20 * Math.sin(6 * lng * Math.PI) + 20 * Math.sin(2 * lng * Math.PI)) * 2) / 3;
  value += ((20 * Math.sin(lat * Math.PI) + 40 * Math.sin((lat / 3) * Math.PI)) * 2) / 3;
  value += ((160 * Math.sin((lat / 12) * Math.PI) + 320 * Math.sin((lat * Math.PI) / 30)) * 2) / 3;
  return value;
}

function transformLongitude(lng, lat) {
  let value = 300 + lng + 2 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  value += ((20 * Math.sin(6 * lng * Math.PI) + 20 * Math.sin(2 * lng * Math.PI)) * 2) / 3;
  value += ((20 * Math.sin(lng * Math.PI) + 40 * Math.sin((lng / 3) * Math.PI)) * 2) / 3;
  value += ((150 * Math.sin((lng / 12) * Math.PI) + 300 * Math.sin((lng / 30) * Math.PI)) * 2) / 3;
  return value;
}

function gcjToWgs(lng, lat) {
  if (outOfChina(lng, lat)) return [lng, lat];
  const earthRadius = 6378245;
  const eccentricity = 0.00669342162296594323;
  let deltaLat = transformLatitude(lng - 105, lat - 35);
  let deltaLng = transformLongitude(lng - 105, lat - 35);
  const radians = (lat / 180) * Math.PI;
  let magic = Math.sin(radians);
  magic = 1 - eccentricity * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  deltaLat = (deltaLat * 180) / (((earthRadius * (1 - eccentricity)) / (magic * sqrtMagic)) * Math.PI);
  deltaLng = (deltaLng * 180) / ((earthRadius / sqrtMagic) * Math.cos(radians) * Math.PI);
  return [lng - deltaLng, lat - deltaLat];
}

function toLeafletLatLng(point) {
  const rawPoint = normalizePathPoint(point) || [point.lng, point.lat];
  const [lng, lat] = gcjToWgs(rawPoint[0], rawPoint[1]);
  return [lat, lng];
}

function toLeafletPath(path) {
  return path.map((point) => toLeafletLatLng(point));
}

function routeSegmentKey(start, end) {
  return `${start.lng},${start.lat}->${end.lng},${end.lat}`;
}

const routeColorBySegment = new Map(
  mainRouteStops.slice(0, -1).map((start, index) => [
    routeSegmentKey(start, mainRouteStops[index + 1]),
    routeSegmentPalette[index % routeSegmentPalette.length],
  ]),
);

function getRouteSegmentColor(start, end, fallbackIndex = 0) {
  return (
    routeColorBySegment.get(routeSegmentKey(start, end)) ||
    routeSegmentPalette[fallbackIndex % routeSegmentPalette.length]
  );
}

function getDayRouteColor(day) {
  return dayRoutePalette[(Number(day) - 1) % dayRoutePalette.length];
}

function renderRouteColorLegend() {
  if (!routeColorLegend) return;
  const dayItems = Object.keys(dayRoutes)
    .map((day) => {
      const color = getDayRouteColor(day);
      return `<span class="route-color-legend__item"><i style="background:${color}"></i>D${day}</span>`;
    })
    .join("");
  const optionalItem = optionalRouteBranches.length
    ? '<span class="route-color-legend__item route-color-legend__item--optional"><i></i>可选支线</span>'
    : "";
  routeColorLegend.innerHTML = dayItems + optionalItem;
}

function updateOpenAmapLink(points = mainRouteStops) {
  if (!openAmapLink || points.length === 0) return;
  const origin = points[0];
  const dest = points[points.length - 1];
  const waypointText = points
    .slice(1, -1)
    .map((point) => `${point.lng},${point.lat},${encodeURIComponent(point.name)}`)
    .join(";");
  const url = new URL("https://uri.amap.com/navigation");
  url.searchParams.set("from", `${origin.lng},${origin.lat},${origin.name}`);
  url.searchParams.set("to", `${dest.lng},${dest.lat},${dest.name}`);
  url.searchParams.set("mode", "car");
  url.searchParams.set("policy", "1");
  if (waypointText) {
    url.searchParams.set("via", waypointText);
  }
  url.searchParams.set("src", "hulunbuir-roadtrip-guide");
  openAmapLink.href = url.toString();
}

function loadAmapScript(key, securityCode) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject(new Error("缺少高德 Web端 JSAPI key"));
      return;
    }

    if (window.AMap) {
      resolve();
      return;
    }

    if (securityCode) {
      window._AMapSecurityConfig = { securityJsCode: securityCode };
    }

    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${encodeURIComponent(key)}&plugin=AMap.Driving,AMap.ToolBar,AMap.Scale`;
    script.async = true;
    script.onload = () => {
      if (window.AMap) {
        resolve();
      } else {
        reject(new Error("高德 JSAPI 未初始化，请检查 key、域名白名单或安全密钥"));
      }
    };
    script.onerror = () => reject(new Error("高德 JSAPI 加载失败"));
    document.head.appendChild(script);
  });
}

function loadAmapPlugins() {
  return new Promise((resolve) => {
    if (!window.AMap || typeof AMap.plugin !== "function") {
      resolve();
      return;
    }
    const timer = window.setTimeout(resolve, 6000);
    AMap.plugin(["AMap.Driving", "AMap.ToolBar", "AMap.Scale"], () => {
      window.clearTimeout(timer);
      resolve();
    });
  });
}

function makeMarker(point, index) {
  if (isLeafletMap()) {
    const marker = L.marker(toLeafletLatLng(point), {
      icon: L.divIcon({
        className: "leaflet-route-pin",
        html: `<div class="map-pin">${index + 1}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
      title: point.name,
      keyboard: false,
    }).bindTooltip(point.name, { direction: "right", offset: [8, 0], className: "leaflet-route-label" });
    marker._routePointName = point.name;
    return marker;
  }

  const content = document.createElement("div");
  content.className = "map-pin";
  content.textContent = String(index + 1);
  const marker = new AMap.Marker({
    position: toLngLat(point),
    content,
    title: point.name,
    offset: new AMap.Pixel(-14, -14),
  });
  marker.setLabel({
    direction: "right",
    offset: new AMap.Pixel(8, 0),
    content: `<span class="amap-marker-label">${point.name}</span>`,
  });
  return marker;
}

function makeOptionalMarker(point) {
  if (isLeafletMap()) {
    const marker = L.marker(toLeafletLatLng(point), {
      icon: L.divIcon({
        className: "leaflet-route-pin leaflet-route-pin--optional",
        html: '<div class="map-pin map-pin--optional">选</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
      title: point.name,
      keyboard: false,
    }).bindTooltip(`可选：${point.name}`, { direction: "right", offset: [8, 0], className: "leaflet-route-label leaflet-route-label--optional" });
    marker._routePointName = point.name;
    return marker;
  }

  const content = document.createElement("div");
  content.className = "map-pin map-pin--optional";
  content.textContent = "选";
  const marker = new AMap.Marker({
    position: toLngLat(point),
    content,
    title: point.name,
    offset: new AMap.Pixel(-14, -14),
    zIndex: 80,
  });
  marker.setLabel({
    direction: "right",
    offset: new AMap.Pixel(8, 0),
    content: `<span class="amap-marker-label amap-marker-label--optional">可选：${point.name}</span>`,
  });
  return marker;
}

function makeDrivingErrorMessage(result) {
  if (typeof result === "string") return result;
  if (!result || typeof result !== "object") return "高德未返回可用路线";
  return result.info || result.message || result.infocode || "高德未返回可用路线";
}

function normalizePathPoint(point) {
  if (Array.isArray(point)) return point;
  if (point && typeof point.getLng === "function" && typeof point.getLat === "function") {
    return [point.getLng(), point.getLat()];
  }
  if (point && typeof point.lng === "number" && typeof point.lat === "number") {
    return [point.lng, point.lat];
  }
  return null;
}

function extractDrivingPath(result) {
  const route = result?.routes?.[0];
  const steps = route?.steps || [];
  const path = [];

  steps.forEach((step) => {
    (step.path || []).forEach((rawPoint) => {
      const point = normalizePathPoint(rawPoint);
      if (!point) return;
      const previous = path[path.length - 1];
      if (!previous || previous[0] !== point[0] || previous[1] !== point[1]) {
        path.push(point);
      }
    });
  });

  return path;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function searchDrivingLegFromLocalApi(start, end) {
  const url = new URL("./api/amap-driving", window.location.href);
  url.searchParams.set("points", `${start.lng},${start.lat}|${end.lng},${end.lat}`);

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        const detail = data.infocode
          ? `${data.message || "高德驾车路线规划失败"}(${data.infocode})`
          : data.message;
        throw new Error(detail || "本地高德驾车路线接口失败");
      }
      if (!Array.isArray(data.path) || data.path.length < 2) {
        throw new Error("高德未返回可用道路坐标");
      }
      return data.path;
    } catch (err) {
      lastError = err;
      if (attempt < 3) {
        await wait(260 * attempt);
      }
    }
  }
  throw lastError || new Error("本地高德驾车路线接口失败");
}

function searchDrivingLegFromJsapi(start, end) {
  return new Promise((resolve, reject) => {
    if (!AMap.Driving) {
      reject(new Error("高德驾车规划插件未加载"));
      return;
    }
    const service = new AMap.Driving({
      policy: typeof AMap.DrivingPolicy?.LEAST_TIME === "number" ? AMap.DrivingPolicy.LEAST_TIME : 0,
      extensions: "all",
      hideMarkers: true,
      showTraffic: false,
    });

    service.search(
      new AMap.LngLat(start.lng, start.lat),
      new AMap.LngLat(end.lng, end.lat),
      (status, result) => {
        if (status === "complete") {
          const path = extractDrivingPath(result);
          if (path.length > 1) {
            resolve(path);
            return;
          }
        }
        reject(new Error(makeDrivingErrorMessage(result)));
      },
    );
  });
}

async function searchDrivingLeg(start, end) {
  const cacheKey = `${start.lng},${start.lat}->${end.lng},${end.lat}`;
  if (drivingPathCache.has(cacheKey)) {
    return Promise.resolve(drivingPathCache.get(cacheKey));
  }

  const errors = [];
  try {
    const path = await searchDrivingLegFromLocalApi(start, end);
    drivingPathCache.set(cacheKey, path);
    return path;
  } catch (err) {
    errors.push(`本地高德路线接口：${err.message || err}`);
  }

  try {
    const path = await searchDrivingLegFromJsapi(start, end);
    drivingPathCache.set(cacheKey, path);
    return path;
  } catch (err) {
    errors.push(`JSAPI Driving：${err.message || err}`);
  }

  throw new Error(errors.join("；"));
}

async function getDrivingLegs(points, onProgress, colorResolver = getRouteSegmentColor) {
  const routeLegs = [];
  const legs = points.length - 1;

  for (let index = 0; index < legs; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    onProgress?.(index + 1, legs, start, end);
    const path = await searchDrivingLeg(start, end);
    routeLegs.push({
      start,
      end,
      path,
      color: colorResolver(start, end, index),
    });
  }

  return routeLegs;
}

function routePolylineOptions(path, color, weight, zIndex, opacity = 0.92, strokeStyle = "solid") {
  const isDashed = strokeStyle === "dashed";
  return {
    path,
    strokeColor: color,
    strokeOpacity: opacity,
    strokeWeight: weight,
    strokeStyle,
    strokeDasharray: isDashed ? [16, 10] : [0, 0, 0],
    lineJoin: "round",
    lineCap: "round",
    zIndex,
    extData: { routeColor: color, isDashed },
  };
}

function getDistanceMeters(start, end) {
  const rad = Math.PI / 180;
  const lat1 = start[1] * rad;
  const lat2 = end[1] * rad;
  const deltaLat = (end[1] - start[1]) * rad;
  const deltaLng = (end[0] - start[0]) * rad;
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function flattenRouteLegs(routeLegs) {
  const path = [];
  routeLegs.forEach((leg) => {
    leg.path.forEach((rawPoint) => {
      const point = normalizePathPoint(rawPoint);
      if (!point) return;
      const previous = path[path.length - 1];
      if (!previous || previous[0] !== point[0] || previous[1] !== point[1]) {
        path.push(point);
      }
    });
  });
  return path;
}

function buildRouteProgressTrack(routeLegs) {
  const path = flattenRouteLegs(routeLegs);
  const cumulative = [0];
  for (let index = 1; index < path.length; index += 1) {
    cumulative.push(cumulative[index - 1] + getDistanceMeters(path[index - 1], path[index]));
  }
  return {
    path,
    cumulative,
    totalDistance: cumulative[cumulative.length - 1] || 0,
  };
}

function getTrackPointAtDistance(track, distance) {
  let index = 1;
  while (index < track.cumulative.length && track.cumulative[index] < distance) {
    index += 1;
  }

  const start = track.path[Math.max(0, index - 1)];
  const end = track.path[Math.min(track.path.length - 1, index)];
  const segmentStart = track.cumulative[Math.max(0, index - 1)] || 0;
  const segmentDistance = Math.max(1, (track.cumulative[index] || segmentStart) - segmentStart);
  const ratio = Math.max(0, Math.min(1, (distance - segmentStart) / segmentDistance));
  return [
    start[0] + (end[0] - start[0]) * ratio,
    start[1] + (end[1] - start[1]) * ratio,
  ];
}

function getPointOnTrack(track, progress) {
  if (!track || track.path.length === 0) return null;
  if (track.path.length === 1 || track.totalDistance <= 0) {
    return { point: track.path[0], from: track.path[0], to: track.path[0] };
  }

  const targetDistance = Math.max(0, Math.min(1, progress)) * track.totalDistance;
  const directionWindow = Math.min(5000, Math.max(350, track.totalDistance * 0.01));
  const fromDistance = Math.max(0, targetDistance - directionWindow);
  const toDistance = Math.min(track.totalDistance, targetDistance + directionWindow);

  return {
    point: getTrackPointAtDistance(track, targetDistance),
    from: getTrackPointAtDistance(track, fromDistance),
    to: getTrackPointAtDistance(track, toDistance),
  };
}

function getPixelXY(pixel) {
  return {
    x: typeof pixel?.getX === "function" ? pixel.getX() : pixel?.x,
    y: typeof pixel?.getY === "function" ? pixel.getY() : pixel?.y,
  };
}

function getScreenRouteAngle(from, to) {
  if (!map || !from || !to) return 0;
  const startPixel = isLeafletMap()
    ? map.latLngToContainerPoint(toLeafletLatLng(from))
    : getPixelXY(map.lngLatToContainer(new AMap.LngLat(from[0], from[1])));
  const endPixel = isLeafletMap()
    ? map.latLngToContainerPoint(toLeafletLatLng(to))
    : getPixelXY(map.lngLatToContainer(new AMap.LngLat(to[0], to[1])));
  const deltaX = endPixel.x - startPixel.x;
  const deltaY = endPixel.y - startPixel.y;

  if (!Number.isFinite(deltaX) || !Number.isFinite(deltaY) || Math.hypot(deltaX, deltaY) < 0.001) {
    return 0;
  }

  return (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
}

function getFullRouteLegCount() {
  return Object.values(dayRoutes).reduce((total, route) => total + Math.max(route.points.length - 1, 0), 0);
}

function removeRouteLines(lines) {
  lines.forEach((line) => {
    if (isLeafletMap()) {
      line.remove();
    } else {
      line.setMap(null);
    }
  });
  return [];
}

function drawRouteLegLines(routeLegs, { weight, zIndex, shadow = false, dashed = false, opacity = 0.94 }) {
  const lines = [];
  const strokeStyle = dashed ? "dashed" : "solid";

  if (isLeafletMap()) {
    routeLegs.forEach((leg) => {
      const path = toLeafletPath(leg.path);
      if (shadow) {
        const shadowLine = L.polyline(path, {
          color: "#fffaf0",
          weight: weight + 4,
          opacity: 0.72,
          dashArray: dashed ? "16 10" : undefined,
          lineCap: "round",
          lineJoin: "round",
        }).addTo(map);
        shadowLine._routeColor = "#fffaf0";
        lines.push(shadowLine);
      }
      const routeLine = L.polyline(path, {
        color: leg.color,
        weight,
        opacity,
        dashArray: dashed ? "16 10" : undefined,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
      routeLine._routeColor = leg.color;
      lines.push(routeLine);
    });
    return lines;
  }

  routeLegs.forEach((leg, index) => {
    if (shadow) {
      lines.push(
        new AMap.Polyline(
          routePolylineOptions(leg.path, "#fffaf0", weight + 4, zIndex - 1, 0.72, strokeStyle),
        ),
      );
    }
    lines.push(
      new AMap.Polyline(
        routePolylineOptions(leg.path, leg.color, weight, zIndex + index, opacity, strokeStyle),
      ),
    );
  });
  map.add(lines);
  return lines;
}

function setFullRouteDimmed(isDimmed) {
  fullRouteLines.forEach((line) => {
    const color = isLeafletMap() ? line._routeColor : line.getExtData?.().routeColor;
    const isShadow = color === "#fffaf0";
    if (isLeafletMap()) {
      line.setStyle({
        opacity: isDimmed ? (isShadow ? 0.18 : 0.3) : (isShadow ? 0.72 : 0.94),
        weight: isDimmed ? (isShadow ? 7 : 5) : (isShadow ? 11 : 7),
      });
    } else if (typeof line.setOptions === "function") {
      line.setOptions({
        strokeOpacity: isDimmed ? (isShadow ? 0.18 : 0.3) : (isShadow ? 0.72 : 0.94),
        strokeWeight: isDimmed ? (isShadow ? 7 : 5) : (isShadow ? 11 : 7),
      });
    }
  });
}

function ensureCarMarker() {
  if (!map) return null;
  if (carMarker) return carMarker;

  if (isLeafletMap()) {
    carMarker = L.marker(toLeafletLatLng(airportStop), {
      icon: L.divIcon({
        className: "leaflet-car-icon",
        html: '<div class="map-car" title="当前滚动位置" aria-label="当前滚动位置"></div>',
        iconSize: [36, 22],
        iconAnchor: [18, 11],
      }),
      title: "当前滚动位置",
      keyboard: false,
    }).addTo(map);
    return carMarker;
  }

  const content = document.createElement("div");
  content.className = "map-car";
  content.title = "当前滚动位置";
  content.setAttribute("aria-label", "当前滚动位置");

  carMarker = new AMap.Marker({
    position: toLngLat(airportStop),
    content,
    title: "当前滚动位置",
    offset: new AMap.Pixel(-18, -12),
    zIndex: 120,
  });
  map.add(carMarker);
  return carMarker;
}

function setCarToDayProgress(day, progress) {
  const track = routeProgressTracks.get(Number(day));
  if (!track) return;
  const marker = ensureCarMarker();
  const located = getPointOnTrack(track, progress);
  if (!marker || !located) return;

  try {
    const angle = getScreenRouteAngle(located.from, located.to);
    if (isLeafletMap()) {
      marker.setLatLng(toLeafletLatLng(located.point));
      marker.getElement()?.querySelector(".map-car")?.style.setProperty("--car-angle", `${angle}deg`);
    } else {
      marker.setPosition(located.point);
      if (typeof marker.setAngle === "function") {
        marker.setAngle(angle);
      }
    }
  } catch (error) {
    console.warn("小车位置更新失败，保留上一次有效位置", error);
  }
}

function getScrollProgressDay() {
  if (dayCards.length === 0) return { day: 1, progress: 0 };

  const viewportTop = Math.min(120, window.innerHeight * 0.14);
  const viewportBottom = window.innerHeight;
  const focusY = window.innerHeight * 0.56;
  const metrics = dayCards.map((card) => {
    const rect = card.getBoundingClientRect();
    const overlap = Math.max(0, Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop));
    const center = rect.top + rect.height / 2;
    return {
      card,
      day: Number(card.dataset.day),
      top: rect.top,
      bottom: rect.bottom,
      height: Math.max(1, rect.height),
      overlap,
      centerDistance: Math.abs(center - focusY),
    };
  });

  const focusCandidate = metrics.find((item) => focusY >= item.top && focusY <= item.bottom);
  let current = focusCandidate || metrics[0];
  if (!focusCandidate) {
    metrics.forEach((item) => {
      if (
        item.overlap > current.overlap + 1 ||
        (Math.abs(item.overlap - current.overlap) <= 1 && item.centerDistance < current.centerDistance)
      ) {
        current = item;
      }
    });
  }

  if (current.overlap <= 0) {
    current = metrics.reduce((best, item) => (
      item.centerDistance < best.centerDistance ? item : best
    ), current);
  }

  let referenceY = focusY;
  if (current.overlap > 0) {
    const visibleTop = Math.max(current.top, viewportTop);
    const visibleBottom = Math.min(current.bottom, viewportBottom);
    referenceY = Math.max(visibleTop, Math.min(visibleBottom, focusY));
    if (focusY < visibleTop || focusY > visibleBottom) {
      referenceY = visibleTop + (visibleBottom - visibleTop) / 2;
    }
  }

  const progress = Math.max(0, Math.min(1, (referenceY - current.top) / current.height));
  return { day: current.day, progress };
}

function updateScrollCar() {
  if (!map || routeProgressTracks.size === 0) return;
  const { day, progress } = getScrollProgressDay();
  dayCards.forEach((card) => {
    card.classList.toggle("is-scroll-current", Number(card.dataset.day) === day);
  });
  setCarToDayProgress(day, progress);
}

function scheduleScrollCarUpdate() {
  if (scrollCarFrame) return;
  scrollCarFrame = window.requestAnimationFrame(() => {
    scrollCarFrame = null;
    updateScrollCar();
  });
}

function fitRouteLayers(layers, padding = [70, 60, 70, 60]) {
  if (isLeafletMap()) {
    const boundedLayers = layers.filter((layer) => typeof layer.getBounds === "function");
    if (boundedLayers.length === 0) return;
    const bounds = L.featureGroup(boundedLayers).getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [padding[1], padding[0]], maxZoom: 11 });
    }
    return;
  }
  map.setFitView(layers, false, padding);
}

async function drawFullRoute() {
  const requestId = ++routeRequestSeq;
  fullRouteLines = removeRouteLines(fullRouteLines);
  optionalRouteLines = removeRouteLines(optionalRouteLines);
  routeProgressTracks.clear();

  try {
    const routeLegs = [];
    const totalLegs = getFullRouteLegCount();
    let completedLegs = 0;

    for (const [day, route] of Object.entries(dayRoutes)) {
      const dayColor = getDayRouteColor(day);
      const dayLegs = await getDrivingLegs(
        route.points,
        (done, total, start, end) => {
          if (requestId === routeRequestSeq) {
            setStatus(`正在请求高德驾车路线 ${completedLegs + done}/${totalLegs}：D${day} ${start.name} - ${end.name}`);
          }
        },
        () => dayColor,
      );
      completedLegs += Math.max(route.points.length - 1, 0);
      routeLegs.push(...dayLegs);
      routeProgressTracks.set(Number(day), buildRouteProgressTrack(dayLegs));
    }

    if (requestId !== routeRequestSeq) return;
    fullRouteLines = drawRouteLegLines(routeLegs, { weight: 7, zIndex: 30, shadow: true });
    optionalRouteLines = await drawOptionalRouteBranches(null, requestId);
    if (requestId !== routeRequestSeq) return;
    setFullRouteDimmed(false);
    ensureCarMarker();
    updateScrollCar();
    fitRouteLayers([...fullRouteLines, ...optionalRouteLines, ...markers, ...optionalMarkers]);
    setStatus(
      isLeafletMap()
        ? "已显示内置高德驾车道路数据：沿途可选支线以虚线显示，点击某一天会高亮主线和当天备选"
        : "已显示全程高德驾车路线：沿途可选支线以虚线显示，点击某一天会高亮主线和当天备选",
    );
  } catch (err) {
    if (requestId === routeRequestSeq) {
      setStatus(`高德驾车路线请求失败：${err.message || err}。请检查路线规划权限、域名白名单或安全密钥。`);
    }
  }
  updateOpenAmapLink(mainRouteStops);
}

function clearHighlight() {
  highlightLines = removeRouteLines(highlightLines);
  optionalRouteLines = removeRouteLines(optionalRouteLines);
  markers.forEach((marker) => {
    const el = isLeafletMap()
      ? marker.getElement()?.querySelector(".map-pin")
      : marker.getContent();
    if (el && el.classList) el.classList.remove("map-pin--active");
  });
}

function markActiveStops(points) {
  const activeNames = new Set(points.map((point) => point.name));
  markers.forEach((marker) => {
    const el = isLeafletMap()
      ? marker.getElement()?.querySelector(".map-pin")
      : marker.getContent();
    const title = isLeafletMap() ? marker._routePointName : marker.getTitle();
    if (el && el.classList) {
      el.classList.toggle("map-pin--active", activeNames.has(title));
    }
  });
}

function getRouteMarkerStops() {
  const seen = new Set();
  const routeStops = [];
  Object.values(dayRoutes).forEach((route) => {
    route.points.forEach((point) => {
      const key = getPointKey(point);
      if (seen.has(key)) return;
      seen.add(key);
      routeStops.push(point);
    });
  });
  return routeStops;
}

function getPointKey(point) {
  return `${point.name}:${point.lng}:${point.lat}`;
}

function getOptionalMarkerStops() {
  const seen = new Set();
  const mainStopKeys = new Set(getRouteMarkerStops().map((point) => getPointKey(point)));
  const routeStops = [];
  optionalRouteBranches.forEach((branch) => {
    branch.points.slice(1).forEach((point) => {
      const key = getPointKey(point);
      if (seen.has(key) || mainStopKeys.has(key)) return;
      seen.add(key);
      routeStops.push(point);
    });
  });
  return routeStops;
}

function getOptionalBranchesForDay(day) {
  if (!day) return optionalRouteBranches;
  return optionalRouteBranches.filter((branch) => branch.day === Number(day));
}

async function drawOptionalRouteBranches(day, requestId) {
  const branches = getOptionalBranchesForDay(day);
  if (!map || branches.length === 0) return [];

  const lines = [];
  for (const branch of branches) {
    try {
      const routeLegs = await getDrivingLegs(branch.points, undefined, () => branch.color);
      if (requestId !== routeRequestSeq) return lines;
      lines.push(
        ...drawRouteLegLines(routeLegs, {
          weight: 6,
          zIndex: 125,
          shadow: true,
          dashed: true,
          opacity: 0.98,
        }),
      );
    } catch (err) {
      console.warn(`${branch.label} 请求失败，保留主线`, err);
    }
  }
  return lines;
}

async function highlightDay(day) {
  if (!map) {
    setStatus("地图未加载：先输入高德 JSAPI key");
    return;
  }

  const route = dayRoutes[day];
  if (!route) return;

  activeDay = day;
  dayCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.day === String(day));
  });
  clearHighlight();
  markActiveStops(route.points);
  setFullRouteDimmed(true);
  updateOpenAmapLink(route.points);

  if (route.points.length <= 1) {
    const marker = markers.find((item) => (
      isLeafletMap() ? item._routePointName : item.getTitle()
    ) === route.points[0].name);
    if (marker) {
      if (isLeafletMap()) {
        map.setView(marker.getLatLng(), 10);
      } else {
        map.setZoomAndCenter(10, marker.getPosition());
      }
    }
    setStatus(`${route.label}：市区轻行程，无长距离导航`);
    return;
  }

  const requestId = ++routeRequestSeq;
  try {
    const routeLegs = await getDrivingLegs(
      route.points,
      (done, total, start, end) => {
        if (requestId === routeRequestSeq) {
          setStatus(`${route.label}：正在请求高德驾车路线 ${done}/${total}，${start.name} - ${end.name}`);
        }
      },
      () => getDayRouteColor(day),
    );
    if (requestId !== routeRequestSeq) return;
    routeProgressTracks.set(Number(day), buildRouteProgressTrack(routeLegs));
    highlightLines = drawRouteLegLines(routeLegs, { weight: 12, zIndex: 90, shadow: true });
    optionalRouteLines = await drawOptionalRouteBranches(Number(day), requestId);
    if (requestId !== routeRequestSeq) return;
    const scrollProgress = getScrollProgressDay();
    setCarToDayProgress(day, Math.max(0.08, scrollProgress.day === Number(day) ? scrollProgress.progress : 0.08));
    try {
      fitRouteLayers([...highlightLines, ...optionalRouteLines], [90, 70, 90, 70]);
    } catch (error) {
      console.warn("当天路线视野调整失败，保留当前地图视野", error);
    }
    const optionalText = optionalRouteLines.length > 0 ? "，当天可选支线以虚线显示" : "";
    setStatus(`${route.label}：已高亮当天高德驾车导航路线${optionalText}，小车会随滚动沿这一天前进`);
  } catch (err) {
    if (requestId === routeRequestSeq) {
      setStatus(`${route.label}：高德驾车路线请求失败：${err.message || err}。请点“高德打开”查看导航。`);
    }
  }
}

function initStaticRouteMap() {
  if (map) return;
  if (!window.L) {
    setStatus("静态路线数据已加载，但离线地图组件不可用；请点击“高德打开”导航");
    return;
  }

  mapMode = "leaflet";
  map = L.map("amap-roadtrip", { zoomControl: true, attributionControl: true }).setView([50.4, 121.2], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  markers = getRouteMarkerStops().map((point, index) => makeMarker(point, index));
  optionalMarkers = getOptionalMarkerStops().map((point) => makeOptionalMarker(point));
  markers.forEach((marker) => marker.addTo(map));
  optionalMarkers.forEach((marker) => marker.addTo(map));
  setupPanel?.classList.add("is-hidden");
  drawFullRoute();
}

function initMap() {
  if (mapMode === "amap") return;
  if (isLeafletMap()) {
    map.remove();
    map = null;
    mapMode = "";
    fullRouteLines = [];
    highlightLines = [];
    optionalRouteLines = [];
    markers = [];
    optionalMarkers = [];
    carMarker = null;
    routeProgressTracks.clear();
  }

  if (!window.AMap) return;

  map = new AMap.Map("amap-roadtrip", {
    resizeEnable: true,
    zoom: 6,
    center: [121.2, 50.4],
    mapStyle: "amap://styles/normal",
  });
  mapMode = "amap";

  if (AMap.ToolBar) {
    map.addControl(new AMap.ToolBar({ position: "RT" }));
  }
  if (AMap.Scale) {
    map.addControl(new AMap.Scale());
  }

  markers = getRouteMarkerStops().map((point, index) => makeMarker(point, index));
  optionalMarkers = getOptionalMarkerStops().map((point) => makeOptionalMarker(point));
  map.add([...markers, ...optionalMarkers]);

  setupPanel?.classList.add("is-hidden");
  drawFullRoute();
}

async function bootAmapFromInputs() {
  const key = (keyInput?.value || "").trim();
  const securityCode = (securityInput?.value || "").trim();
  const routeKey = (routeKeyInput?.value || "").trim();
  if (!key) {
    setStatus("地图等待高德 Web端 JSAPI key；也可以使用本机私有配置自动加载");
    return;
  }
  try {
    setStatus("正在保存本机高德配置");
    await saveLocalAmapConfig({ key, securityCode, routeKey });
    localStorage.setItem(AMAP_STORAGE_KEY, key);
    if (securityCode) {
      localStorage.setItem(AMAP_SECURITY_STORAGE_KEY, securityCode);
    } else {
      localStorage.removeItem(AMAP_SECURITY_STORAGE_KEY);
    }
    setStatus("正在加载高德地图");
    await loadAmapScript(key, securityCode);
    await loadAmapPlugins();
    initMap();
  } catch (err) {
    setStatus(err && err.message ? err.message : "高德地图加载失败");
  }
}

async function tryAutoLoadAmap() {
  const localConfig = await loadLocalAmapConfig();
  const storedKey = localStorage.getItem(AMAP_STORAGE_KEY) || "";
  const key = storedKey || localConfig.key;
  const securityCode =
    localStorage.getItem(AMAP_SECURITY_STORAGE_KEY) ||
    localConfig.securityCode ||
    "";

  if (keyInput) {
    keyInput.value = storedKey ? key : "";
    if (localConfig.key && !storedKey) {
      keyInput.placeholder = "已读取本机私有配置";
    }
  }
  if (securityInput) {
    securityInput.value = storedKey ? securityCode : "";
    if (localConfig.securityCode && !storedKey) {
      securityInput.placeholder = "已读取本机安全密钥";
    }
  }
  if (routeKeyInput && localConfig.routeKeyReady) {
    routeKeyInput.placeholder = "已读取本机路线规划 Key";
  }

  if (!key) {
    updateOpenAmapLink(mainRouteStops);
    initStaticRouteMap();
    setStatus(
      "已加载内置高德驾车道路数据与默认地图；不需要路线 key。输入 JSAPI key 可切换到高德底图",
    );
    return;
  }

  try {
    setStatus(localConfig.key && !storedKey ? "正在使用本机私有配置加载高德地图" : "正在加载高德地图");
    await loadAmapScript(key, securityCode);
    await loadAmapPlugins();
    initMap();
  } catch (err) {
    initStaticRouteMap();
    setStatus(`${err && err.message ? err.message : "高德地图加载失败"}；已回退到内置道路地图`);
  }
}

loadBtn?.addEventListener("click", bootAmapFromInputs);

editAmapConfigBtn?.addEventListener("click", () => {
  setupPanel?.classList.remove("is-hidden");
  setStatus("输入高德 Web端 JSAPI key 可切换到底图；内置道路导航数据无需路线规划 key");
});

showFullRouteBtn?.addEventListener("click", () => {
  if (!map) {
    initStaticRouteMap();
  }
  activeDay = null;
  dayCards.forEach((card) => card.classList.remove("is-selected"));
  clearHighlight();
  setFullRouteDimmed(false);
  drawFullRoute();
});

dayCards.forEach((card) => {
  const day = Number(card.dataset.day);
  card.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) return;
    highlightDay(day);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      highlightDay(day);
    }
  });
});

tryAutoLoadAmap();
renderRouteColorLegend();

window.addEventListener("scroll", scheduleScrollCarUpdate, { passive: true });
window.addEventListener("resize", scheduleScrollCarUpdate);

const initialScrollTarget = new URLSearchParams(window.location.search).get("scroll");
if (initialScrollTarget) {
  window.addEventListener("load", () => {
    const target = document.getElementById(initialScrollTarget.replace(/^#/, ""));
    if (target) {
      setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
    }
  });
}

const initialDay = Number(new URLSearchParams(window.location.search).get("day"));
if (initialDay) {
  window.addEventListener("load", () => {
    setTimeout(() => highlightDay(initialDay), 1200);
  });
}
