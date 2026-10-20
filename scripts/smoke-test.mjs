import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.ok(scripts.length, "index.html must contain the app script");
const appScript = scripts.at(-1)[1];
new Function(appScript);

const requiredIds = [
  "canvas", "frames", "frameLabel", "countLabel", "projectName", "saveStatus", "layersList", "addLayerBtn",
  "helpBtn", "openBtn", "saveBtn", "playBtn", "duplicateBtn", "addFrameBtn",
  "deleteFrameBtn", "undoBtn", "clearBtn", "exportPngBtn", "exportVideoBtn",
  "importImageBtn", "imageInput", "fileInput", "fpsRange", "fpsValue",
  "onionToggle", "bgSelect", "sizeRange", "sizeValue", "colors", "colorName",
  "modal", "modalTitle", "modalText", "modalOk"
];
for (const id of requiredIds) {
  assert.ok(html.includes('id="' + id + '"'), \`Missing UI element: \${id}\`);
}
for (const file of ["manifest.webmanifest", "icon.svg", "sw.js"]) {
  assert.ok(existsSync(new URL("../" + file, import.meta.url)), \`Missing app asset: \${file}\`);
}
assert.ok(html.includes("serviceWorker.register('./sw.js')"), "Service worker must be registered");
assert.ok(appScript.includes("globalCompositeOperation='destination-out'"), "Eraser must be transparent");
assert.ok(appScript.includes("exportCanvas.captureStream(fps)"), "Video export must use the clean export canvas");
assert.ok(appScript.includes("kind:'image'"), "Image import must create image assets");
console.log("Animation Studio smoke tests passed.");
