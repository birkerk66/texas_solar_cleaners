import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Sun,
  Star,
  ShieldCheck,
  Users,
  SprayCan,
  Bird,
  Eye,
  Phone,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import project3Img from "@/assets/project-3.jpg";
import logoImg from "@/assets/logo.png";
import work1Img from "@/assets/work-1.jpg";
import work5Img from "@/assets/work-5.jpg";
import work6Img from "@/assets/work-6.jpg";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Texas Solar Cleaners — Solar Panel Cleaning in Houston & Katy, TX" },
      {
        name: "description",
        content:
          "Professional solar panel cleaning in Houston & Katy, TX. Boost efficiency up to 30%. Family owned, affordable. Get a free quote today.",
      },
      { property: "og:title", content: "Texas Solar Cleaners — Solar Panel Cleaning" },
      {
        property: "og:description",
        content:
          "Professional solar cleaning in Houston, TX. Boost your efficiency by up to 30% today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <BeforeAfterSlider />
      <Projects />
      <Reviews />
      <Contact />
      <ServiceAreaMap />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pt-2">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center font-bold text-white" style={{ marginLeft: "-110px" }}>
          <img src={logoImg} alt="Texas Solar Cleaners" className="h-16 sm:h-50 w-auto" />
        </a>
        <a
          href="tel:3469782662"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 hover:bg-white/20 transition"
        >
          <Phone className="h-4 w-4" /> (346) 978-2662
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Texas Solar Cleaners — professional solar panel cleaning in Houston"
          width={1600}
          height={1100}
          className="h-full w-full object-cover"
          style={{
            animation: "heroZoom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
            transformOrigin: "center center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-sun)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
            <Sun className="h-3.5 w-3.5 text-gold" /> Houston · Katy · Sugar Land · Texas
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Don't Let Dirty Panels{" "}
            <span className="text-gold">Steal Your Power</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            Houston's most affordable solar panel cleaning. Boost your efficiency by up
            to <span className="font-semibold text-gold">30%</span> with one visit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition hover:translate-y-[-1px]"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:3469782662"
              className="inline-flex items-center gap-2 text-white/90 text-sm hover:text-white transition"
            >
              <Phone className="h-4 w-4" /> (346) 978-2662
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Star, value: "5.0", label: "Facebook Rating" },
    { icon: ShieldCheck, value: "100%", label: "Satisfaction Guaranteed" },
    { icon: Users, value: "Local", label: "Family Owned & Operated" },
  ];
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-3">
        {items.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const gridRef = useScrollReveal();
  const services = [
    {
      icon: SprayCan,
      title: "Panel Cleaning",
      desc: "Pure water, soft-brush method. Removes dust, pollen, and Houston grime — restoring full output safely without chemicals.",
    },
    {
      icon: Bird,
      title: "Bird Proofing",
      desc: "Critter guard installation around your array to keep nests, droppings, and damage away from your panels.",
    },
    {
      icon: Eye,
      title: "Visual Inspection",
      desc: "Top-to-bottom check of panels, racking, and wiring. We flag issues before they become expensive repairs.",
    },
  ];
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What we do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Services that pay for themselves
          </h2>
          <p className="mt-3 text-muted-foreground">
            One visit. Cleaner panels, more kWh, longer system life.
          </p>
        </div>
        <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                <CheckCircle2 className="h-4 w-4" /> Included in every visit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const gridRef = useScrollReveal();
  const projects = [
    {
      title: "Residential Cleaning — Katy, TX",
      location: "Katy, TX",
      image: work1Img,
    },
    {
      title: "Rooftop Panel Service",
      location: "Houston, TX",
      image: work5Img,
    },
    {
      title: "After Clean — Spotless Result",
      location: "Houston, TX",
      image: work6Img,
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Real jobs. Real results.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every job done right — from Katy to Houston and beyond.
          </p>
        </div>
        <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-border transition hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Michael R.",
      city: "Katy, TX",
      text: "These guys showed up on time, were super professional, and my panels look brand new. Already noticed my app showing better output. Highly recommend!",
    },
    {
      name: "Sandra L.",
      city: "Houston, TX",
      text: "Called in the morning and they came same day. Fair price, quick work, and they even checked for any loose wiring. Great local business!",
    },
    {
      name: "James T.",
      city: "Sugar Land, TX",
      text: "Been putting off cleaning my panels for two years. Wish I did it sooner — the difference is night and day. Texas Solar Cleaners made it easy.",
    },
  ];
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const count = reviews.length;

  const go = (next: number) => {
    setIndex((next + count) % count);
    setAnimKey((k) => k + 1);
  };

  const current = reviews[index];

  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What clients say
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Houston homeowners
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 ring-1 ring-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold">5.0 on Facebook</span>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="mx-auto max-w-3xl">
            <article
              key={animKey}
              className="relative animate-fade-in rounded-2xl bg-card p-8 sm:p-10 ring-1 ring-border shadow-[var(--shadow-soft)]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/40" />
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {current.text}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{current.name}</div>
                  <div className="text-xs text-muted-foreground">{current.city}</div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card ring-1 ring-border text-primary transition hover:bg-primary hover:text-primary-foreground hover:-translate-x-0.5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card ring-1 ring-border text-primary transition hover:bg-primary hover:text-primary-foreground hover:translate-x-0.5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div style={{ color: "#1E3A8A" }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-border" style={{ color: "#1E3A8A" }}>
            <Sun className="h-3.5 w-3.5 text-gold" /> Free, no-pressure quote
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Request Service
          </h2>
          <p className="mt-3 max-w-md font-medium" style={{ color: "#1E3A8A" }}>
            Tell us a bit about your home and we'll get back within one
            business day with a transparent quote.
          </p>
          <ul className="mt-6 space-y-3 font-medium" style={{ color: "#1E3A8A" }}>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Same-week scheduling across Houston & Katy
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Pure water, safe for all panel types
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Satisfaction guaranteed or it's free
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="tel:3469782662"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition"
            >
              <Phone className="h-4 w-4" /> Call (346) 978-2662
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-3xl bg-card p-7 sm:p-9 shadow-[var(--shadow-soft)] ring-1 ring-border"
        >
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Thanks — request received!</h3>
              <p className="mt-2 text-muted-foreground">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">Get a Free Quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No spam. No call center. Just us.
              </p>
              <div className="mt-6 space-y-4">
                <Field
                  label="Name"
                  icon={<Users className="h-4 w-4" />}
                  type="text"
                  placeholder="Jane Doe"
                />
                <Field
                  label="Phone"
                  icon={<Phone className="h-4 w-4" />}
                  type="tel"
                  placeholder="(346) 978-2662"
                />
                <Field
                  label="Address"
                  icon={<MapPin className="h-4 w-4" />}
                  type="text"
                  placeholder="123 Main St, Katy, TX"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition hover:translate-y-[-1px]"
              >
                Request My Free Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  type,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-3 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition">
        <span className="text-muted-foreground">{icon}</span>
        <input
          required
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
    </label>
  );
}

function ServiceArea() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    setOffset({ x: startRef.current.ox + dx, y: startRef.current.oy + dy });
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    setDragging(false);
    startRef.current = null;
  };

  // Houston area cities
  const cities = [
    { name: "Katy", dx: 0, dy: 0, hq: true },
    { name: "Houston", dx: 220, dy: -20 },
    { name: "Sugar Land", dx: 80, dy: 160 },
    { name: "Pearland", dx: 200, dy: 180 },
    { name: "Cypress", dx: 80, dy: -160 },
    { name: "Missouri City", dx: 120, dy: 120 },
    { name: "The Woodlands", dx: 200, dy: -260 },
    { name: "Stafford", dx: 140, dy: 80 },
  ];

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
            Click and drag the map to explore.
          </p>
        </div>
      </div>

      <div
        className="relative h-[480px] w-full overflow-hidden border-y border-border bg-secondary/40 select-none"
        style={{ cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            transition: dragging ? "none" : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            backgroundColor: "oklch(0.95 0.02 230)",
            backgroundImage: `
              linear-gradient(oklch(0.88 0.03 230 / 0.6) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.88 0.03 230 / 0.6) 1px, transparent 1px),
              linear-gradient(oklch(0.85 0.04 230 / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.85 0.04 230 / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 200px 200px, 200px 200px",
            backgroundPosition: "-1px -1px",
            width: "300%",
            height: "300%",
            left: "-100%",
            top: "-100%",
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 1200"
            preserveAspectRatio="none"
          >
            {/* I-10 freeway */}
            <path d="M0 580 Q 300 560 600 580 T 1200 600" stroke="oklch(0.70 0.06 230)" strokeWidth="8" fill="none" />
            {/* Beltway 8 */}
            <path d="M600 100 Q 900 300 950 600 Q 900 900 600 1100 Q 300 900 250 600 Q 300 300 600 100" stroke="oklch(0.75 0.05 230)" strokeWidth="5" fill="none" strokeDasharray="12 4" />
            {/* 99 Grand Parkway */}
            <path d="M600 0 Q 1050 200 1100 600 Q 1050 1000 600 1200 Q 150 1000 100 600 Q 150 200 600 0" stroke="oklch(0.78 0.04 230)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
            <path d="M0 300 L 1200 320" stroke="oklch(0.82 0.03 230)" strokeWidth="2" fill="none" />
            <path d="M0 900 L 1200 880" stroke="oklch(0.82 0.03 230)" strokeWidth="2" fill="none" />
            <path d="M300 0 L 280 1200" stroke="oklch(0.82 0.03 230)" strokeWidth="2" fill="none" />
            <path d="M900 0 L 920 1200" stroke="oklch(0.82 0.03 230)" strokeWidth="2" fill="none" />
            {/* Buffalo Bayou */}
            <path
              d="M100 400 Q 300 450 500 500 T 800 600 Q 900 650 1100 680"
              stroke="oklch(0.72 0.09 220)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>

          {/* Service radius */}
          <div
            className="absolute"
            style={{
              left: "50%", top: "50%",
              width: 420, height: 420,
              marginLeft: -210, marginTop: -210,
              borderRadius: "9999px",
              background: "radial-gradient(circle, oklch(0.48 0.16 245 / 0.18) 0%, oklch(0.48 0.16 245 / 0.06) 60%, transparent 100%)",
              border: "2px dashed oklch(0.48 0.16 245 / 0.5)",
            }}
          />

          {cities.map((c) => (
            <div
              key={c.name}
              className="absolute flex flex-col items-center"
              style={{
                left: `calc(50% + ${c.dx}px)`,
                top: `calc(50% + ${c.dy}px)`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {c.hq ? (
                <>
                  <div className="relative">
                    <span className="absolute inset-0 -m-2 rounded-full bg-gold/40 animate-ping" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-gold)] ring-4 ring-white">
                      <Sun className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-1 rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-foreground shadow ring-1 ring-border whitespace-nowrap">
                    Texas Solar Cleaners · Katy, TX
                  </div>
                </>
              ) : (
                <>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow ring-2 ring-white">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <div className="mt-1 rounded bg-white/90 px-2 py-0.5 text-[11px] font-medium text-foreground shadow-sm whitespace-nowrap">
                    {c.name}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-foreground shadow ring-1 ring-border backdrop-blur">
          Drag to pan · Centered on Katy, TX
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium text-muted-foreground shadow ring-1 ring-border">
          Greater Houston Service Area
        </div>
        <button
          onClick={() => setOffset({ x: 0, y: 0 })}
          className="absolute right-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-primary shadow ring-1 ring-border hover:bg-primary hover:text-primary-foreground transition"
        >
          Recenter
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row" style={{ color: "#1E3A8A" }}>
        <div className="flex items-center gap-2 text-sm font-medium">
          <img src={logoImg} alt="Texas Solar Cleaners" className="h-28 w-auto" />
          © {new Date().getFullYear()} Texas Solar Cleaners · Family owned in Katy, TX
        </div>
        <div className="flex items-center gap-5 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="tel:3469782662" className="hover:underline">(346) 978-2662</a>
          <a href="https://www.instagram.com/texassolarcleaners" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
