"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  Power,
  Gauge,
  Activity,
  Cpu,
  Radio,
  ShieldCheck,
  Cloud,
  Layers,
  ServerCog,
  BatteryCharging,
  LineChart,
  AlarmClock,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* THEME */
const palette = { bg: "#0b1b2b" };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

export default function EnergyManagementProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: palette.bg }}>
        {/* HERO */}
        <section className="relative h-[86vh] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <video
            src="/video/energy.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#081420]/90" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <motion.div variants={stagger()} initial="hidden" animate="show" className="max-w-3xl">
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1">
                <Zap className="h-4 w-4 text-sky-400" />
                <span className="text-sm tracking-wide text-white/80">
                  Frinso Tech • Smart Energy Infrastructure
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
                Energy Management System (EMS)
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-white/85">
                Real-time power monitoring, analytics, and optimization across plants,
                buildings, and utilities — reduce energy cost, improve PQ, and boost uptime.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition">
                  Request Demo
                </Link>
                <a href="#architecture" className="rounded-xl border border-white/60 px-6 py-3 font-medium text-white hover:bg-white hover:text-sky-700 hover:scale-105 transition">
                  View Architecture
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-20 md:py-28 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,.10),transparent)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Project Overview</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/90">
                Frinso EMS connects energy meters, analyzers, and PLCs with IoT gateways to deliver
                load profiling, PQ monitoring, and predictive insights. Central dashboards provide
                multi-site visibility, alarms, reports, and compliance logs (CEA/SLDC-ready).
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {["MODBUS", "MQTT", "IEC 104", "REST API", "4G/LAN/LoRa"].map((t) => (
                  <span key={t} className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-sm text-sky-200">
                    {t} Compatible
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-y border-white/10 bg-[#0b1e32]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Key Capabilities</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
                From PQ to predictive analytics — a complete EMS stack for operations & sustainability.
              </motion.p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Gauge, title: "Real-Time PQ Monitoring", desc: "Voltage, current, PF, frequency, harmonics, THD with auto snapshots." },
                  { icon: Activity, title: "Load Profiling & KPIs", desc: "Shift-wise, feeder-wise, asset-wise trends & benchmark comparisons." },
                  { icon: Power, title: "Peak Demand Control", desc: "Automated control logic to avoid MD penalties and improve PF." },
                  { icon: BatteryCharging, title: "Hybrid Sources", desc: "DG, Solar, Grid blending analytics with source-wise cost of energy." },
                  { icon: AlarmClock, title: "Alarms & Schedules", desc: "Threshold alerts, start/stop schedules, shutdown policies." },
                  { icon: Cloud, title: "Central Dashboard", desc: "Multi-site view, role-based access, auto reports & export." },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/40 hover:bg-sky-400/10">
                    <Icon className="mb-4 h-7 w-7 text-sky-300" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-white/80">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* KPIs */}
        <section className="py-20 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              {[
                { val: "10–25%", label: "Energy Cost Reduction" },
                { val: "99.5%", label: "Uptime Achieved" },
                { val: "0.1%", label: "Data Loss" },
                { val: "24×7", label: "Compliance Reports" },
              ].map((k) => (
                <motion.div key={k.label} variants={fadeUp} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 text-center">
                  <div className="text-4xl font-bold text-sky-300">{k.val}</div>
                  <div className="mt-1 text-white/85">{k.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="py-20 border-y border-white/10 bg-[#0a1a2a]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">System Architecture</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">Field-to-cloud EMS built on open protocols and secure telemetry.</motion.p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Image alt="EMS architecture" src="/archetecture_energy.png" width={1200} height={800} className="rounded-xl object-cover" />
                </motion.div>

                <motion.ul variants={stagger(0.2)} className="space-y-4">
                  {[
                    { icon: Layers, title: "Data Acquisition", desc: "Energy meters, analyzers, PF controllers, feeders, panels." },
                    { icon: ServerCog, title: "Edge & Control", desc: "IoT gateways/PLCs for local logic & data buffering." },
                    { icon: Radio, title: "Connectivity", desc: "LAN/4G/LoRa — secure MQTT/HTTPS with failover." },
                    { icon: LineChart, title: "Analytics Layer", desc: "PQ, demand prediction, cost allocation, anomaly detection." },
                    { icon: Cloud, title: "Dashboard & APIs", desc: "Role-based access, exports, REST/Graph APIs, SSO-ready." },
                    { icon: ShieldCheck, title: "Security & Audit", desc: "TLS, RBAC, audit logs, data retention policies." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <motion.li key={title} variants={fadeUp} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
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
          </div>
        </section>

        {/* DASHBOARD */}
        <section id="dashboard" className="py-20 bg-[#0b1e32] border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-4xl font-semibold">
              Real-Time EMS Dashboard
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
              Live PQ cards, feeder-wise load graphs, source mix, and cost analytics with exportable reports.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image alt="EMS Dashboard preview" src="/dashboards/energy.png" width={1600} height={900} className="w-full object-cover" />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition">
                <PhoneCall className="h-4 w-4" />
                Schedule a Walkthrough
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Let’s discuss your EMS rollout</h2>
              <p className="mt-3 max-w-xl text-white/85">Greenfield or retrofit — we integrate meters, DG/solar, and feeders with your SCADA/BMS.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:service@frinsotech.com" className="rounded-xl border border-white/60 px-6 py-3 hover:bg-white hover:text-sky-700 transition">
                  service@frinsotech.com
                </a>
                <a href="tel:+919969800285" className="rounded-xl bg-sky-600 px-6 py-3 hover:bg-sky-500 transition">
                  +91-9969800285
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-300" />
                <span className="text-white/85">Deployments • Pan-India</span>
              </div>
              <p className="text-white/80">
                Commissioning, cloud setup, and AMC with SLA — for plants, malls, hospitals, IT parks & factories.
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-white/70">
          © {new Date().getFullYear()} Frinso Tech • Energy Management System
        </footer>
        <Footer />
      </main>
    </>
  );
}
