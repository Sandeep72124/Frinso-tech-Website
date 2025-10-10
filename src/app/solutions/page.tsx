"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Smart Water Management",
      desc: "Monitor STP, WTP, and borewells with CGWA, CPCB, and JJM integration. Automate flow, quality, and pressure monitoring in real-time.",
      img: "/solutions/water.jpg",
    },
    {
      title: "Smart Energy Management",
      desc: "IoT-enabled analytics for buildings, utilities, and industries — reducing T&D losses and improving power efficiency.",
      img: "/solutions/energy.jpg",
    },
    {
      title: "Smart HVAC Automation",
      desc: "Control chillers, compressors, and air systems with predictive maintenance and energy optimization.",
      img: "/solutions/hvac.jpg",
    },
    {
      title: "Smart DG Monitoring",
      desc: "Monitor diesel usage, theft, runtime, and load analytics with Modbus and real-time alerts.",
      img: "/solutions/dg.jpg",
    },
    {
      title: "Smart Rail Water Monitoring",
      desc: "End-to-end IoT system for train water refilling and usage optimization across depots.",
      img: "/solutions/rail.jpg",
    },
    {
      title: "Smart Retail & City Infrastructure",
      desc: "IoT for malls, offices, and cities — managing energy, HVAC, and occupancy efficiently.",
      img: "/solutions/retail.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <motion.img
          src="/solutions-bg.jpg"
          alt="Solutions Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0a2540]/80"></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Smart <span className="text-sky-400">IoT Solutions</span>
        </motion.h1>
        <p className="text-white/90 mt-4 max-w-2xl relative z-10">
          Transforming water, energy, and infrastructure systems with IoT-based intelligence.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {solutions.map((s, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg hover:shadow-sky-400/30 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="text-xl font-bold text-sky-300">{s.title}</h3>
              <p className="text-gray-200 text-sm mt-2">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
