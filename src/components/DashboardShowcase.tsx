"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DashboardShowcase() {
  const dashboards = [
    {
      title: "Smart Water Management",
      desc: "Real-time water flow, pressure, and quality analytics for efficient city networks.",
      img: "/dashboards/water.jpg",
    },
    {
      title: "Smart Energy Management",
      desc: "AI-powered DG, grid, and solar energy monitoring with predictive insights.",
      img: "/dashboards/energy.jpg",
    },
    {
      title: "Smart HVAC Monitoring",
      desc: "Centralized HVAC automation with real-time performance optimization.",
      img: "/dashboards/hvac.jpg",
    },
    {
      title: "Smart DG Monitoring",
      desc: "Comprehensive DG fuel tracking, runtime reports, and maintenance alerts.",
      img: "/dashboards/dg.jpg",
    },
    {
      title: "Smart Solar Dashboard",
      desc: "Solar production, battery analytics, and energy savings visualization.",
      img: "/dashboards/solar.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-scroll (Right → Left)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % dashboards.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + dashboards.length) % dashboards.length);

  const getSlide = (offset: number) => {
    const newIndex = (index + offset + dashboards.length) % dashboards.length;
    return dashboards[newIndex];
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f8fbff] via-[#e8f4ff] to-[#ffffff] overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-700">Frinso IoT Dashboards</h2>
        <p className="text-gray-500 mt-3">
          Explore our live IoT monitoring dashboards designed for smart cities, utilities, and industries.
        </p>
      </div>

      <div className="relative flex justify-center items-center gap-4 max-w-9xl mx-auto px-6">
        {/* Left blurred dashboard */}
        <motion.div
          key={"left"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[30%] scale-90 blur-sm opacity-60 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={getSlide(-1).img}
            alt={getSlide(-1).title}
            className="w-full h-[380px] object-cover"
          />
        </motion.div>

        {/* Center active dashboard */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-[70%] rounded-3xl overflow-hidden shadow-2xl border border-sky-100 bg-white"
        >
          <img
            src={getSlide(0).img}
            alt={getSlide(0).title}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
            <h3 className="text-2xl font-semibold text-white mb-2">{getSlide(0).title}</h3>
            <p className="text-gray-200 text-sm">{getSlide(0).desc}</p>
          </div>
        </motion.div>

        {/* Right blurred dashboard */}
        <motion.div
          key={"right"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[30%] scale-90 blur-sm opacity-60 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={getSlide(1).img}
            alt={getSlide(1).title}
            className="w-full h-[380px] object-cover"
          />
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 text-sky-700 p-3 rounded-full shadow hover:bg-white transition z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 text-sky-700 p-3 rounded-full shadow hover:bg-white transition z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
