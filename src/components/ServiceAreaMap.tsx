import { useEffect, useRef } from "react";

export function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [29.7858, -95.8244], // Katy, TX
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
        maxBounds: [[28.8, -97.2], [30.8, -93.8]],
        maxBoundsViscosity: 1.0,
      });

      mapInstanceRef.current = map;

      // OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Service radius circle (~40 mile radius)
      L.circle([29.7858, -95.8244], {
        color: "#2563eb",
        fillColor: "#3b82f6",
        fillOpacity: 0.08,
        weight: 2,
        dashArray: "8 6",
        radius: 64000,
      }).addTo(map);

      // HQ marker — custom gold icon
      const hqIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            width:44px;height:44px;
            background:linear-gradient(135deg,#f59e0b,#d97706);
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 12px rgba(0,0,0,0.35);
            display:flex;align-items:center;justify-content:center;
            font-size:20px;
          ">☀️</div>
          <div style="
            margin-top:4px;
            background:white;
            border-radius:6px;
            padding:3px 8px;
            font-size:11px;font-weight:700;
            color:#1e3a8a;
            box-shadow:0 1px 6px rgba(0,0,0,0.18);
            white-space:nowrap;
            text-align:center;
          ">Texas Solar Cleaners</div>
        `,
        iconSize: [160, 64],
        iconAnchor: [80, 44],
      });

      // City dot icon
      const cityIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            width:12px;height:12px;
            background:#2563eb;
            border-radius:50%;
            border:2px solid white;
            box-shadow:0 1px 4px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      // Cities
      const cities = [
        { name: "Katy, TX", lat: 29.7858, lng: -95.8244, hq: true },
        { name: "Houston", lat: 29.7604, lng: -95.3698 },
        { name: "Sugar Land", lat: 29.6196, lng: -95.6349 },
        { name: "Pearland", lat: 29.5635, lng: -95.2860 },
        { name: "Cypress", lat: 29.9691, lng: -95.6972 },
        { name: "Missouri City", lat: 29.6185, lng: -95.5377 },
        { name: "The Woodlands", lat: 30.1658, lng: -95.4613 },
        { name: "Stafford", lat: 29.6160, lng: -95.5577 },
        { name: "Richmond", lat: 29.5821, lng: -95.7607 },
      ];

      cities.forEach((c) => {
        if (c.hq) {
          L.marker([c.lat, c.lng], { icon: hqIcon }).addTo(map);
        } else {
          L.marker([c.lat, c.lng], { icon: cityIcon })
            .bindTooltip(c.name, { permanent: true, direction: "top", offset: [0, -8], className: "city-tooltip" })
            .addTo(map);
        }
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Coverage
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Service Area
          </h2>
          <p className="mt-3 text-muted-foreground">
            Based in Katy, TX — serving homes across the Greater Houston area.
          </p>
        </div>
      </div>

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />

      <style>{`
        .city-tooltip {
          background: white !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 6px !important;
          padding: 2px 8px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          color: #1e3a8a !important;
          box-shadow: 0 1px 6px rgba(0,0,0,0.15) !important;
          white-space: nowrap !important;
        }
        .city-tooltip::before { display: none !important; }
        .leaflet-control-attribution { font-size: 10px !important; }
      `}</style>

      <div
        className="border-y border-border"
        style={{ height: 480 }}
      >
        <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
      </div>
    </section>
  );
}
