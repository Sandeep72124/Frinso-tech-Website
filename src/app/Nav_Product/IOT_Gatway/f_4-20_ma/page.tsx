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
  BarChart,
  Boxes,
  Wrench,
  Cog,
  Download,
  Info,
  BadgeCheck,
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

/* ---------- Types ---------- */
type FeatureItem = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

type ApplicationItem = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

/* ---------- Component ---------- */
export default function FrinsoV1Page() {
  const features: FeatureItem[] = [
    {
      Icon: Network,
      title: "Multi-Protocol Gateway",
      desc: "Supports Modbus RTU/TCP, MQTT, HTTP, REST and custom API bridging.",
    },
    {
      Icon: CircuitBoard,
      title: "Edge AI Analytics",
      desc: "Run lightweight ML models on-device for real-time detection.",
    },
    {
      Icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      desc: "TLS 1.2+, AES-256 encryption, signed firmware and secure boot.",
    },
  ];

  const applications: ApplicationItem[] = [
    {
      Icon: BarChart,
      title: "Smart Manufacturing",
      desc: "Machine connectivity and predictive maintenance for automation.",
    },
    {
      Icon: Boxes,
      title: "Smart Infrastructure",
      desc: "Building management, air quality and energy optimization systems.",
    },
    {
      Icon: Wrench,
      title: "Utilities & Energy",
      desc: "Water, power and gas network telemetry and loss analytics.",
    },
    {
      Icon: Cog,
      title: "OEM Integration",
      desc: "Embedded IoT gateway for custom industrial equipment.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#051420] text-white">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2440] via-[#071829] to-[#04101a]" />
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
                FRINSO V1.0
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
                A rugged, intelligent IoT Edge gateway enabling real-time
                connectivity, data processing and analytics for smart
                infrastructure and manufacturing enterprises.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <Link
                  href="#features"
                  className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow"
                >
                  Explore Features
                </Link>
                <Link
                  href="/demo"
                  className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15"
                >
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
              <div className="absolute -inset-6 bg-sky-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.05] p-4 border border-white/10">
                <Image
                  src="/frinso-v1-cover.png"
                  alt="Frinso V1.0 Device"
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
        <Section id="overview" bg="bg-[#0A2238]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-sky-300 mb-4">
              Overview
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
              FRINSO V1.0 Edge Device acts as a powerful gateway for industrial IoT deployments — bridging sensors, controllers and enterprise cloud applications. Its robust design supports edge analytics, real-time monitoring and remote management for true Industry 4.0 automation.
            </motion.p>
          </motion.div>
        </Section>

        {/* ---------- FEATURES ---------- */}
        <Section id="features" bg="bg-[#12345A]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-300 mb-8">
              Key Features
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {features.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-emerald-300 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- ARCHITECTURE ---------- */}
        <Section id="architecture" bg="bg-[#18406A]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-yellow-300 mb-6">
              System Architecture
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <Cpu className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Hardware Layer</h3>
                <p className="text-white/80 text-sm">
                  ARM Cortex-A53 quad-core, 2 GB RAM, 8–32 GB eMMC; RS-485, RS-232, Ethernet, Wi-Fi, 4G LTE; IP65 enclosure.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <Cloud className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Software Layer</h3>
                <p className="text-white/80 text-sm">
                  Linux Edge OS with Docker containers, device management, OTA updates and edge analytics engine.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- APPLICATIONS ---------- */}
        <Section id="applications" bg="bg-[#25619B]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-amber-200 mb-6">
              Applications
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map(({ Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <Icon className="w-8 h-8 text-amber-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-white/75 text-sm">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- SECURITY ---------- */}
        <Section id="security" bg="bg-[#2C6AAC]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-pink-200 mb-6">
              Security & Edge Intelligence
            </motion.h2>
            <motion.ul variants={fadeUp} className="space-y-3 text-white/80 text-sm">
              <li>• Secure boot, signed firmware and AES-256 encryption</li>
              <li>• TLS communication and mutual certificate authentication</li>
              <li>• Edge AI for anomaly detection and local control</li>
              <li>• Role-based user access and audit logs</li>
            </motion.ul>
          </motion.div>
        </Section>

        {/* ---------- CLOUD ---------- */}
        <Section id="cloud" bg="bg-[#3473B8]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-indigo-100 mb-6">
              Cloud & Data Services
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <Cloud className="w-6 h-6 text-indigo-100 mb-2" />
                <h3 className="font-semibold">Frinso Cloud</h3>
                <p className="text-white/80 text-sm">
                  Centralized dashboards, analytics, OTA management and API integration for enterprises.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <ServerCog className="w-6 h-6 text-indigo-100 mb-2" />
                <h3 className="font-semibold">Third-Party Integration</h3>
                <p className="text-white/80 text-sm">
                  Compatible with AWS IoT, Azure IoT Hub and Google Cloud IoT Core.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ---------- DOWNLOADS ---------- */}
        <Section id="downloads" bg="bg-[#3C7CC3]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
              Downloads & Resources
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                ["FRINSO V1.0 Brochure (PDF)", "#"],
                ["Hardware Datasheet (PDF)", "#"],
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
                ["Does it work offline?", "Yes, it buffers data locally and syncs automatically when connectivity returns."],
                ["Can we run AI on the device?", "Yes, supports TensorFlow Lite and custom ML models for edge inference."],
                ["Is the enclosure outdoor rated?", "Yes, IP65 rated for dust and splash resistance."],
                ["Does it support multiple clouds?", "Yes, integrates with Azure, AWS and Frinso Cloud simultaneously."],
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
        <Section
          id="contact"
          bg="bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a]"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-sky-300"
            >
              Need Frinso Edge Telemetry?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-white/80 max-w-2xl mx-auto"
            >
              Our team can help integrate your meters and controllers to the Frinso Cloud for real-time monitoring and analytics.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center justify-center gap-3"
            >
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

        {/* ---------- FOOTER ---------- */}
       
      </main>

      <Footer />
    </>
  );
}
