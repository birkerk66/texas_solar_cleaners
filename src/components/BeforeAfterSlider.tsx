import { useRef, useState, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";
import afterImg from "@/assets/panel-after.jpg";
import beforeImg from "@/assets/panel-before.jpg";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            The difference
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            See the results for yourself
          </h2>
          <p className="mt-3 text-muted-foreground">
            Drag the slider to reveal the before & after. One professional
            cleaning — that's all it takes.
          </p>
        </div>

        <div className="mt-12">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] select-none"
            style={{
              aspectRatio: "16 / 7",
              cursor: dragging ? "grabbing" : "ew-resize",
              touchAction: "none",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* AFTER — base layer, always full size */}
            <img
              src={afterImg}
              alt="After cleaning — bright solar panels"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* BEFORE — wrapper clips, img stays full width = no jump */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <img
                src={beforeImg}
                alt="Before cleaning — dirty solar panels"
                className="absolute inset-0 h-full object-cover"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.offsetWidth}px`
                    : "100vw",
                }}
                draggable={false}
              />
            </div>

            {/* Divider */}
            <div
              className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${position}%`, transform: "translateX(-50%)", pointerEvents: "none" }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_2px_18px_rgba(0,0,0,0.35)] ring-2 ring-white/80"
              style={{
                left: `${position}%`,
                transform: `translate(-50%, -50%) scale(${dragging ? 1.1 : 1})`,
                transition: "transform 0.12s ease",
                pointerEvents: "none",
              }}
            >
              <ArrowLeftRight className="h-5 w-5 text-primary" />
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Before
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              After
            </div>

            {/* Badge */}
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-bold text-primary shadow ring-1 ring-border backdrop-blur-sm">
              Up to <span className="text-gold">+30%</span> more power
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            ← Drag the handle to compare →
          </p>
        </div>
      </div>
    </section>
  );
}
