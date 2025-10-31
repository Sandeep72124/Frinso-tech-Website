"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building,
  Activity,
  Gauge,
  Cpu,
  Radio,
  ShieldCheck,
  Cloud,
  Layers,
  ServerCog,
  Lightbulb,
  DoorOpen,
  Flame,
  ThermometerSun,
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

export default function BMSProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: palette.bg }}>
        {/* HERO */}
        <section className="relative h-[86vh] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <video
            src="/video/building.mp4"
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
                <Building className="h-4 w-4 text-sky-400" />
                <span className="text-sm tracking-wide text-white/80">
                  Frinso Tech • Smart Building Automation
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
                Building Management System (BMS)
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-white/85">
                Unified monitoring & control for HVAC, lighting, energy, fire, and access — a single,
                secure, cloud-enabled platform for efficient building operations.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Link href="/demo" className="rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition">
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
                Frinso BMS integrates all building subsystems through open protocols (BACnet/MODBUS/KNX),
                offering centralized dashboards, automation logic, alarms, and analytics — ideal for
                campuses, malls, hospitals, airports, and IT parks.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {["BACnet", "MODBUS", "KNX", "MQTT", "4G/LAN"].map((t) => (
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
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">All building services — one pane of glass.</motion.p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: ThermometerSun, title: "HVAC Control", desc: "Chiller/Boiler, AHU/FCU, VAV, IAQ monitoring with energy KPIs." },
                  { icon: Lightbulb, title: "Lighting Automation", desc: "Schedules, occupancy-based dimming, scenes, and daylight harvesting." },
                  { icon: Activity, title: "Energy Analytics", desc: "Metering, load patterns, power quality, and cost dashboards." },
                  { icon: DoorOpen, title: "Access & Security", desc: "Access control integrations and events in a unified log." },
                  { icon: Flame, title: "Fire System Interface", desc: "Fire panel integrations for alarms & compliance dashboards." },
                  { icon: Cloud, title: "Central Dashboard", desc: "Multi-building views, alarms, user roles, and reporting." },
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
                { val: "20–35%", label: "Energy Savings" },
                { val: "99.9%", label: "System Uptime" },
                { val: "30%+", label: "CO₂ Reduction Potential" },
                { val: "24×7", label: "Unified Monitoring" },
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
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">Open, scalable, and secure BMS stack.</motion.p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Image alt="BMS architecture" src="/archetecture_bms.png" width={1200} height={800} className="rounded-xl object-cover" />
                </motion.div>

                <motion.ul variants={stagger(0.2)} className="space-y-4">
                  {[
                    { icon: Layers, title: "Field Layer", desc: "Sensors, meters, controllers across HVAC, lighting, fire, access." },
                    { icon: ServerCog, title: "Control & Edge", desc: "PLC/RTU/IoT gateways for logic, aggregation, and OTA updates." },
                    { icon: Radio, title: "Connectivity", desc: "LAN/4G/LoRa with secure MQTT/HTTPS & fallback caching." },
                    { icon: Cpu, title: "Interoperability", desc: "BACnet/MODBUS/KNX integration with vendor-neutral design." },
                    { icon: Cloud, title: "Cloud Platform", desc: "Central dashboard, user roles, reporting, and APIs." },
                    { icon: ShieldCheck, title: "Security", desc: "TLS, RBAC, audit logs, and backups for compliance." },
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
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-4xl font-semibold">BMS Dashboard</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
              Multi-system map, alarms, asset states, and analytics — all in one place.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image alt="BMS dashboard" src="/dashboards/building.png" width={1600} height={900} className="w-full object-cover" />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition">
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
              <h2 className="text-3xl md:text-4xl font-semibold">Let’s plan your BMS rollout</h2>
              <p className="mt-3 max-w-xl text-white/85">Retrofit or new build — we integrate with existing panels and protocols.</p>
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
                <span className="text-white/85">Pan-India Deployments</span>
              </div>
              <p className="text-white/80">
                We deliver commissioning, cloud setup, and AMC for campuses, hospitals, IT parks, and more.
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-white/70">
          © {new Date().getFullYear()} Frinso Tech • Building Management System
        </footer>
        <Footer />
      </main>
    </>
  );
}
