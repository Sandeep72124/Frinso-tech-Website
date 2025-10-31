"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Gauge,
  Radio,
  Cable,
  Activity,
  ShieldCheck,
  Cloud,
  Settings2,
  PlugZap,
  ServerCog,
  BookText,
  Wrench,
  Boxes,
  BadgeCheck,
  Download,
  Info,
  LineChart,
  Network,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------------- Animations ---------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ---------------- Small helpers ---------------- */
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

export default function FrinsoV1Doc() {
  return (
    <>
    <Navbar/>
    <main className="bg-[#061422] text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#081A2F] via-[#061422] to-[#03101D]" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-sky-500/15 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs mb-4">
                <BadgeCheck className="w-4 h-4" />
                FRINSO TECHNOLOGIES PVT. LTD.
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-sky-300">
                FRINSO V1.0 <span className="text-white">– Industry 4.0 IoT Edge</span>
              </h1>
              <p className="mt-4 text-white/85 text-lg leading-relaxed">
                Secure, rugged, and intelligent edge gateway for water, energy, and
                industrial automation—built in India for the world. Collects, computes,
                and connects your assets in real time.
              </p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2"
              >
                <Pill><Cpu className="w-4 h-4" /> ARM Quad-Core</Pill>
                <Pill><Radio className="w-4 h-4" /> 4G/LTE | Wi-Fi | Ethernet</Pill>
                <Pill><Cable className="w-4 h-4" /> Modbus RTU/TCP</Pill>
                <Pill><Cloud className="w-4 h-4" /> MQTT/HTTPS</Pill>
                <Pill><ShieldCheck className="w-4 h-4" /> Secure Boot & TLS</Pill>
              </motion.div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="#downloads"
                  className="rounded-xl bg-sky-600 hover:bg-sky-500 px-5 py-3 font-medium shadow"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Datasheet
                  </div>
                </Link>
                <Link
                  href="/demo"
                  className="rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3 font-medium border border-white/15"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>

            <motion.div variants={zoomIn} className="relative">
              <div className="absolute -inset-6 bg-sky-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.06] p-4 border border-white/10">
                <Image
                  src="/frinso-v1-cover.png"
                  alt="FRINSO V1.0 Edge Device"
                  width={980}
                  height={720}
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
              <p className="text-center text-white/60 text-xs mt-3">
                *Illustration — actual product may vary by SKU.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK NAV ---------------- */}
      <Section id="toc" bg="bg-[#0A2238]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-sky-300 mb-6">
            Documentation Index
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-3 gap-3 text-white/90"
          >
            {[
              ["overview", "Overview"],
              ["features", "Key Features"],
              ["specs", "Hardware Specifications"],
              ["connectivity", "Connectivity & Protocols"],
              ["io", "I/O & Interfaces"],
              ["edge", "Edge AI & Computing"],
              ["power", "Power & Environment"],
              ["security", "Security"],
              ["cloud", "Cloud & Dashboard"],
              ["api", "APIs & SDK"],
              ["install", "Installation & Mounting"],
              ["usecases", "Applications"],
              ["compliance", "Certifications & Compliance"],
              ["downloads", "Downloads"],
              ["faq", "FAQ"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={`#${href}`}
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- OVERVIEW ---------------- */}
      <Section id="overview" bg="bg-[#102C46]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-sky-300 mb-4">
            Overview
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
            FRINSO V1.0 is a next-gen Industry 4.0 IoT Edge gateway engineered for harsh
            environments. It connects legacy and modern assets, runs on-device analytics,
            buffers data during network outages, and publishes securely to cloud or on-prem
            systems. Tailor-made for water utilities, smart energy, railways, factories,
            and infrastructure monitoring.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { icon: Cpu, title: "Rugged Edge Compute", desc: "ARM Quad-Core, hardware crypto, real-time data ops." },
              { icon: Radio, title: "Any Network", desc: "4G/LTE, Ethernet, Wi-Fi; failover and store-and-forward." },
              { icon: Cable, title: "Any Device", desc: "Modbus RTU/TCP, 4-20mA, digital I/O, pulse, RS-485/232." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <Icon className="w-8 h-8 text-sky-300 mb-3" />
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-white/75 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- FEATURES ---------------- */}
      <Section id="features" bg="bg-[#162F4F]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-300 mb-6">
            Key Features
          </motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [Cpu, "Edge Processing", "On-device rules, filtering, anomaly flags; reduce cloud noise & cost."],
              [Activity, "Real-time Telemetry", "Sub-second polling with buffering; time-sync over NTP/GPS."],
              [Network, "Multi-Protocol", "Modbus RTU/TCP, MQTT 3.1.1/5.0, HTTPS/REST, OPC-UA (optional)."],
              [Radio, "Multi-Bearer", "Dual SIM 4G/LTE failover; Ethernet primary/secondary; Wi-Fi client/AP."],
              [ShieldCheck, "Security-First", "Secure boot, signed OTA, TLS 1.2+, role-based access."],
              [Settings2, "Zero-Touch Provisioning", "QR/device code onboarding, cloud enrollment in minutes."],
            ].map(([Icon, title, desc], i) => (
              <li key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                {/* @ts-ignore */}
                <Icon className="w-8 h-8 text-emerald-300 mb-3" />
                <h3 className="font-semibold text-lg mb-1">{title as string}</h3>
                <p className="text-white/75 text-sm">{desc as string}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      {/* ---------------- HARDWARE SPECS ---------------- */}
      <Section id="specs" bg="bg-[#1C3558]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-amber-300 mb-6">
            Hardware Specifications
          </motion.h2>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-300" /> Compute
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• ARM Cortex-A53 quad-core @ 1.5 GHz</li>
                <li>• 2 GB LPDDR4 RAM, 8–32 GB eMMC</li>
                <li>• Hardware crypto engine (AES/SHA/RSA)</li>
                <li>• Real-time clock with battery backup</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <PlugZap className="w-5 h-5 text-amber-300" /> Interfaces
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 2× RS-485 (isolated), 1× RS-232</li>
                <li>• 1× 10/100 Ethernet (RJ45), optional 2nd</li>
                <li>• 4× DI (opto), 2× DO (relay), 2× AI (4–20 mA)</li>
                <li>• 1× USB-C (service), 1× micro-USB (debug)</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Radio className="w-5 h-5 text-amber-300" /> Wireless
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 4G/LTE Cat-4, 3G/2G fallback, dual-SIM</li>
                <li>• Wi-Fi 2.4 GHz b/g/n (client/AP)</li>
                <li>• GPS/GLONASS for time/geo-tag (optional)</li>
                <li>• External SMA antenna for LTE</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-300" /> Mechanical
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Enclosure: industrial ABS, matte black</li>
                <li>• Mounting: DIN-rail / wall / panel</li>
                <li>• Dimensions: 110 × 90 × 42 mm (typ.)</li>
                <li>• Weight: ~240 g</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- CONNECTIVITY & PROTOCOLS ---------------- */}
      <Section id="connectivity" bg="bg-[#203A61]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-300 mb-6">
            Connectivity & Protocols
          </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-2">Industrial Protocols</h3>
              <p className="text-white/80 text-sm">
                Modbus RTU over RS-485, Modbus TCP over Ethernet/Wi-Fi. OPC-UA
                (gateway mode) optional. Pulse counting for meters; digital
                event/limit alarms.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-2">Publish & Integrate</h3>
              <p className="text-white/80 text-sm">
                MQTT 3.1.1/5.0 with TLS; HTTPS/REST push; Webhooks; CSV/JSON
                export; store-and-forward with retry; configurable QoS; topic
                templates per asset.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- I/O ---------------- */}
      <Section id="io" bg="bg-[#26436C]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-fuchsia-300 mb-6">
            I/O & Interfaces
          </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              ["Digital Input", "4× opto-isolated (dry/wet), 1–30 V"],
              ["Digital Output", "2× relay 2 A @ 30 VDC / 250 VAC"],
              ["Analog Input", "2× 4–20 mA (16-bit ADC), loop detect"],
              ["Serial", "2× RS-485 (isol.), 1× RS-232, 300–115200 bps"],
              ["Ethernet", "10/100 RJ45, DHCP/static, VLAN (opt.)"],
              ["USB/Service", "USB-C service, micro-USB debug console"],
            ].map(([k, v], i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold">{k}</h3>
                <p className="text-white/75 text-sm mt-1">{v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- EDGE AI ---------------- */}
      <Section id="edge" bg="bg-[#2B4B77]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-lime-300 mb-6">
            Edge AI & Computing
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/85">
            Execute lightweight anomaly detection, thresholding, moving averages,
            and custom rule chains at the edge. Optional on-device ML runtimes
            (TensorFlow Lite/ONNX-runtime) for pattern scoring. Configurable data
            thinning and event tagging cut bandwidth and cloud costs by up to 30%.
          </motion.p>
        </motion.div>
      </Section>

      {/* ---------------- POWER & ENV ---------------- */}
      <Section id="power" bg="bg-[#315583]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-yellow-300 mb-6">
            Power & Environmental
          </motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-white/85">
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <strong>Input Power:</strong> 9–36 VDC (reverse polarity & surge
              protection). Typical 4–8 W.
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <strong>Operating Temp:</strong> −10 °C to +60 °C (industrial);
              Storage −20 °C to +70 °C; Humidity 5–95% RH non-condensing.
            </li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* ---------------- SECURITY ---------------- */}
      <Section id="security" bg="bg-gray-700">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-red-300 mb-6">
            Security
          </motion.h2>
          <motion.ul variants={fadeUp} className="space-y-3 text-white/85">
            <li>• Secure boot & signed firmware; encrypted config vault.</li>
            <li>• TLS 1.2+ with modern ciphers; client certs; rotate keys.</li>
            <li>• Role-based access; audit logs; brute-force lockout.</li>
            <li>• Encrypted at-rest buffers; physical tamper event (optional).</li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* ---------------- CLOUD & DASHBOARD ---------------- */}
      <Section id="cloud" bg="bg-gra-500">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-sky-200 mb-6">
            Cloud & Dashboard
          </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <Cloud className="w-5 h-5 text-sky-200" /> Frinso Cloud
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Real-time dashboards, alarms, device twins, OTA updates, user roles,
                projects, and reports. Ready connectors for utilities & industries.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <ServerCog className="w-5 h-5 text-sky-200" /> Third-Party
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Native MQTT/HTTPS works with Azure IoT, AWS IoT Core, EMQX, ThingsBoard,
                Ignition, or your SCADA via REST/MQTT bridges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- API & SDK ---------------- */}
      <Section id="api" bg="bg-[#446E9B]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-purple-200 mb-6">
            APIs & SDK
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/85">
            Configure devices via local web UI or REST. Publish/subscribe with
            MQTT topics per asset. Optional SDK exposes rule nodes (JavaScript/JSON)
            for transformations, alarm logic, and protocol adapters.
          </motion.p>
          <motion.pre
            variants={fadeUp}
            className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-5 text-xs overflow-x-auto"
          >
{`// Example MQTT topic
frinso/{projectId}/{siteId}/{deviceId}/telemetry

// Sample JSON payload
{
  "ts": 1730342400000,
  "asset": "pump-3",
  "metrics": { "flow_m3h": 12.6, "pressure_bar": 2.1, "status": "RUN" },
  "flags": { "low_pressure": false }
}`}
          </motion.pre>
        </motion.div>
      </Section>

      {/* ---------------- INSTALLATION ---------------- */}
      <Section id="install" bg="bg-blue-900">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-orange-200 mb-6">
            Installation & Mounting
          </motion.h2>
          <motion.ol variants={fadeUp} className="list-decimal list-inside space-y-2 text-white/85">
            <li>Unbox; verify accessories (power adapter, antenna, DIN clip).</li>
            <li>Insert SIM(s) if using LTE; attach SMA antenna firmly.</li>
            <li>Mount on DIN-rail or wall using provided brackets.</li>
            <li>Wire RS-485/232 and I/O as per labels; check polarity.</li>
            <li>Apply 12/24 VDC power; wait for status LED steady green.</li>
            <li>Connect via Ethernet or device AP; open local UI to provision.</li>
          </motion.ol>
          <motion.div variants={fadeUp} className="mt-4 text-white/60 text-sm">
            Tip: keep antenna away from large metal surfaces; ensure proper earthing.
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- APPLICATIONS ---------------- */}
      <Section id="usecases" bg="bg-gray-700">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-pink-200 mb-6">
            Applications
          </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              [Activity, "Smart Water", "Flow/pressure DMA monitoring, NRW reduction, reservoir/tank automation."],
              [LineChart, "Smart Energy", "DG/solar/harmonics/consumption analytics; alarms and reports."],
              [Boxes, "Industrial IoT", "PLC/drive/SCADA bridging, line OEE, condition monitoring."],
              [Wrench, "Predictive Maintenance", "Rule-based events & on-device anomaly flags for early action."],
              [Radio, "Railways", "IoT water quality, worker safety alerts, asset telemetry."],
              [Cloud, "Smart Cities", "Environmental stations, utilities dashboards, incident response."],
            ].map(([Icon, title, desc], i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                {/* @ts-ignore */}
                <Icon className="w-8 h-8 text-pink-200 mb-3" />
                <h3 className="font-semibold">{title as string}</h3>
                <p className="text-white/75 text-sm mt-1">{desc as string}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- COMPLIANCE ---------------- */}
      <Section id="compliance" bg="bg-gray-800">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-teal-200 mb-6">
            Certifications & Compliance
          </motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-4 text-white/85">
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              CE (EMC/Safety) – pending/available by SKU
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              BIS (India) – applicable models
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              RoHS compliant manufacturing
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              Telecom approvals per carrier (where required)
            </li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* ---------------- DOWNLOADS ---------------- */}
      <Section id="downloads" bg="bg-blue-800">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-indigo-100 mb-6">
            Downloads
          </motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              ["FRINSO V1.0 Datasheet (PDF)", "#"],
              ["Quick Start Guide (PDF)", "#"],
              ["Edge Rule SDK (Docs)", "#"],
            ].map(([label, href], i) => (
              <Link
                key={i}
                href={href as string}
                className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-indigo-100" />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      <Section id="faq" bg="bg-blue-900">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">
            FAQ
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-4">
            {[
              ["Can it work without internet?", "Yes. Data is buffered locally and syncs when connectivity restores. Rules continue to run offline."],
              ["How do updates work?", "Signed OTA updates via Frinso Cloud or local maintenance port."],
              ["Can I push data to our SCADA?", "Yes. Use MQTT/REST bridges or Modbus TCP server mode (optional)."],
              ["What about SIM management?", "Works with major carriers; supports dual SIM and APN configs."],
            ].map(([q, a], i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-6 border border-white/10">
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

      {/* ---------------- CONTACT CTA ---------------- */}
      <Section id="contact" bg="bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-sky-300">
            Ready to Pilot FRINSO V1.0?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-white/80 max-w-2xl mx-auto">
            Talk to our engineering team about your assets, protocols, and rollout plan.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
            <Link href="/apply" className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow">
              Request a Demo
            </Link>
            <Link href="/contact" className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      
    </main>
    <Footer/>
    </>
  );
}
