"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Smart Water Analytics – Himachal Pradesh",
      desc: "Real-time water quality and flow analytics reduced manual sampling by 90%, improving transparency in rural water schemes.",
      img: "/case-studies/himachal.jpg",
      impact: "90% reduction in manual reporting",
    },
    {
      title: "DLF Corporate Smart Water Monitoring",
      desc: "IoT water metering across 20+ buildings enabled leak detection and predictive maintenance, saving 15% water annually.",
      img: "/case-studies/dlf.jpg",
      impact: "15% annual water savings",
    },
    {
      title: "AMRUT 2.0 – Smart City Prepaid Meters",
      desc: "Automated water billing and flow monitoring for 30,000+ consumers with instant recharge and app-based control.",
      img: "/case-studies/amrut.jpg",
      impact: "Automated consumer billing system",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <motion.img
          src="/case-bg.jpg"
          alt="Case Studies Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0a2540]/80"></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Case <span className="text-sky-400">Studies</span>
        </motion.h1>
        <p className="text-white/90 mt-4 max-w-2xl relative z-10">
          Real-world impact of Frinso’s IoT innovation across India.
        </p>
      </section>

      {/* Case Studies */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            className="relative bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-sky-400/30 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-300 mb-2">{c.title}</h3>
              <p className="text-gray-200 text-sm mb-3">{c.desc}</p>
              <div className="text-sm text-sky-400 font-medium">
                🌟 {c.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
