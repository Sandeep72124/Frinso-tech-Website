"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
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
  ServerCog,
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
export default function FrinsoF6Page() {
  const highlights: CardItem[] = [
    {
      Icon: Antenna,
      title: "Multi-Network Connectivity",
      desc: "4G/LTE, GSM/2G, Wi-Fi, Bluetooth, LoRa, NB-IoT — ready for any site.",
    },
    {
      Icon: Network,
      title: "Open Integrations",
      desc: "Modbus RTU/TCP, MQTT/HTTPS — seamless bridge to SCADA and Cloud.",
    },
    {
      Icon: CircuitBoard,
      title: "Built-in I/O",
      desc: "Analog & Digital I/O for direct sensor/actuator interfacing.",
    },
    {
      Icon: Gauge,
      title: "Industrial Form Factor",
      desc: "Rugged, compact enclosure for DIN/panel mounting.",
    },
    {
      Icon: Cloud,
      title: "Cloud Ready",
      desc: "Works with Frinso Cloud, AWS, Azure — dashboards, OTA, alerts.",
    },
    {
      Icon: ShieldCheck,
      title: "Data Continuity",
      desc: "On-device buffering + secure retry to prevent data loss.",
    },
  ];

  const applications: CardItem[] = [
    {
      Icon: Wrench,
      title: "Industrial IoT",
      desc: "Automation, condition monitoring, predictive maintenance.",
    },
    {
      Icon: Boxes,
      title: "Smart Infrastructure",
      desc: "BMS, water & energy telemetry, environmental sensing.",
    },
    {
      Icon: Cloud,
      title: "Smart City",
      desc: "Utility metering, street lighting, distributed assets.",
    },
    {
      Icon: BarChart,
      title: "Agriculture",
      desc: "Irrigation automation, soil/flow monitoring, pump control.",
    },
    {
      Icon: Zap,
      title: "Energy & Solar",
      desc: "PV monitoring, DG & power analytics, alarms & reports.",
    },
    {
      Icon: Cpu,
      title: "Healthcare IoT",
      desc: "Asset tracking, environment monitoring, compliance logs.",
    },
  ];

  const features: string[] = [
    "Rapid deployment: no servers required, secure onboarding in minutes.",
    "Real-time insights across web, Android and iOS dashboards.",
    "Edge analytics & rules for on-site decisions and bandwidth savings.",
    "Works online/offline with local encrypted storage and backfill.",
    "Enterprise security, OTA firmware updates, audit trails.",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#04131A] text-white">
        {/* ---------- HERO (Teal Theme) ---------- */}
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
                FRINSO F6.0
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white mt-2"
              >
                Industry 4.0 IoT Edge Gateway
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-white/85 text-lg leading-relaxed">
                A teal-tuned, next-gen Industrial IoT edge device for real-time control,
                data analytics and remote management — built to connect any sensor,
                any protocol, to any cloud.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <Link
                  href="#overview"
                  className="rounded-xl bg-teal-600 hover:bg-teal-500 px-6 py-3 font-medium shadow"
                >
                  Explore F6.0
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
              <div className="absolute -inset-6 bg-teal-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.05] p-4 border border-white/10">
                <Image
                  src="/f6-device.jpg" // ← replace with your uploaded image name in /public
                  alt="Frinso F6.0 Device"
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
              FRINSO F6.0 is a robust Industry 4.0 edge node purpose-built for harsh environments.
              It integrates legacy and modern equipment, executes edge rules for fast decisions,
              buffers data during outages, and delivers secure telemetry to Frinso Cloud or third-party platforms.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- HIGHLIGHTS ---------- */}
        <Section id="highlights" bg="bg-[#0A2833]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-teal-200 mb-6">
              Highlights
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {highlights.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-teal-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- APPLICATIONS ---------- */}
        <Section id="applications" bg="bg-[#0D2F3C]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-200 mb-6">
              Application Areas
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {applications.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-cyan-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- FEATURES & CAPABILITIES ---------- */}
        <Section id="features" bg="bg-[#103645]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-200 mb-6">
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
        <Section id="specs" bg="bg-[#133D4D]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Technical Specifications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Connectivity</h3>
                <p className="text-white/80 text-sm">
                  RS-485, RS-232, Ethernet, Wi-Fi, Bluetooth v4.2, GSM/4G/LTE, LoRa, NB-IoT, GNSS.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Processing & Storage</h3>
                <p className="text-white/80 text-sm">
                  Edge processor with onboard storage (16 GB typical, expandable); TLS/SSL 256-bit encryption.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Power & Environment</h3>
                <p className="text-white/80 text-sm">
                  9–36 VDC input, ~5 W typical; operating −30°C to +80°C; IP65 enclosure.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Mounting & Protection</h3>
                <p className="text-white/80 text-sm">
                  DIN / panel / tabletop; surge & ESD protection; reverse-polarity & over-voltage safeguards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- DOWNLOADS ---------- */}
        <Section id="downloads" bg="bg-[#174556]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Downloads & Resources
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                ["FRINSO F6.0 Brochure (PDF)", "#"],
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
        <Section id="faq" bg="bg-[#1A4D60]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                ["Does F6.0 support LoRa and NB-IoT?", "Yes — alongside GSM/4G/LTE, Wi-Fi and Bluetooth."],
                ["Is it outdoor-ready?", "Yes. IP65 enclosure and wide temperature range −30°C to +80°C."],
                ["Can it work offline?", "Yes. Data is buffered locally and auto-backfilled when connectivity returns."],
                ["How secure is the data?", "TLS/SSL encryption, signed OTA, role-based access and audit logs."],
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
              Ready to Deploy FRINSO F6.0?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/85 max-w-2xl mx-auto">
              Our team can integrate your sensors, configure protocols and launch dashboards fast — end to end.
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

        {/* ---------- FOOTER STRIP ---------- */}
        
      </main>

      <Footer />
    </>
  );
}
