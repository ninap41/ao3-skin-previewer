# ao3-skin-previewer

This imported project is a Node.js web app for previewing AO3 work and site skins.

## Run on Replit

- The `Start application` workflow runs `SITE_NAME=ao3-skin-previewer PORT=5000 npm start`.
- The app is served at `/` and `/ao3-preview`.
- Runtime serving is dependency-free; development dependencies are installed from `package-lock.json`.

## Useful commands

- `npm start` starts the local server on port 4173 unless `PORT` is set.
- `node --test test/*.test.mjs` runs the test suite on Node 20.
- `npm run build-codemirror` rebuilds the committed CodeMirror bundle.
- `npm run scrape-pages` refreshes the scraped AO3 pages.