"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Network,
  Cloud,
  ShieldCheck,
  Antenna,
  Cpu,
  Zap,
  Gauge,
  BarChart,
  Wifi,
  Download,
  Info,
  ServerCog,
  Boxes,
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

/* ---------- Page ---------- */
export default function FlowlincPage() {
  const features = [
    {
      Icon: Antenna,
      title: "Multi-Channel LoRaWAN® Gateway",
      desc: "Supports Class A/B/C devices on ISM bands 865–867 MHz with long-range and high-capacity data reception.",
    },
    {
      Icon: Network,
      title: "Hybrid Connectivity",
      desc: "Ethernet, 4G LTE, and Wi-Fi backhaul options for reliable data transfer to servers or cloud.",
    },
    {
      Icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "TLS 1.2+, AES-128 encryption, secure boot, and signed firmware for data integrity.",
    },
    {
      Icon: Cloud,
      title: "Cloud & Edge Integration",
      desc: "MQTT, HTTPS support with Frinso Cloud, AWS IoT, Azure IoT Hub compatibility.",
    },
    {
      Icon: Cpu,
      title: "Edge Processor",
      desc: "ARM-based CPU for on-device filtering, local storage, and low-latency processing.",
    },
    {
      Icon: Zap,
      title: "Intelligent Power Management",
      desc: "Ultra-low power design for solar or battery deployments in remote sites.",
    },
  ];

  const specs = [
    { label: "LoRaWAN® Frequency", value: "865 – 867 MHz (India ISM Band)" },
    { label: "LoRa Channels", value: "8 Parallel Channels (Uplink & Downlink)" },
    { label: "Connectivity", value: "Ethernet, 4G LTE Cat-4, Wi-Fi 2.4 GHz" },
    { label: "Processor", value: "ARM Cortex-A53 Quad-Core @ 1.4 GHz" },
    { label: "Memory & Storage", value: "2 GB RAM, 8–32 GB eMMC Flash" },
    { label: "Protocols", value: "MQTT, HTTPS, Modbus TCP (optional)" },
    { label: "Security", value: "TLS/SSL, X.509 Certificates, AES-128 Encryption" },
    { label: "Power Supply", value: "9–36 V DC, < 5 W Typical" },
    { label: "Enclosure", value: "IP65 Industrial Grade, Metal Body" },
    { label: "Mounting", value: "Wall / Pole Mount / DIN-Rail" },
    { label: "Operating Temp", value: "−30 °C to +70 °C" },
    { label: "Software Updates", value: "Over-the-Air (FOTA)" },
  ];

  const applications = [
    {
      Icon: Boxes,
      title: "Smart Utilities",
      desc: "LoRa network for water, gas and electric meter reading with real-time telemetry.",
    },
    {
      Icon: Gauge,
      title: "Smart Agriculture",
      desc: "Connect soil sensors, weather stations, and irrigation controllers over LoRa.",
    },
    {
      Icon: Wifi,
      title: "Smart Cities",
      desc: "Streetlight control, waste management and public utility monitoring.",
    },
    {
      Icon: BarChart,
      title: "Industrial Automation",
      desc: "Factory equipment telemetry, condition monitoring, and remote diagnostics.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#04131A] text-white">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#052028] via-[#06232D] to-[#04131A]" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-teal-500/15 text-teal-200 border border-teal-400/30 px-3 py-1 rounded-full text-xs mb-4"
              >
                <BadgeCheck className="w-4 h-4" />
                FRINSO TECHNOLOGIES PVT LTD
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-extrabold leading-tight text-teal-300"
              >
                FLOWLINC – LoRa Gateway
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white mt-2"
              >
                Industrial IoT LoRaWAN® Edge Gateway
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-white/85 text-lg leading-relaxed"
              >
                FLOWLINC is a rugged, multi-channel LoRaWAN® gateway built for industrial IoT networks.  
                It bridges remote sensors and cloud platforms using secure, low-power wireless technology.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <Link
                  href="#features"
                  className="rounded-xl bg-teal-600 hover:bg-teal-500 px-6 py-3 font-medium shadow"
                >
                  Explore Features
                </Link>
                <Link
                  href="#downloads"
                  className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15"
                >
                  Download Docs
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
              <div className="absolute -inset-6 bg-teal-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.05] p-4 border border-white/10">
                <Image
                  src="/lora.png"  // replace with your actual image
                  alt="FLOWLINC LoRa Gateway"
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
        <Section id="overview" bg="bg-[#08212A]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-teal-300 mb-4">
              Product Overview
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
              FLOWLINC acts as the central bridge between LoRa-enabled devices and enterprise applications.  
              Designed for rugged industrial environments, it combines long-range LoRaWAN® communication with 
              secure backhaul connectivity to the cloud, enabling real-time data monitoring and control for smart 
              infrastructure projects.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- FEATURES ---------- */}
        <Section id="features" bg="bg-[#0A2833]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-teal-200 mb-6">
              Key Features
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {features.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-teal-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- SPECIFICATIONS ---------- */}
        <Section id="specs" bg="bg-[#0D2F3C]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-200 mb-6">
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
        <Section id="applications" bg="bg-[#103645]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-200 mb-6">
              Applications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {applications.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-emerald-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- FAQ ---------- */}
        <Section id="faq" bg="bg-[#133D4D]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                ["Does it support LoRaWAN® Class A/B/C devices?", "Yes, fully compliant with LoRaWAN® 1.0.3 and 1.1 standards."],
                ["Can it operate in outdoor conditions?", "Yes. Rugged IP65 metal enclosure with wide temperature tolerance."],
                ["What is the maximum range?", "Up to 10–15 km in open terrain and 2–5 km urban."],
                ["Can it connect to multiple cloud platforms?", "Yes. It supports Frinso Cloud, AWS, Azure, and custom MQTT servers."],
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
        <Section id="contact" bg="bg-gradient-to-br from-[#06232D] via-[#0a2f39] to-[#144455]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-teal-200">
              Deploy LoRa Networks with FLOWLINC
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/85 max-w-2xl mx-auto">
              Build secure, scalable LoRaWAN® infrastructure with Frinso’s industrial-grade gateway solutions.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/demo"
                className="rounded-xl bg-teal-600 hover:bg-teal-500 px-6 py-3 font-medium shadow"
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
