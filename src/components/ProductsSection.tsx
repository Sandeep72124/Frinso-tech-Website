"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Frinso V1 IoT Edge Device",
      desc: "Next-gen Industry 4.0 gateway supporting 5G, LoRa, NB-IoT, Satellite. Connects any sensor, meter, or valve with real-time analytics.",
      img: "/product-edge.png",
    },
    {
      title: "Frinso.io Dashboard",
      desc: "Cloud and on-prem SCADA platform for real-time monitoring, analytics, and regulatory compliance reporting.",
      img: "/product-dashboard.png",
    },
    {
      title: "Smart Prepaid Water Meters",
      desc: "JJM & AMRUT 2.0 ready smart water metering with GSM/LoRa communication and prepaid billing integration.",
      img: "/product-meter.jpg",
    },
    {
      title: "Smart DG Monitoring System",
      desc: "End-to-end diesel generator monitoring with remote diagnostics, fuel theft detection, and smart reporting.",
      img: "/product-dg.png",
    },
    {
      title: "Smart HVAC Automation",
      desc: "AI-driven HVAC energy optimization and performance analytics for large facilities and hospitals.",
      img: "/product-hvac.png",
    },
    {
      title: "Smart Solar Monitoring",
      desc: "Comprehensive IoT-based solar plant management with fault detection and energy efficiency tracking.",
      img: "/product-solar.png",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 3) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 3 < 0 ? products.length - 3 : prev - 3
    );
  };

  // Get visible products (3 at a time)
  const visibleProducts = [
    products[index % products.length],
    products[(index + 1) % products.length],
    products[(index + 2) % products.length],
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-sky-300 mb-2">
          Our Key Products
        </h2>
        <p className="text-gray-300">
          Discover Frinso’s powerful suite of IoT solutions transforming water, energy, and infrastructure.
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center px-8">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 lg:left-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition z-20"
        >
          <ChevronLeft className="w-6 h-6 text-sky-300" />
        </button>

        {/* Product Cards */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 w-full max-w-7xl justify-center"
        >
          {visibleProducts.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg transition transform hover:-translate-y-2"
            >
              {/* Water fill animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-gradient-to-t from-sky-500/80 to-sky-300/50 rounded-xl transition-all duration-700 ease-in-out group-hover:bottom-0"></div>
              </div>

              {/* Product image with zoom on hover */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Product content */}
              <div className="relative z-20 p-6 text-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{p.desc}</p>
              </div>

              {/* Subtle glass overlay */}
              <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 lg:right-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition z-20"
        >
          <ChevronRight className="w-6 h-6 text-sky-300" />
        </button>
      </div>
    </section>
  );
}
