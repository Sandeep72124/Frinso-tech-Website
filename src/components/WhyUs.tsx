"use client";

import Reveal from "./Reveal";
import { Cpu, Bell, FileCheck, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const points = [
    {
      text: "End-to-end IoT solutions — devices, connectivity, dashboards, and reports",
      icon: <Cpu className="text-sky-300 w-6 h-6" />,
    },
    {
      text: "Realtime alerts via Email/SMS with configurable thresholds",
      icon: <Bell className="text-sky-300 w-6 h-6" />,
    },
    {
      text: "Compliance-ready exports and secure data for regulators",
      icon: <FileCheck className="text-sky-300 w-6 h-6" />,
    },
    {
      text: "Scalable multi-tenant architecture for large deployments",
      icon: <Layers className="text-sky-300 w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#e8f4ff] to-[#ffffff]">
      {/* Decorative soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
        {/* Right Text Content */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Reveal>
            <h2 className="text-4xl font-bold text-sky-700 mb-4">Why Choose Frinso</h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              Frinso Tech delivers intelligent, connected, and sustainable infrastructure 
              built for future-ready operations. Our end-to-end IoT ecosystem empowers 
              industries, utilities, and governments to make smarter, data-driven decisions.
            </p>
          </Reveal>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.15}>
                <motion.div
                  className="group flex items-start gap-4 rounded-xl border border-sky-100 bg-white/80 backdrop-blur-md p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-sky-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition">
                    {p.icon}
                  </div>
                  <p className="text-gray-600 text-left group-hover:text-gray-900 transition">
                    {p.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </motion.div>

        {/* Left Floating Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/choose.jpg"
            alt="Why Choose Frinso"
            className="h-[420px] lg:h-[480px] object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-sky-300/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
