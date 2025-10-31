"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BatteryCharging,
  Antenna,
  Network,
  CircuitBoard,
  ShieldCheck,
  Cloud,
  Gauge,
  Cpu,
  Zap,
  Boxes,
  Wrench,
  BarChart,
  Download,
  Info,
  Bluetooth,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Animations ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------- Section Wrapper ---------- */
const Section = ({
  id,
  bg,
  children,
}: {
  id: string;
  bg: string;
  children: React.ReactNode;
}) => (
  <section id={id} className={`${bg} py-20 border-t border-white/10`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

/* ---------- Types ---------- */
type CardItem = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

/* ---------- Page ---------- */
export default function FrinsoBatteryPulsePage() {
  const highlights: CardItem[] = [
    {
      Icon: BatteryCharging,
      title: "Battery-Optimized Edge",
      desc: "Designed for ultra-low power with scheduled/event-based wake.",
    },
    {
      Icon: Antenna,
      title: "Multi-Network Connectivity",
      desc: "4G/LTE, 2G/GSM, Wi-Fi, LoRa, NB-IoT, GNSS for any site.",
    },
    {
      Icon: Network,
      title: "Open Protocols",
      desc: "Modbus RTU/TCP, MQTT (TLS), HTTPS/REST for easy integration.",
    },
    {
      Icon: CircuitBoard,
      title: "Built-in I/O",
      desc: "Analog/Digital inputs + relay outputs for sensors and control.",
    },
    {
      Icon: Bluetooth,
      title: "Offline Access",
      desc: "BLE access for field config & data retrieval without network.",
    },
    {
      Icon: ShieldCheck,
      title: "Security & OTA",
      desc: "TLS/SSL, signed firmware, RBAC, audit logs, and FOTA updates.",
    },
  ];

  const features: string[] = [
    "Real-time acquisition of electrical, environmental and asset parameters.",
    "Edge rules for event-based control (thresholds, timers, hysteresis).",
    "Encrypted local buffering with automatic backfill when online.",
    "Zero-touch onboarding, remote diagnostics and secure FOTA.",
    "Battery telemetry: SoC/SoH profiling, charge/discharge analytics, alarms.",
  ];

  const specs = [
    { label: "Power Profile", value: "Battery-optimized; deep-sleep; schedule/event wake" },
    { label: "Connectivity", value: "4G/LTE, 2G, Wi-Fi 2.4 GHz, LoRa, NB-IoT, GNSS" },
    { label: "Interfaces", value: "RS-485/RS-232, 2× Analog In, 4× Digital In, 1× Relay Out, BLE (service)" },
    { label: "Protocols", value: "Modbus RTU/TCP, MQTT (TLS), HTTPS/REST, NTP, GPS time sync" },
    { label: "Processing", value: "Low-power edge MCU/CPU with rules engine & filters" },
    { label: "Storage", value: "Encrypted local buffer (typ. 16 GB, expandable)" },
    { label: "Security", value: "TLS/SSL, X.509, signed OTA, role-based access, audit logs" },
    { label: "Indicators", value: "Multi-LED for Power/Cellular/Cloud/LoRa/Alarm status" },
    { label: "Enclosure", value: "Rugged ABS/metal, DIN/wall mount; compact footprint" },
    { label: "Environment", value: "−20 °C to +70 °C, up to 95% RH (non-condensing)" },
  ];

  const applications: CardItem[] = [
    {
      Icon: Wrench,
      title: "Industrial IoT",
      desc: "Remote assets where mains power is unavailable or intermittent.",
    },
    {
      Icon: Boxes,
      title: "Smart Infrastructure",
      desc: "Utility kiosks, valve chambers, BMS sub-meters, remote panels.",
    },
    {
      Icon: Zap,
      title: "Energy & Solar",
      desc: "PV strings, DG/ESS, battery banks with performance insights.",
    },
    {
      Icon: BarChart,
      title: "Agriculture",
      desc: "Field sensors, moisture/flow, pumps via LoRa/NB-IoT.",
    },
    {
      Icon: Gauge,
      title: "Environment",
      desc: "AQ/Water quality, leak detection, pressure/level telemetry.",
    },
    {
      Icon: Cpu,
      title: "Healthcare & Logistics",
      desc: "Cold-chain, asset tracking, compliance dashboards.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#030a12] text-white">
        {/* ---------- HERO (Electric Blue) ---------- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#021a2a] via-[#041f33] to-[#030a12]" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-sky-500/15 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs mb-4"
              >
                <BadgeCheck className="w-4 h-4" />
                FRINSO TECHNOLOGIES PVT LTD
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-extrabold leading-tight text-sky-300"
              >
                FRINSO Battery Pulse
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white mt-2"
              >
                Smart Battery IoT Edge Device
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-white/85 text-lg leading-relaxed">
                Battery-first Industry 4.0 edge node for secure telemetry and control — engineered
                for months of autonomous operation and seamless cloud integration.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <Link
                  href="#overview"
                  className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow"
                >
                  Explore Battery Pulse
                </Link>
                <Link
                  href="#downloads"
                  className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15"
                >
                  Download Datasheet
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
              <div className="absolute -inset-6 bg-sky-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.05] p-4 border border-white/10">
                <Image
                  src="/f10-pulse-device.jpg" // replace with your actual image
                  alt="FRINSO Battery Pulse Device"
                  width={980}
                  height={720}
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------- OVERVIEW ---------- */}
        <Section id="overview" bg="bg-[#051a29]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-sky-300 mb-4">
              Product Overview
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
              FRINSO Battery Pulse bridges sensors, meters and controllers to enterprise systems using
              secure wireless connectivity and edge intelligence. It buffers data during outages,
              executes local rules, and backfills to the cloud automatically — ideal for battery/solar/off-grid scenarios.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- HIGHLIGHTS ---------- */}
        <Section id="highlights" bg="bg-[#072131]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-sky-200 mb-6">
              Highlights
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {highlights.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-sky-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- FEATURES & CAPABILITIES ---------- */}
        <Section id="features" bg="bg-[#09293c]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-200 mb-6">
              Features & Capabilities
            </motion.h2>
            <motion.ul variants={fadeUp} className="space-y-3 text-white/80 text-sm">
              {features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </motion.ul>
          </motion.div>
        </Section>

        {/* ---------- TECHNICAL SPECIFICATIONS ---------- */}
        <Section id="specs" bg="bg-[#0b3044]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Technical Specifications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              {specs.map(({ label, value }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-5 border border-white/10">
                  <h3 className="font-semibold text-lg mb-1 text-white">{label}</h3>
                  <p className="text-white/75 text-sm">{value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- APPLICATIONS ---------- */}
        <Section id="applications" bg="bg-[#0d3550]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-sky-200 mb-6">
              Applications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {applications.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-sky-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- DOWNLOADS ---------- */}
        <Section id="downloads" bg="bg-[#103d5a]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Downloads & Resources
            </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                ["FRINSO Battery Pulse Brochure (PDF)", "#"],
                ["Technical Datasheet (PDF)", "#"],
                ["API Integration Manual (PDF)", "#"],
              ].map(([label, href], i) => (
                <Link
                  key={i}
                  href={href as string}
                  className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 flex items-center gap-3"
                >
                  <Download className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- FAQ ---------- */}
        <Section id="faq" bg="bg-[#124567]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                ["Typical battery life?", "Varies by sampling/publish intervals and radio usage; optimized for long autonomous operation."],
                ["LoRa / NB-IoT support?", "Yes — along with 4G/LTE, 2G, Wi-Fi, GNSS, and BLE for field access."],
                ["Offline operation?", "Yes. Data is stored locally and auto-synced when connectivity returns."],
                ["How secure?", "TLS/SSL encryption, signed firmware (OTA), role-based users, audit logs."],
              ].map(([q, a], i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-white/90 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{q}</h3>
                      <p className="text-white/80 text-sm mt-1">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- CONTACT CTA ---------- */}
        <Section id="contact" bg="bg-gradient-to-br from-[#06273d] via-[#08375a] to-[#0e5591]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-sky-200">
              Deploy Battery-First Telemetry with FRINSO
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/85 max-w-2xl mx-auto">
              We’ll help configure sensors, rules and dashboards to get you operational quickly.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/demo"
                className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        
      </main>

      <Footer />
    </>
  );
}
