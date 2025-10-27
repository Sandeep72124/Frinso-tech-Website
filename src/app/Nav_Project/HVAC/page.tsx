"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wind,
  Gauge,
  Activity,
  Cpu,
  Radio,
  ShieldCheck,
  Cloud,
  Layers,
  ServerCog,
  Zap,
  ThermometerSun,
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
export default function HVACProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: palette.bg }}>
        {/* HERO */}
        <section className="relative h-[86vh] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <video
            src="/video/hvac.mp4"
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
                <Wind className="h-4 w-4 text-sky-400" />
                <span className="text-sm tracking-wide text-white/80">
                  Frinso Tech • Smart HVAC Infrastructure
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
                Smart HVAC Monitoring & Automation
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-white/85">
                IoT + SCADA based real-time HVAC system designed for buildings,
                industries, and data centers to optimize cooling, airflow, and
                energy consumption while maintaining indoor air quality.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
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
                The Smart HVAC IoT Platform enables seamless automation of chillers, AHUs, FCUs, 
                and ventilation systems using intelligent sensors and adaptive control logic. 
                It integrates existing PLC/RTU infrastructure into a centralized SCADA dashboard, 
                ensuring 24x7 monitoring, energy optimization, and predictive maintenance.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {["BACnet", "MODBUS", "LoRa", "4G/LTE", "MQTT"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-sm text-sky-200"
                  >
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
            <motion.div variants={stagger()} initial="hidden" whileInView="show">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">
                Key Capabilities
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/85">
                Centralized control and IoT integration for complete environmental management.
              </motion.p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: ThermometerSun, title: "Temperature & Humidity", desc: "Real-time tracking and control of ambient conditions across zones." },
                  { icon: Activity, title: "Energy Monitoring", desc: "Analyze compressor, fan, and pump loads for efficient operation." },
                  { icon: Cpu, title: "PLC/Controller Integration", desc: "Connects with existing chillers, AHUs, FCUs, and BMS panels." },
                  { icon: ShieldCheck, title: "AI-based Fault Prediction", desc: "Detect early signs of mechanical/electrical inefficiencies." },
                  { icon: Radio, title: "IoT Telemetry", desc: "4G/LTE, Wi-Fi, and LoRa for cloud-based communication and analytics." },
                  { icon: Cloud, title: "Remote Dashboard", desc: "Access HVAC data and reports via mobile/web interface." },
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
                { val: "30%+", label: "Energy Savings" },
                { val: "99.9%", label: "System Uptime" },
                { val: "25%", label: "CO₂ Reduction" },
                { val: "24×7", label: "Real-time Control" },
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
                Complete integration from field devices to the cloud.
              </motion.p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Image
                    alt="HVAC architecture"
                    src="/archetecture_hvac.png"
                    width={1200}
                    height={800}
                    className="rounded-xl object-cover"
                  />
                </motion.div>

                <motion.ul variants={stagger(0.2)} className="space-y-4">
                  {[
                    { icon: Layers, title: "Sensor Layer", desc: "Temperature, humidity, pressure, airflow, and occupancy sensors." },
                    { icon: ServerCog, title: "Edge Control", desc: "IoT RTU or PLC for data acquisition and local logic." },
                    { icon: Radio, title: "Connectivity", desc: "4G/LTE, Wi-Fi, or LAN based telemetry and backup buffering." },
                    { icon: Cloud, title: "Cloud Platform", desc: "Dashboard for multi-building control, analytics, and reporting." },
                    { icon: Zap, title: "Automation", desc: "Chiller start-stop logic, air balancing, and energy scheduling." },
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
                We deploy end-to-end HVAC automation — from retrofit integration to new smart
                buildings. Reach out to explore tailored IoT solutions for your facility.
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
                <span className="text-white/85">Pan-India Commissioning</span>
              </div>
              <p className="text-white/80">
                We provide installation, cloud setup, and AMC services for
                existing and greenfield HVAC systems.
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/15" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-white/70">
          © {new Date().getFullYear()} Frinso Tech • Smart HVAC Management
        </footer>

        <Footer />
      </main>
    </>
  );
}
