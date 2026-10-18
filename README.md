# septic-service-area-map-north-texas

A single-page interactive map showing the Out West Septic service area. Seven counties in rural North Texas, plus the four key towns. Parker and Tarrant are flagged as out of area. Drop the directory on any static host.

The map uses Leaflet and OpenStreetMap tiles. No API key. No account. No tracking. The data (county centroids, town coordinates, headquarters pin) is in a single `data.js` file so you can edit it without touching the map logic.

## What's in it

- `index.html` — the page chrome and the OWS branding
- `data.js` — the service area data (county centroids, towns, HQ, out-of-area)
- `map.js` — the Leaflet initialization and the pin rendering
- `styles.css` — the visual style, including the custom map pins

## Run it locally

```
cd septic-service-area-map-north-texas
python -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy it

The map is a static site. Drop the four files on any host. Netlify, GitHub Pages, Cloudflare Pages, S3 — all work. The Leaflet CSS and JS load from `unpkg.com`, so the host only needs to serve the four files.

## Edit the data

Open `data.js`. The shape is:

```js
window.OWS_DATA = {
  hq: { name, lat, lon, note },
  counties: [{ name, lat, lon, seat }, ...],
  towns: [{ name, lat, lon }, ...],
  outOfArea: [{ name, lat, lon }, ...]
};
```

Add a county, change a town, update the HQ pin — all without touching the map logic. The `map.js` reads `OWS_DATA` and renders.

## What the colors mean

- Red star: HQ
- Orange diamond: served county (centroid shown, we work the whole county)
- Dark red dot: served town
- Gray X: out of area (Parker and Tarrant)

The legend at the bottom of the page spells this out.

## Limitations

- Centroids are approximate. We don't claim to only serve within 5 miles of the dot.
- The map uses OpenStreetMap tiles. If you're offline, the map shows a grey background.
- No county boundary polygons. Drawing real boundaries would require a GeoJSON file (~3 MB for the seven counties). The marker approach is lighter and gets the point across.

## License

MIT. See `LICENSE`. Leaflet is BSD-2. OpenStreetMap data is ODbL.
