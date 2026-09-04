// A dependency-free dev server for the previewer: serves public/ at the root,
// the page at / and /ao3-preview with its {{SITE_NAME}} token filled, and
// /vendor/ cacheable. `npm start` → http://localhost:4173 (PORT overrides).
// An app that embeds the previewer mounts public/ itself instead (Byler
// Cowrite does, from this directory as a sibling).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname, normalize } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "public");
const SITE_NAME = process.env.SITE_NAME || "AO3 skin previewer";
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" };

export function renderPage(html) {
  return html.replaceAll("{{SITE_NAME}}", SITE_NAME);
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  let path = decodeURIComponent(url.pathname);
  if (path === "/" || path === "/ao3-preview" || path === "/ao3-preview.html") {
    const html = await readFile(join(ROOT, "ao3-preview.html"), "utf-8");
    res.writeHead(200, { "content-type": TYPES[".html"], "cache-control": "no-store" });
    return res.end(renderPage(html));
  }
  const file = normalize(join(ROOT, path));
  if (!file.startsWith(ROOT)) return res.writeHead(403).end();
  try {
    const s = await stat(file);
    if (!s.isFile()) throw new Error("dir");
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream", "cache-control": path.startsWith("/vendor/") ? "public, max-age=604800" : "no-store" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "content-type": "text/plain" }).end("not found");
  }
});

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const PORT = Number(process.env.PORT) || 4173;
  server.listen(PORT, () => console.log(`${SITE_NAME} on http://localhost:${PORT}`));
}
export default server;
