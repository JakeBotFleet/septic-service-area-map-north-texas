// Render the Out West Septic service area map.

(function () {
  const data = window.OWS_DATA;
  if (!data) {
    console.error("OWS_DATA missing");
    return;
  }

  // Center on the HQ and pick a zoom that shows all of the served counties.
  const map = L.map("map", { scrollWheelZoom: false }).setView([data.hq.lat, data.hq.lon], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // HQ pin
  const hqIcon = L.divIcon({
    className: "ows-pin ows-hq",
    html: '<div class="pin-inner">★</div>',
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
  L.marker([data.hq.lat, data.hq.lon], { icon: hqIcon })
    .addTo(map)
    .bindPopup(
      "<strong>" + data.hq.name + "</strong><br/>" + data.hq.note
    );

  // County markers
  const countyIcon = L.divIcon({
    className: "ows-pin ows-county",
    html: '<div class="pin-inner">◆</div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  for (const c of data.counties) {
    L.marker([c.lat, c.lon], { icon: countyIcon })
      .addTo(map)
      .bindPopup(
        "<strong>" + c.name + "</strong><br/>County seat: " + c.seat
      );
  }

  // Town markers
  const townIcon = L.divIcon({
    className: "ows-pin ows-town",
    html: '<div class="pin-inner">●</div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  for (const t of data.towns) {
    L.marker([t.lat, t.lon], { icon: townIcon })
      .addTo(map)
      .bindPopup("<strong>" + t.name + "</strong><br/>Served town");
  }

  // Out of area (greyed)
  const outIcon = L.divIcon({
    className: "ows-pin ows-out",
    html: '<div class="pin-inner">×</div>',
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });
  for (const o of data.outOfArea) {
    L.marker([o.lat, o.lon], { icon: outIcon })
      .addTo(map)
      .bindPopup("<strong>" + o.name + "</strong><br/>Not in service area");
  }

  // Fit the map to include all the served counties with a small padding.
  const served = data.counties.map(c => [c.lat, c.lon]);
  const bounds = L.latLngBounds(served);
  map.fitBounds(bounds, { padding: [40, 40] });
})();
