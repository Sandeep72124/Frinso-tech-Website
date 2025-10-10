"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Cpu, Cloud, Gauge, Zap } from "lucide-react";

export default function ProductPage() {
  const [active, setActive] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "Frinso V1 IoT Edge Device",
      desc: "Next-generation Industry 4.0 gateway supporting 5G, LoRa, NB-IoT, and Satellite communication. Connects any sensor, meter, or actuator with real-time analytics and AI edge processing.",
      short:
        "Universal edge gateway for smart infrastructure — fast, rugged, and intelligent.",
      img: "/product-edge.png",
      icon: <Cpu size={28} className="text-sky-400" />,
    },
    {
      id: 2,
      title: "Frinso.io Dashboard",
      desc: "Cloud + On-prem SCADA platform for real-time monitoring, reporting, and analytics. Supports AMRUT 2.0, JJM, CGWA, and CPCB integrations with compliance-ready exports.",
      short: "Real-time IoT monitoring and automation platform.",
      img: "/product-dashboard.png",
      icon: <Cloud size={28} className="text-sky-400" />,
    },
    {
      id: 3,
      title: "Smart Prepaid Water Meter",
      desc: "JJM & AMRUT 2.0 ready IoT water metering with GSM/LoRa connectivity, prepaid billing, and consumer web dashboards.",
      short: "IoT-based prepaid water metering for cities and societies.",
      img: "/product-meter.jpg",
      icon: <Gauge size={28} className="text-sky-400" />,
    },
    {
      id: 4,
      title: "Smart Energy & DG Controller",
      desc: "Monitor fuel levels, energy usage, and DG efficiency with Modbus, AI analytics, and automated alerts — fully compatible with SEDEMAC & DeepSea controllers.",
      short: "End-to-end Energy and DG monitoring automation.",
      img: "/product-energy.png",
      icon: <Zap size={28} className="text-sky-400" />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <motion.img
          src="/products-bg.jpg"
          alt="Frinso Products Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0a2540]/80"></div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-sky-400">Key Products</span>
        </motion.h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl relative z-10">
          IoT devices, dashboards, and platforms enabling the next generation of smart,
          connected, and sustainable infrastructure.
        </p>
      </section>

      {/* Product Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className={`relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg hover:shadow-sky-400/30 transition-all duration-500 cursor-pointer ${
                active === p.id ? "scale-105" : "hover:-translate-y-2"
              }`}
              onClick={() => setActive(active === p.id ? null : p.id)}
              whileHover={{ scale: active === p.id ? 1.05 : 1.03 }}
            >
              {/* Product Image */}
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Overlay Water Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-500/40 via-transparent to-transparent"></div>

              {/* Product Info */}
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  {p.icon}
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="text-gray-200 text-sm">{p.short}</p>
              </div>

              {/* Expanded View */}
              {active === p.id && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-[#0a2540]/95 backdrop-blur-md p-6 flex flex-col justify-center text-center rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-sky-300 mb-3">{p.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{p.desc}</p>
                  <button
                    onClick={() => setActive(null)}
                    className="mt-6 self-center bg-gradient-to-r from-sky-400 to-cyan-400 text-gray-900 px-5 py-2 rounded-lg font-medium hover:from-sky-300 hover:to-cyan-300 transition"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
