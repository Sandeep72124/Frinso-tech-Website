"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Droplets,
  Waves,
  Gauge,
  Activity,
  ShieldCheck,
  Cpu,
  Radio,
  Cloud,
  Wrench,
  Layers,
  ServerCog,
  Zap,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================
   THEME
   ========================= */
const palette = {
  primary: "rgb(2,132,199)", // sky-600
  primarySoft: "rgba(56,189,248,0.12)",
  accent: "rgb(59,130,246)",
  bg: "#0b1b2b",
  text: "#ffffff",
  grid: "rgba(255,255,255,0.06)",
};

/* =========================
   SAFE VARIANTS (TypeScript FIX)
   ========================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

/* =========================
   WAVE BACKGROUND (animated)
   ========================= */
function WavesBg() {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute -inset-[20%] animate-[spin_20s_linear_infinite] rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,.18), rgba(2,132,199,.18), transparent 40%)",
            filter: "blur(40px)",
          }}
        />
        <svg
          className="absolute bottom-[-2rem] left-0 w-[200%] h-[28rem] animate-[waveMove_18s_linear_infinite]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#grad1)"
            d="M0,256L60,229.3C120,203,240,149,360,122.7C480,96,600,96,720,117.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L0,320Z"
            opacity="0.55"
          />
          <defs>
            <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(56,189,248,.45)" />
              <stop offset="100%" stopColor="rgba(2,132,199,.15)" />
            </linearGradient>
          </defs>
        </svg>
        <style jsx global>{`
          @keyframes waveMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
}

/* =========================
   SECTION WRAPPER
   ========================= */
function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

/* =========================
   PAGE
   ========================= */
export default function WaterProjectPage() {
  return (
    <>
      <main className="min-h-screen text-white" style={{ background: palette.bg }}>
        {/* HERO */}
        <section className="relative h-[86vh] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <video
            src="/video/water.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#081420]/90" />
          <WavesBg />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <motion.div variants={stagger()} initial="hidden" animate="show" className="max-w-3xl">
              <motion.div
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1"
              >
                <Waves className="h-4 w-4" />
                <span className="text-sm tracking-wide text-white/80">
                  Frinso Tech • Smart Water Infrastructure
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-tight md:text-6xl"
              >
                Smart Water Management
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-white/85">
                Real-time telemetry, analytics, and automation for WTP, STP, borewells, and
                distribution networks — compliant with CGWA, CPCB, JJM, and AMRUT 2.0.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
                >
                  Request Demo
                </Link>
                <a
                  href="#architecture"
                  className="rounded-xl border border-white/60 px-6 py-3 font-medium text-white hover:bg-white hover:text-sky-700 hover:scale-105 transition"
                >
                  View Architecture
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      {/* ABOUT / VALUE */}
      <Section id="about" className="bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,.10),transparent)]">
        <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
            Project Overview
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/90">
            Frinso Tech delivers a connected water platform combining edge telemetry devices,
            pressure/flow/level sensing, PLC/RTU integration, and a cloud dashboard.
            The system enables loss reduction, energy optimization, predictive maintenance,
            and compliance reporting across the full water cycle.
          </motion.p>

          {/* badges */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {["JJM", "AMRUT 2.0", "CGWA", "CPCB"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-sm text-sky-200"
              >
                {t} Compliant
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* FEATURE GRID */}
      <Section id="features" className="border-y border-white/10 bg-[#0b1e32]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger()}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
            Key Capabilities
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
            Modular IoT + SCADA stack for utilities, industries, and smart cities.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Droplets, title: "Flow & Quality", desc: "Ultrasonic flowmeters, residual chlorine, turbidity, pH, TDS—logged in real time." },
              { icon: Gauge, title: "Pressure & Level", desc: "DMA pressure profiling, tank/GLSR/Sump levels with automatic pump logic." },
              { icon: Radio, title: "Telemetry", desc: "4G/LTE/NB-IoT/LoRaWAN gateways; offline buffering and secure MQTT/HTTPS." },
              { icon: Cpu, title: "PLC/RTU Integration", desc: "WTP/STP automation, VFDs, valves, and DG sets via MODBUS/IEC 104." },
              { icon: Activity, title: "Analytics & AI", desc: "Leak detection, NRW analysis, anomaly alerts, and energy KPIs." },
              { icon: Cloud, title: "Cloud Dashboard", desc: "Role-based access, multi-site views, reports, and data export APIs." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                <Icon className="mb-4 h-7 w-7 text-sky-300" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/80">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* KPIs */}
      <Section id="kpis" className="bg-[radial-gradient(70%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { val: "30%+", label: "NRW Reduction" },
            { val: "25%+", label: "Energy Savings" },
            { val: "99.5%", label: "Uptime Achieved" },
            { val: "24×7", label: "Compliance Reports" },
          ].map((k) => (
            <motion.div
              key={k.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 text-center"
            >
              <div className="text-4xl font-bold text-sky-300">{k.val}</div>
              <div className="mt-1 text-white/85">{k.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ARCHITECTURE */}
      <Section id="architecture" className="border-y border-white/10 bg-[#0a1a2a]">
        <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
            System Architecture
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
            End-to-end stack from field sensing to cloud analytics and control.
          </motion.p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Diagram placeholder */}
            <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
              <Image
                alt="Architecture diagram placeholder"
                src="/archetecture.png" 
                width={1200}
                height={800}
                className="rounded-xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
            </motion.div>

            {/* Steps */}
            <motion.ul variants={stagger(0.2)} className="space-y-4">
              {[
                { icon: Layers, title: "Sensing Layer", desc: "Flow, pressure, level, quality, and energy meters." },
                { icon: ServerCog, title: "Edge & Control", desc: "IoT RTU/PLC with MODBUS, local logic, and secure OTA." },
                { icon: Radio, title: "Connectivity", desc: "4G/LTE, NB-IoT, LoRaWAN; fallback caching for no-signal zones." },
                { icon: Cloud, title: "Cloud & APIs", desc: "MQTT/HTTPS ingestion, time-series DB, REST/Graph APIs." },
                { icon: ShieldCheck, title: "Security & Compliance", desc: "TLS, RBAC, audit logs, and statutory report templates." },
                { icon: Zap, title: "Automation", desc: "Pump/valve schedules, threshold actions, leak isolation." },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="mt-1 h-5 w-5 text-sky-300" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-white/80">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Section>

      {/* MODULES */}
      <Section id="modules" className="bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,.10),transparent)]">
        <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
            Modules & Use-Cases
          </motion.h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "WTP — Water Treatment Plant",
                points: [
                  "Raw/clear water flow, pressure, and level logging",
                  "Filter backwash automation, chemical dosing",
                  "Energy meter integration and KPI dashboards",
                ],
                img: "/wtp.png",
              },
              {
                title: "STP — Sewage Treatment Plant",
                points: [
                  "Aeration blowers, DO, MLSS, turbidity and pH",
                  "Pump runtime, alarms, and compliance reports",
                  "Remote O&M with predictive maintenance",
                ],
                img: "/stp.png",
              },
              {
                title: "Borewells & Reservoirs",
                points: [
                  "Static/Dynamic water level, pump health",
                  "CGWA auto-reporting with monthly summaries",
                  "Dry-run, theft, and abnormal pattern alerts",
                ],
                img: "/borewell.png",
              },
              {
                title: "Distribution & DMA",
                points: [
                  "Pressure zoning, leak detection, NRW analytics",
                  "Valve scheduling and tanker tracking (optional)",
                  "24×7 supply readiness & consumer SLAs",
                ],
                img: "/distribution.png",
              },
            ].map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3"
              >
                <div className="relative md:col-span-1">
                  <Image
                    src={m.img} 
                    alt={m.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-semibold">{m.title}</h3>
                  <ul className="mt-3 space-y-2 text-white/85">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* DASHBOARD PREVIEW */}
      <Section id="dashboard" className="border-y border-white/10 bg-[#0b1e32]">
        <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
            Real-Time Dashboard
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
            Multi-site overview, alarms, asset health, and downloadable reports. Device-level
            drilldowns with trends, events, and configuration.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              alt="Dashboard preview"
              src="/dashboards/water.png" // TODO: replace with your dashboard screenshot
              width={1600}
              height={900}
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
            >
              <PhoneCall className="h-4 w-4" />
              Schedule a Walkthrough
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* CONTACT / CTA */}
      <Section id="contact" className="bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s discuss your project</h2>
            <p className="mt-3 max-w-xl text-white/85">
              Share your requirements for WTP/STP automation, DMA rollouts, CGWA reporting, or
              full-stack water telemetry. We’ll tailor the deployment for your sites.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:sales@frinso.com"
                className="rounded-xl border border-white/60 px-6 py-3 hover:bg-white hover:text-sky-700 transition"
              >
                service@frinsotech.com
              </a>
              <a
                href="tel:+910000000000"
                className="rounded-xl bg-sky-600 px-6 py-3 hover:bg-sky-500 transition"
              >
                +91-9969800285
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-sky-300" />
              <span className="text-white/85">Deployment Ready • Pan-India</span>
            </div>
            <p className="text-white/80">
              We support greenfield & retrofit deployments with on-site commissioning, remote
              monitoring, and SLA-based O&M. Integration ready for existing PLC/SCADA and meters.
            </p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/70">
        © {new Date().getFullYear()} Frinso Tech • Smart Water Management
      </footer>
      <footer/>
    </main>
   <Footer/>
   </>
  );
}
