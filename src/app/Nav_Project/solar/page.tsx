"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sun,
  Activity,
  Gauge,
  Cpu,
  Radio,
  ShieldCheck,
  Cloud,
  Layers,
  ServerCog,
  Zap,
  BatteryCharging,
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
  bg: "#0b1b2b",
  text: "#ffffff",
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

/* =========================
   PAGE
   ========================= */
export default function SolarProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: palette.bg }}>
        {/* HERO */}
        <section className="relative h-[86vh] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <video
            src="/video/solar.mp4"
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
                <Sun className="h-4 w-4 text-sky-400" />
                <span className="text-sm tracking-wide text-white/80">
                  Frinso Tech • Smart Solar SCADA
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
                Smart Solar Plant Monitoring
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-white/85">
                End-to-end IoT-based SCADA system for solar PV plants — real-time monitoring,
                string performance analytics, weather sensing, and DG synchronization.
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

        {/* ABOUT SECTION */}
        <section className="py-20 md:py-28 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,.10),transparent)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
                Project Overview
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/90">
                Frinso Solar SCADA system provides real-time visibility of PV generation,
                inverter efficiency, string currents, and grid synchronization. It ensures
                compliance with MNRE standards and supports predictive maintenance across
                plants, from 10 kW to multi-MW capacities.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {["MNRE", "CERC", "SLDC", "CEA"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-sm text-sky-200"
                  >
                    {t} Compliant
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-y border-white/10 bg-[#0b1e32]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
                Key Capabilities
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
                Advanced SCADA features and analytics for solar plant operations and maintenance.
              </motion.p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Activity, title: "Performance Monitoring", desc: "Track inverter, string, and module-level parameters in real-time." },
                  { icon: Gauge, title: "Weather Station", desc: "Monitor irradiance, temperature, wind, and humidity for plant KPIs." },
                  { icon: Cpu, title: "Inverter Integration", desc: "Support for MODBUS TCP/RTU, ABB, SMA, Huawei, Sungrow, and Delta." },
                  { icon: ShieldCheck, title: "Alarm & Fault Logs", desc: "Instant fault identification with email/SMS alerts and ticketing." },
                  { icon: Radio, title: "Telemetry & Connectivity", desc: "4G/LTE/LoRaWAN with offline buffering for uninterrupted data." },
                  { icon: Cloud, title: "Cloud Dashboard", desc: "Visualize plant KPIs, yield, PR, CUF, and export MNRE reports." },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-sky-400/40 hover:bg-sky-400/10 transition"
                  >
                    <Icon className="mb-4 h-7 w-7 text-sky-300" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-white/80">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* KPI SECTION */}
        <section className="py-20 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger()}
              initial="hidden"
              whileInView="show"
            >
              {[
                { val: "98.5%", label: "Plant Efficiency" },
                { val: "30%+", label: "O&M Cost Reduction" },
                { val: "24×7", label: "Monitoring" },
                { val: "0.1%", label: "Data Loss" },
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
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="py-20 border-y border-white/10 bg-[#0a1a2a]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div variants={stagger()} initial="hidden" whileInView="show">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
                System Architecture
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
                Complete solar SCADA stack integrating inverters, weather sensors, meters, and DG synchronization.
              </motion.p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Image
                    alt="Solar SCADA architecture"
                    src="/archetecture_solar.png"
                    width={1200}
                    height={800}
                    className="rounded-xl object-cover"
                  />
                </motion.div>

                <motion.ul variants={stagger(0.2)} className="space-y-4">
                  {[
                    { icon: Layers, title: "Sensing Layer", desc: "Weather sensors, irradiance, module temperature, and energy meters." },
                    { icon: ServerCog, title: "Edge & Control", desc: "IoT gateways with inverter, meter, and weather integration." },
                    { icon: BatteryCharging, title: "DG & Grid Sync", desc: "DG auto-sync control and grid availability logging." },
                    { icon: Cloud, title: "Cloud Platform", desc: "Unified dashboard for performance, PR, and alarm analysis." },
                    { icon: Zap, title: "Automation & Reports", desc: "Automatic PR, CUF, generation, and downtime analytics." },
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
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,132,199,.12),transparent)]">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Let’s discuss your project</h2>
              <p className="mt-3 max-w-xl text-white/85">
                We design and deploy SCADA systems for solar rooftops and ground-mounted
                PV plants with end-to-end connectivity and analytics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:service@frinsotech.com"
                  className="rounded-xl border border-white/60 px-6 py-3 hover:bg-white hover:text-sky-700 transition"
                >
                  service@frinsotech.com
                </a>
                <a
                  href="tel:+919969800285"
                  className="rounded-xl bg-sky-600 px-6 py-3 hover:bg-sky-500 transition"
                >
                  +91-9969800285
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-300" />
                <span className="text-white/85">Pan-India Deployments</span>
              </div>
              <p className="text-white/80">
                Our SCADA systems are deployed across MW-scale solar plants with
                real-time dashboards, alarms, and O&M modules.
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-white/70">
          © {new Date().getFullYear()} Frinso Tech • Smart Solar SCADA
        </footer>

        <Footer />
      </main>
    </>
  );
}
