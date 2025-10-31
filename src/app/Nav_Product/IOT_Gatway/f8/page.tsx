"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Zap,
  Gauge,
  Network,
  Cloud,
  ShieldCheck,
  Bluetooth,
  Antenna,
  Cpu,
  Download,
  Info,
  Wrench,
  Droplets,
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
export default function FrinsoSolarPage() {
  const features = [
    {
      Icon: Zap,
      title: "Comprehensive Monitoring",
      desc: "Tracks DC voltage, current, pump voltage/current, and all electrical parameters in real-time.",
    },
    {
      Icon: Antenna,
      title: "Dual Server Connectivity",
      desc: "RMS transmits to both EESL and customer servers for redundancy and analytics.",
    },
    {
      Icon: Cloud,
      title: "FOTA Updates",
      desc: "Firmware Over-The-Air ensures smooth updates without on-site visits.",
    },
    {
      Icon: Bluetooth,
      title: "Offline Data Access",
      desc: "Retrieve stored data offline using Android App via Bluetooth BLE 5.0.",
    },
    {
      Icon: Gauge,
      title: "Sensor Integration",
      desc: "Supports flow meters, moisture sensors, and analog/digital inputs for field data.",
    },
    {
      Icon: ShieldCheck,
      title: "Geo Tracking & Security",
      desc: "Integrated GPS and TLS-secured MQTT ensure accurate, tamper-proof telemetry.",
    },
  ];

  const specifications = [
    { label: "Input Voltage", value: "10–30V DC" },
    { label: "Cellular Technology", value: "2G (900/1800MHz), 4G (LTE-FDD B1/B3/B5/B8, TD B38/B39/B40/B41)" },
    { label: "SIM Card", value: "3V/1.8V Micro SIM compatible" },
    { label: "GNSS", value: "GPS Supported" },
    { label: "Antenna", value: "High DBi LTE + GPS Flexible Sticker Antenna" },
    { label: "Bluetooth", value: "BLE 5.0 Supported" },
    { label: "Digital Input", value: "2 Channels - Potential Inputs" },
    { label: "Analog Input", value: "2 Channels - 0 to 4mA Range" },
    { label: "Digital Output", value: "1 Channel (NPN/PNP)" },
    { label: "Communication Channel", value: "RS-485 with Transient Voltage Protection" },
    { label: "Protocol", value: "Modbus Master RTU, MQTT (TLS/SSL/X.509)" },
    { label: "Display", value: "16×2 Alphanumeric Display" },
    { label: "Keypad", value: "6 Button Supported" },
    { label: "Configuration", value: "Via Android App" },
    { label: "Mounting", value: "Wall Mounting" },
    { label: "Dimensions", value: "65×140×25 mm" },
    { label: "Operating Temp", value: "0°C to 70°C" },
    { label: "Humidity", value: "Up to 95% RH" },
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
                FRINSO SOLAR 4G
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white mt-2"
              >
                IoT-Based Solar Pump RMS
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-white/85 text-lg leading-relaxed">
                A reliable and secure remote monitoring system for solar pump sets, enabling
                real-time data capture, control, and dual server integration.
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
                  src="/frinso-solar.jpg" // replace with your actual image
                  alt="Frinso Solar 4G Device"
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
              The FRINSO Solar 4G RMS enables remote monitoring and control of solar pumping systems.
              With GSM/4G connectivity, GPS tracking, FOTA, and secure data transmission, it ensures
              uninterrupted performance, remote access, and compliance with utility requirements.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- FEATURES ---------- */}
        <Section id="features" bg="bg-[#0A2833]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-teal-200 mb-6">
              Features
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
              {specifications.map(({ label, value }, i) => (
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
              {[
                {
                  Icon: Droplets,
                  title: "Solar Pump Monitoring",
                  desc: "Track solar pump performance and send data to utility dashboards.",
                },
                {
                  Icon: Wrench,
                  title: "Irrigation Automation",
                  desc: "Automated irrigation control via relay and sensor feedback.",
                },
                {
                  Icon: Cloud,
                  title: "Dual Server Reporting",
                  desc: "Automatic data push to EESL & customer servers for redundancy.",
                },
              ].map(({ Icon, title, desc }, i) => (
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
                ["Does it support 2 servers?", "Yes. RMS pushes data to both EESL and customer servers simultaneously."],
                ["Can I control the pump remotely?", "Yes, via SMS commands or mobile app API triggers."],
                ["Is data secure?", "Yes. TLS/SSL with X.509 certificates ensures end-to-end encryption."],
                ["Can data be accessed offline?", "Yes. One year of local data backup and Bluetooth retrieval supported."],
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
              Deploy Smart Solar RMS Today
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/85 max-w-2xl mx-auto">
              Enable real-time monitoring, control, and compliance for solar pumping systems across India — powered by Frinso.
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
