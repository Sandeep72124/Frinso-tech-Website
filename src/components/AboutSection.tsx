"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Zap, Leaf, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Cpu className="text-sky-400 w-6 h-6" />,
      title: "IoT Edge Innovation",
      desc: "Our custom-designed edge devices bring real-time visibility to water, energy, and infrastructure systems.",
    },
    {
      icon: <Cloud className="text-sky-400 w-6 h-6" />,
      title: "Connected Intelligence",
      desc: "Frinso’s cloud dashboards convert sensor data into actionable insights for decision-makers.",
    },
    {
      icon: <Zap className="text-sky-400 w-6 h-6" />,
      title: "Automation & Alerts",
      desc: "Smart automation for STPs, DGs, HVAC, and solar—enabling operational efficiency and reliability.",
    },
    {
      icon: <Leaf className="text-sky-400 w-6 h-6" />,
      title: "Sustainability First",
      desc: "We help clients save energy, water, and emissions through data-driven control systems.",
    },
  ];

  return (
    <section
  className="relative py-32 text-gray-900 overflow-hidden"
  style={{
    backgroundImage: "url('/about.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-14 relative z-10">
        {/* LEFT SECTION */}
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-sky-300 mb-4">About Frinso Tech</h2>
          <p className="text-gray-200 leading-relaxed mb-8">
            <span className="text-sky-300 font-semibold">Frinso Technologies Pvt. Ltd.</span>, 
            founded by IIT Bombay alumni, builds intelligent, sustainable, and connected 
            infrastructure using industry-agnostic IoT devices and cloud dashboards. From 
            smart water management to energy automation, Frinso empowers utilities, industries, 
            and governments with real-time control and analytics.
          </p>
          

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="p-5 bg-white/10 rounded-2xl border border-white/10 shadow-md backdrop-blur-sm hover:shadow-sky-400/30 hover:-translate-y-2 transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {h.icon}
                  <h3 className="font-semibold text-white">{h.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON + ARROW */}
          <div className="relative inline-block mt-4">
            {/* Curved Arrow SVG */}
           

            {/* Button */}
            <Link
              href="/Nav_Company/about"
              className="flex items-center gap-2 rounded-full bg-[#0047BB] px-6 py-3 text-white font-semibold shadow-lg hover:bg-[#005CE6] hover:scale-105 transition-all"
            >
              More About Us
              <ArrowUpRight size={18} className="mt-[2px]" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SECTION (Image Floating) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center relative"
        >
          <motion.img
            src="/about-frinso.jpg"
            alt="Frinso IoT Illustration"
            className="max-h-[500px] w-auto object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-sky-400/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
