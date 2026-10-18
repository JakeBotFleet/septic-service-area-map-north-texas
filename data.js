// Service area data for Out West Septic.
// Coordinates are WGS84 lat/lon. Centroids are approximate.

window.OWS_DATA = {
  hq: {
    name: "Lone Camp, TX (HQ)",
    lat: 32.78,
    lon: -98.32,
    note: "Out West Septic headquarters. Mail goes to the Wise County PO box; the office is at this location."
  },
  counties: [
    { name: "Palo Pinto County",     lat: 32.75, lon: -98.30, seat: "Palo Pinto" },
    { name: "Hood County",           lat: 32.43, lon: -97.83, seat: "Granbury" },
    { name: "Erath County",          lat: 32.23, lon: -98.22, seat: "Stephenville" },
    { name: "Stephens County",       lat: 32.71, lon: -98.83, seat: "Breckenridge" },
    { name: "Young County",          lat: 33.18, lon: -98.69, seat: "Graham" },
    { name: "Jack County",           lat: 33.23, lon: -98.17, seat: "Jacksboro" },
    { name: "Eastland County",       lat: 32.40, lon: -98.83, seat: "Eastland" }
  ],
  towns: [
    { name: "Mineral Wells",     lat: 32.81, lon: -98.11 },
    { name: "Graford",           lat: 32.94, lon: -98.25 },
    { name: "Possum Kingdom Lake", lat: 32.87, lon: -98.43 },
    { name: "Eastland",          lat: 32.40, lon: -98.82 }
  ],
  outOfArea: [
    { name: "Parker County", lat: 32.78, lon: -97.80 },
    { name: "Tarrant County", lat: 32.77, lon: -97.29 }
  ]
};
