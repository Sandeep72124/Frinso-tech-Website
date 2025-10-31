"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Cloud,
  Cpu,
  Cable,
  Radio,
  ShieldCheck,
  Gauge,
  AlertTriangle,
  FileText,
  MapPin,
  Database,
  Network,
  Lock,
  ServerCog,
  Download,
  Info,
  Waves,
  Droplets,
  Zap,
  Timer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Animations */
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const zoomIn: Variants = { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

/* Helper section wrapper */
const Section = ({ id, bg, children }: { id: string; bg: string; children: React.ReactNode }) => (
  <section id={id} className={`${bg} py-20 border-t border-white/10`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

export default function FrinsoV1CGWA() {
  return (
    <>
    <Navbar/>
    <main className="bg-[#061422] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2440] via-[#061422] to-[#03101D]" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-sky-500/15 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs mb-4">
                <BadgeCheck className="w-4 h-4" />
                FRINSO TECHNOLOGIES PVT. LTD.
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-sky-300">
                FRINSO V1.0 <span className="text-white">– CGWA / CPCB Telemetry</span>
              </h1>
              <p className="mt-4 text-white/85 text-lg">
                Certified-ready IoT edge for <b>groundwater abstraction</b> and <b>environmental compliance</b>. 
                Streams flow, level, and quality data to mandated government portals with strong security and reliability.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill><Cloud className="w-4 h-4" /> Direct CGWA/CPCB API Push</Pill>
                <Pill><Radio className="w-4 h-4" /> 4G/LTE • Ethernet • Wi-Fi</Pill>
                <Pill><Cable className="w-4 h-4" /> Modbus RTU/TCP • Pulse</Pill>
                <Pill><ShieldCheck className="w-4 h-4" /> TLS + Signed OTA</Pill>
                <Pill><Gauge className="w-4 h-4" /> Tamper & Power Loss Logs</Pill>
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="#downloads" className="rounded-xl bg-sky-600 hover:bg-sky-500 px-5 py-3 font-medium shadow">
                  <div className="flex items-center gap-2"><Download className="w-5 h-5" /> Download Brochure</div>
                </Link>
                <Link href="/demo" className="rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3 font-medium border border-white/15">
                  Request Demo
                </Link>
              </div>
            </motion.div>

            <motion.div variants={zoomIn} className="relative">
              <div className="absolute -inset-6 bg-sky-400/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.06] p-4 border border-white/10">
                <Image src="/f1_cgwa.jpg" alt="FRINSO V1.0 CGWA/CPCB Telemetry" width={980} height={720} className="rounded-2xl object-contain" priority />
              </div>
              <p className="text-center text-white/60 text-xs mt-3">*Representative model with CGWA/CPCB labeling.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INDEX */}
      <Section id="toc" bg="bg-[#0A2238]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-sky-300 mb-6">Documentation Index</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-3 text-white/90">
            {[
              ["overview","Overview"],
              ["features","Key Features"],
              ["sensors","Supported Sensors"],
              ["specs","Hardware Specs"],
              ["protocols","Protocols & Payload"],
              ["compliance","CGWA/CPCB Compliance"],
              ["install","Installation"],
              ["ops","Operations & Alarms"],
              ["security","Security"],
              ["cloud","Cloud & Reports"],
              ["downloads","Downloads"],
              ["faq","FAQ"],
            ].map(([href,label]) => (
              <Link key={href} href={`#${href}`} className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3">
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* OVERVIEW */}
      <Section id="overview" bg="bg-[#103052]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-sky-300 mb-4">Overview</motion.h2>
          <motion.p variants={fadeUp} className="text-white/85 leading-relaxed">
            The FRINSO V1.0 CGWA/CPCB variant is a rugged <b>Industry 4.0 IoT Edge gateway</b> purpose-built for statutory telemetry. 
            It collects water abstraction, groundwater level, and quality metrics from meters and sensors, validates them on-device, 
            and securely publishes to <b>CGWA/CPCB endpoints</b> as per prescribed intervals, while also serving enterprise dashboards.
          </motion.p>
        </motion.div>
      </Section>

      {/* KEY FEATURES */}
      <Section id="features" bg="bg-[#15385F]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-emerald-300 mb-6">Key Features</motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [Droplets,"Meter Integrations","Modbus flow meters, pulse meters, piezometers, WQ sensors (pH/TDS/EC/DO)."],
              [Timer,"Sampling & Push","Locally configurable sampling (e.g., 1–15 min) and push intervals as per guidelines."],
              [Cloud,"Govt. API Ready","Native integrations for CGWA/CPCB; retry, ACK tracking, and audit trails."],
              [Zap,"Power Resilience","Wide 9–36 VDC input, brownout protection, data buffering during outages."],
              [Gauge,"Tamper Evident","Covers door open, meter disconnect, SIM/antenna removal, RTC drift."],
              [ServerCog,"Remote Ops","OTA updates, remote diagnostics, logs, and provisioning from Frinso Cloud."],
            ].map(([Icon, title, desc], i) => (
              <li key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                {/* @ts-ignore */}<Icon className="w-8 h-8 text-emerald-300 mb-3" />
                <h3 className="font-semibold text-lg mb-1">{title as string}</h3>
                <p className="text-white/75 text-sm">{desc as string}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      {/* SUPPORTED SENSORS */}
      <Section id="sensors" bg="bg-[#1A416B]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-amber-300 mb-6">Supported Sensors & Meters</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              ["Flow Meters","Electromagnetic/Ultrasonic; Modbus or pulse output."],
              ["Groundwater Level","Piezometric level transmitters (4–20 mA / Modbus)."],
              ["Water Quality","pH, EC/TDS, DO, ORP (4–20 mA / Modbus)."],
              ["Pressure","0–10 bar 4–20 mA transmitters."],
              ["Valve/Pump Status","Digital inputs for RUN/STOP, trip, tamper."],
              ["GPS (opt.)","Geo-tagging and time sync for remote wells."],
            ].map(([k,v],i)=>(
              <div key={i} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold">{k}</h3>
                <p className="text-white/75 text-sm mt-1">{v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* HARDWARE SPECS */}
      <Section id="specs" bg="bg-[#204974]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-yellow-300 mb-6">Hardware Specifications</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Cpu className="w-5 h-5 text-yellow-300" /> Compute</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• ARM Cortex-A53 quad-core, 2 GB RAM, 8–32 GB eMMC</li>
                <li>• RTC with battery; hardware crypto engine</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Radio className="w-5 h-5 text-yellow-300" /> Connectivity</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 4G/LTE Cat-4 (dual SIM), 3G/2G fallback</li>
                <li>• Ethernet 10/100, Wi-Fi 2.4 GHz (client/AP)</li>
                <li>• External SMA LTE antenna</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Cable className="w-5 h-5 text-yellow-300" /> I/O</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 2× RS-485 (isolated), 1× RS-232</li>
                <li>• 4× DI (opto), 2× DO (relay), 2× AI (4–20 mA)</li>
                <li>• USB-C service; micro-USB debug</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Gauge className="w-5 h-5 text-yellow-300" /> Mechanical & Power</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• IP65 industrial enclosure; DIN-rail/wall mount</li>
                <li>• 9–36 VDC input; surge & reverse protection</li>
                <li>• −10 °C to +60 °C; 5–95% RH non-condensing</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* PROTOCOLS & PAYLOAD */}
      <Section id="protocols" bg="bg-[#25527F]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-cyan-300 mb-6">Protocols & Payload</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-cyan-300" /> Ingest</h3>
              <p className="text-white/80 text-sm">Modbus RTU/TCP, pulse counting, analog scaling, debouncing, and validation rules on-device.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold mb-2 flex items-center gap-2"><Cloud className="w-5 h-5 text-cyan-300" /> Publish</h3>
              <p className="text-white/80 text-sm">MQTT/HTTPS to CGWA/CPCB endpoints with TLS. Store-and-forward and QoS to prevent data loss.</p>
            </div>
          </motion.div>

          <motion.pre variants={fadeUp} className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-5 text-xs overflow-x-auto">
{`// Example HTTPS payload (CPCB)
{
  "siteId": "SITE-001",
  "deviceId": "FRV1-ABC123",
  "ts": "2025-10-31T06:15:00Z",
  "metrics": {
    "flow_m3h": 14.2,
    "totalized_m3": 78123.6,
    "gw_level_m": 36.4,
    "ph": 7.4,
    "ec_us_cm": 512
  },
  "status": { "tamper": false, "power": "OK", "signal_dbm": -76 }
}`}
          </motion.pre>
        </motion.div>
      </Section>

      {/* COMPLIANCE */}
      <Section id="compliance" bg="bg-[#2A5B89]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-teal-200 mb-6">CGWA / CPCB Compliance</motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-white/85">
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <b>Sampling & Push:</b> Configurable (typ. 5–15 min sampling; 15–60 min push) as per circular/consent.
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <b>Data Retention:</b> Local buffer & encrypted storage; automatic backfill on link restore.
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <b>Tamper:</b> Meter disconnect, enclosure open, RTC drift, SIM/antenna removal, power events.
            </li>
            <li className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <b>Reports:</b> Daily/Monthly abstracts for audits; CSV/JSON exports.
            </li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* INSTALLATION */}
      <Section id="install" bg="bg-[#2F6392]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-orange-200 mb-6">Installation</motion.h2>
          <motion.ol variants={fadeUp} className="list-decimal list-inside space-y-2 text-white/85">
            <li>Mount IP65 enclosure near meter/piezometer; ensure antenna clearance.</li>
            <li>Wire RS-485/analog/digital lines per labels; verify polarity and shielding.</li>
            <li>Insert SIM(s), set APN; power-on with 12/24 VDC supply.</li>
            <li>Provision via local web UI; select sensors, sampling, and CGWA/CPCB endpoint keys.</li>
            <li>Run test push and confirm ACK/status on portal.</li>
          </motion.ol>
        </motion.div>
      </Section>

      {/* OPERATIONS */}
      <Section id="ops" bg="bg-[#346B9B]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-pink-200 mb-6">Operations & Alarms</motion.h2>
          <motion.ul variants={fadeUp} className="space-y-3 text-white/85">
            <li>• On-device thresholds for dry-run, abnormal level/flow, sensor fault.</li>
            <li>• SMS/Email/Push via Frinso Cloud; webhook to plant SCADA.</li>
            <li>• Watchdog, auto-recovery, link failover (SIM-A → SIM-B → Wi-Fi/Ethernet).</li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* SECURITY */}
      <Section id="security" bg="bg-[#3B73A3]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-red-200 mb-6">Security</motion.h2>
          <motion.ul variants={fadeUp} className="space-y-3 text-white/85">
            <li>• TLS 1.2+ to portals; device & server certs; key rotation.</li>
            <li>• Secure boot, signed firmware; role-based users; audit logs.</li>
            <li>• Encrypted buffers at rest; brute-force lockout; optional tamper switch.</li>
          </motion.ul>
        </motion.div>
      </Section>

      {/* CLOUD */}
      <Section id="cloud" bg="bg-[#427BAB]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-indigo-100 mb-6">Cloud & Reports</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold flex items-center gap-2"><Cloud className="w-5 h-5 text-indigo-100" /> Frinso Cloud</h3>
              <p className="text-white/80 text-sm mt-2">Dashboards, alarms, device management, reports (daily, monthly, abstract), exports.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-semibold flex items-center gap-2"><ServerCog className="w-5 h-5 text-indigo-100" /> Integrations</h3>
              <p className="text-white/80 text-sm mt-2">MQTT/REST to enterprise systems; push mirrors to customer SCADA/ERP.</p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* DOWNLOADS */}
      <Section id="downloads" bg="bg-blue-400">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">Downloads</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              ["CGWA/CPCB Telemetry Brochure (PDF)", "#"],
              ["Quick Start – CGWA Setup (PDF)", "#"],
              ["API Mapping Guide (PDF)", "#"],
            ].map(([label, href], i) => (
              <Link key={i} href={href as string} className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10">
                <div className="flex items-center gap-3"><Download className="w-5 h-5" /><span>{label}</span></div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="bg-gray-700">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-6">FAQ</motion.h2>
          <motion.div variants={fadeUp} className="space-y-4">
            {[
              ["Will it work if the site loses internet?", "Yes. Data is buffered locally and auto-backfilled when connectivity returns."],
              ["How frequently does it send data?", "As per consent order—commonly 15–60 minutes (configurable)."],
              ["Can we view data on our own portal?", "Yes. We mirror to Frinso Cloud and can forward to your SCADA/ERP via APIs."],
              ["Is enclosure outdoor-ready?", "Yes—IP65 model with gland sealing, surge-protected power."],
            ].map(([q,a],i)=>(
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

      {/* CONTACT CTA */}
      <Section id="contact" bg="bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a]">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-sky-300">Need CGWA/CPCB Telemetry Now?</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-white/80 max-w-2xl mx-auto">Our team can provision SIMs, onboard meters, and get your site compliant quickly.</motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
            <Link href="/demo" className="rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-3 font-medium shadow">Request a Demo</Link>
            <Link href="/contact" className="rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 font-medium border border-white/15">Contact Us</Link>
          </motion.div>
        </motion.div>
      </Section>

      
    </main>
    <Footer/>
    </>
  );
}
