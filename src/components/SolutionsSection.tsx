"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SolutionsSection() {
  const items = [
    {
      title: "Smart Water Management",
      desc: "End-to-end monitoring for WTP, STP, borewells, and distribution with IoT automation and analytics.",
      icon: "💧",
      img: "/water.png",
      href: "/nav_solutions/water/smart-flow",
    },
    {
      title: "Smart Energy Management",
      desc: "Monitor energy, power quality, and asset performance — optimize consumption and improve efficiency.",
      icon: "⚡",
      img: "/energy.jpg",
      href: "/nav_solutions/energy-power",
    },
    {
      title: "Smart HVAC Monitoring",
      desc: "Ensure thermal comfort and energy savings with chiller and AHU analytics using IoT sensors.",
      icon: "❄️",
      img: "/hvac.jpg",
      href: "/nav_solutions/hvac/smart-hvac-automation",
    },
    {
      title: "Smart DG Monitoring",
      desc: "Fuel level, runtime, load, and performance tracking with theft detection and maintenance alerts.",
      icon: "⛽",
      img: "/dg.jpg",
      href: "/nav_solutions/dg-monitoring",
    },
    {
      title: "Smart Rail Water Monitoring",
      desc: "IoT-enabled refilling and flow monitoring system ensuring timely and efficient water supply to trains.",
      icon: "🚉",
      img: "/rail.jpg",
      href: "/nav_solutions/water/railway",
    },
    {
      title: "Smart City SCADA",
      desc: "Centralized dashboard for utilities — real-time data integration from multiple city assets and sites.",
      icon: "🌆",
      img: "/city.jpg",
      href: "/nav_solutions/smart-city/smart-water-network",
    },
    {
      title: "Industrial IoT Telemetry",
      desc: "Connect PLCs, RTUs, and sensors across plants — track uptime, alarms, and machine efficiency.",
      icon: "🏭",
      img: "/industrial.jpg",
      href: "/nav_solutions/industrial-infra",
    },
    {
      title: "Water Quality Analytics",
      desc: "Monitor pH, TDS, turbidity, and chlorine in real-time to ensure safe and compliant supply.",
      icon: "🧪",
      img: "/quality.jpg",
      href: "/nav_solutions/water/smart-quality",
    },
    {
      title: "Remote Pump Automation",
      desc: "Automate pump operations and tank levels with remote control and scheduling logic.",
      icon: "🚰",
      img: "/pump.jpg",
      href: "/nav_solutions/water/smart-level",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#06284a] text-white overflow-hidden">
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent)]" />
        <div className="absolute -top-40 left-0 w-[140%] h-[120%] bg-[url('/wave-bg.svg')] bg-cover opacity-5 animate-[waveMove_15s_linear_infinite]" />
        <style jsx global>{`
          @keyframes waveMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-sky-300 mb-4"
        >
          Our Smart Solutions
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-lg text-white/80 mb-16 max-w-3xl mx-auto"
        >
          Explore how Frinso Tech’s IoT + Automation platforms empower water, energy, and
          infrastructure management with real-time visibility and smart control.
        </motion.p>

        {/* Grid with clickable solution cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="group">
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.05, rotateX: 4, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 180, damping: 12 }}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white/5 border border-white/10 
                           hover:border-sky-400/30 backdrop-blur-xl hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] 
                           transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/70 via-[#1e3a8a]/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-700" />
                </div>

                {/* Text content */}
                <div className="relative z-10 p-6">
                  <div className="text-4xl mb-3 drop-shadow-lg">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-300 transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Glow line bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-sky-400 to-cyan-300 group-hover:w-full transition-all duration-700 ease-out"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Bottom reflection effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-400/20 via-transparent to-transparent blur-xl pointer-events-none" />
    </section>
  );
}
