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
      title: "Smart Prepaid Water Meters",
      desc: "JJM & AMRUT 2.0 ready smart water metering with GSM/LoRa communication and prepaid billing integration.",
      img: "/prepared_watermeter.png",
    },
    {
      title: "Smart HVAC Automation",
      desc: "AI-driven HVAC energy optimization and performance analytics for large facilities and hospitals.",
      img: "/hvac.png",
    },
    {
      title: "Smart Solar Monitoring",
      desc: "Comprehensive IoT-based solar plant management with fault detection and energy efficiency tracking.",
      img: "/solar.png",
    },
    {
      title: "Smart Ultrasonic IoT Level Sensor",
      desc: "An intelligent ultrasonic level monitoring device designed for real-time water tank and sump management.",
      img: "/ultra.jpg",
    },
    {
      title: "Smart Electromagnetic Flow Meter",
      desc: "The Smart Electromagnetic Flow Meter by Frinso Tech is an advanced precision instrument for monitoring water flow in pipelines with high accuracy.",
      img: "/electro.png",
    },
    {
      title: "IoT-Based Flood Monitoring System",
      desc: "The IoT-Based Flood Monitoring System by Frinso Tech provides real-time flood detection and water level monitoring for smart cities, urban drainage networks, and critical infrastructure.",
      img: "/flood.jpg",
    },
    {
      title: "Frinso IoT Gateway & Controller",
      desc: "The Frinso IoT Gateway & Controller is a rugged industrial-grade device designed to seamlessly connect field instruments, sensors, and actuators to the cloud.",
      img: "/iot-gateway-controller.png",
    },
    {
      title: "Frinso Multi-Parameter Water Quality Sensor",
      desc: "The Frinso Multi-Parameter Water Quality Sensor is an advanced probe designed for real-time monitoring of key water quality parameters such as pH, dissolved oxygen (DO), temperature, and conductivity.",
      img: "/water-quality-sensor.png",
    },
    {
      title: "Frinso LoRaWAN Gateway",
      desc: "The Frinso LoRaWAN Gateway provides seamless long-range, low-power connectivity for industrial IoT applications.",
      img: "/lora.png",
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
    setIndex((prev) => (prev - 3 < 0 ? products.length - 3 : prev - 3));
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
          Discover Frinso’s powerful suite of IoT solutions transforming water,
          energy, and infrastructure.
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
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl transition-all duration-700"
            >
              {/* Water Fill Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-gradient-to-t from-sky-500/70 to-sky-300/40 transition-all duration-700 ease-in-out group-hover:bottom-0"></div>
              </div>

              {/* Image */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 text-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-sky-400/40 transition-all duration-700"></div>
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
