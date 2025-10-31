"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Cloud,
  Network,
  ShieldCheck,
  CircuitBoard,
  Layers,
  BarChart,
  Boxes,
  Wrench,
  Zap,
  Download,
  Info,
  BadgeCheck,
  Cog,
  Antenna,
  Shield,
  Gauge,
  ServerCog,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Animations ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
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
export default function FrinsoV5Page() {
  return (
    <>
      <Navbar />

      <main className="bg-[#051420] text-white">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2440] via-[#081830] to-[#04101a]" />
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
                className="text-5xl md:text-6xl font-bold leading-tight text-sky-300"
              >
                FRINSO V5.0
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white mt-2"
              >
                Industry 4.0 IoT Edge Gateway
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-white/85 text-lg leading-relaxed"
              >
                A next-generation Industrial IoT edge device built for real-time
                control, data analytics, and remote management with multi-network
                connectivity and advanced security.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <Link
                  href="#overview"
                  className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow"
                >
                  Explore Features
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
                  src="/frinso-v1-cover.png"
                  alt="Frinso V5.0 Device"
                  width={980}
                  height={720}
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------- PRODUCT OVERVIEW ---------- */}
        <Section id="overview" bg="bg-[#0A2238]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-sky-300 mb-4">
              Product Overview
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
              FRINSO V5.0 is a next-generation Industry 4.0 IoT edge node built
              for remote control, analytics, and device management. It enables
              real-time monitoring through iOS, Android, and web applications,
              ensuring visibility, operational efficiency, and proactive maintenance.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- HIGHLIGHTS ---------- */}
        <Section id="highlights" bg="bg-[#14385A]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-300 mb-6">
              Product Highlights
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                { Icon: Antenna, title: "Built-in Connectivity", desc: "Supports GSM (2G/4G/LTE), Wi-Fi, Bluetooth, LoRa, and NB-IoT." },
                { Icon: Network, title: "Open Platform", desc: "Easily integrates via Modbus RTU, Serial, and MQTT protocols." },
                { Icon: CircuitBoard, title: "Built-in I/O", desc: "Analog and Digital I/O ports for direct device control." },
                { Icon: Gauge, title: "Compact Design", desc: "Space-efficient, rugged, and suitable for industrial environments." },
                { Icon: Cloud, title: "Cloud Ready", desc: "Compatible with Azure, AWS, Frinso Cloud, and other platforms." },
                { Icon: ShieldCheck, title: "Data Continuity", desc: "Built-in storage ensures data integrity during network outages." },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-cyan-300 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- APPLICATION AREAS ---------- */}
        <Section id="applications" bg="bg-[#1D4C7A]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-amber-200 mb-6">
              Application Areas
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                { Icon: Wrench, title: "Industrial IoT", desc: "Automation, predictive maintenance, and asset optimization." },
                { Icon: Boxes, title: "Smart Infrastructure", desc: "Building, energy, and water management systems." },
                { Icon: Cloud, title: "Smart City", desc: "Utility metering, street lighting, and connected city grids." },
                { Icon: BarChart, title: "Agriculture", desc: "Irrigation automation, soil moisture monitoring, and crop analytics." },
                { Icon: Zap, title: "Energy & Solar", desc: "Solar PV management, power auditing, and efficiency tracking." },
                { Icon: Cpu, title: "Healthcare IoT", desc: "Smart medical devices, asset tracking, and environmental sensors." },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-amber-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- FEATURES & CAPABILITIES ---------- */}
        <Section id="features" bg="bg-[#27619E]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-200 mb-6">
              Features & Capabilities
            </motion.h2>
            <motion.ul variants={fadeUp} className="space-y-4 text-white/80 text-sm">
              <li>• Easy deployment — no servers, no complex setup.</li>
              <li>• Real-time operational insights accessible anywhere.</li>
              <li>• Advanced cyber-security with OTA firmware updates.</li>
              <li>• Edge computing for local decision-making.</li>
              <li>• Works online/offline with onboard storage.</li>
            </motion.ul>
          </motion.div>
        </Section>

        {/* ---------- TECHNICAL SPECIFICATIONS ---------- */}
        <Section id="specs" bg="bg-[#3172B3]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Technical Specifications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Connectivity</h3>
                <p className="text-white/80 text-sm">
                  RS-485, RS-232, Ethernet, Wi-Fi, Bluetooth v4.2, GSM, 4G LTE, LoRa, NB-IoT, GNSS.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Processing & Storage</h3>
                <p className="text-white/80 text-sm">
                  Edge processor with 16 GB storage (expandable to 256 GB), SSL 256-bit encryption.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Power & Environment</h3>
                <p className="text-white/80 text-sm">
                  5W max, 9–36V DC input, -30°C to +80°C operation, IP65 rated, 0.1kg weight.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Mounting & Protection</h3>
                <p className="text-white/80 text-sm">
                  DIN/panel/tabletop mounting, surge, ESD, reverse polarity and overvoltage protection.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- DOWNLOADS ---------- */}
        <Section id="downloads" bg="bg-[#3A7CCB]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Downloads & Resources
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                ["FRINSO V5.0 Brochure (PDF)", "#"],
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
        <Section id="faq" bg="bg-[#4585CC]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                ["Does FRINSO V5.0 support LoRa and NB-IoT?", "Yes, it supports LoRaWAN, GSM, 4G, LTE, and NB-IoT bands."],
                ["Is the device suitable for outdoor conditions?", "Yes, with IP65 rating and -30°C to +80°C operating range."],
                ["Can it work offline?", "Yes, with onboard storage for local data buffering."],
                ["How secure is the data?", "Data is SSL encrypted (256-bit) and transmitted via secure protocols."],
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
        <Section id="contact" bg="bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-sky-300">
              Need Frinso V5.0 for Your Project?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-white/80 max-w-2xl mx-auto"
            >
              Partner with us to bring secure, scalable, and intelligent edge connectivity to your industrial and smart infrastructure solutions.
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
