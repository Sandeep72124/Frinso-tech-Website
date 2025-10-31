"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Factory, Gauge } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Cpu className="w-7 h-7 text-sky-400" />,
      bg: "from-sky-500/30 to-sky-700/30",
      title: "IoT Edge & Field Devices",
      desc: "Frinso designs and manufactures IoT Edge Gateways, field devices, and sensors for water, energy, and industrial automation.",
    },
    {
      icon: <Cloud className="w-7 h-7 text-emerald-400" />,
      bg: "from-emerald-500/30 to-emerald-700/30",
      title: "Smart Water & Energy Systems",
      desc: "Our IoT-based SCADA systems manage water supply, treatment plants, and energy automation across 23+ towns and villages.",
    },
    {
      icon: <Factory className="w-7 h-7 text-amber-400" />,
      bg: "from-amber-500/30 to-orange-600/30",
      title: "Infrastructure Automation",
      desc: "From WTP/STP/ETP automation to smart factories, retail, HVAC, and solar—Frinso integrates intelligence into every infrastructure layer.",
    },
    {
      icon: <Gauge className="w-7 h-7 text-violet-400" />,
      bg: "from-violet-500/30 to-indigo-700/30",
      title: "Made in India, Built for the World",
      desc: "Frinso delivers custom IoT and SCADA-enabled solutions—engineered for global reliability and sustainability.",
    },
  ];

  return (
    <section className="relative py-28 text-gray-900 overflow-hidden bg-gradient-to-b from-[#001F4F] via-[#002A70] to-[#003A99]">
      {/* Background Floating Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-12 relative z-10">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-5xl"
        >
          <h2 className="text-4xl font-bold text-sky-300 mb-6">
            About Frinso Technologies
          </h2>

          <div className="space-y-5 text-gray-200 leading-relaxed">
            <p>
              <span className="text-sky-300 font-semibold">Frinso Technologies Pvt. Ltd.</span>, 
              founded by IIT Bombay alumni, is driving the digital transformation of India’s infrastructure 
              through intelligent, sustainable, and connected IoT solutions. Our expertise spans 
              <span className="font-semibold"> Smart Water, Smart Energy,</span> and 
              <span className="font-semibold"> Smart City ecosystems</span> — covering irrigation, 24×7 Drinking Water Supply, Smart Urban Infrastructure, WTP/STP/ETP Automation, and regulatory-compliant CGWA/CPCB projects.
            </p>

            <p>
              Leveraging <span className="font-semibold">IoT devices, SCADA platforms,</span> and 
              <span className="font-semibold"> AI-powered analytics,</span> Frinso enables governments, industries, and utilities to 
              remotely monitor, control, and optimize critical operations with precision and reliability.
            </p>

            <p>
              In the <span className="font-semibold">Smart Water domain,</span> Frinso has delivered clean drinking water 
              to over <span className="font-semibold">6 million people</span> across 23 towns and villages. 
              Our smart automation initiatives have conserved <span className="font-semibold">0.5 million hectares of water</span> 
              and boosted farmers’ incomes under national missions like <span className="text-sky-300 font-semibold">JJM</span> and 
              <span className="text-sky-300 font-semibold"> PMKSY</span>.
            </p>

            <p>
              As a <span className="font-semibold text-sky-300">Proudly Made in India 🇮🇳</span> company, 
              Frinso designs and manufactures advanced IoT hardware, SCADA systems, and edge devices engineered 
              for <span className="font-semibold">global reliability, sustainability,</span> and long-term impact.
            </p>
          </div>
        </motion.div>

        {/* Updated Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mt-10">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`relative group rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg 
              bg-white/10 hover:bg-white/20 transition-all duration-500 overflow-hidden`}
            >
              {/* Animated Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 
                bg-gradient-to-br ${h.bg} blur-xl`}
              ></div>

              <div className="relative z-10 flex flex-col items-start gap-4">
                {/* Icon Circle */}
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${h.bg} flex items-center justify-center shadow-inner`}
                >
                  {h.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition">
                  {h.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-8"
        >
          <Link
            href="/Nav_Company/about"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-7 py-3 text-white font-semibold shadow-xl hover:shadow-sky-400/40 transition-all"
          >
            More About Us
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
