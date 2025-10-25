"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col">
      <section className="min-h-screen bg-gradient-to-r from-emerald-800 via-teal-700 to-sky-600 text-white py-16 px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }}>
          <h1 className="text-4xl font-bold text-white mb-6">Air Quality & Noise Monitoring Device</h1>
          <Image src="/docs/frinso-air-quality.jpg" alt="Air Quality Device" width={600} height={400} className="rounded-2xl shadow-xl mb-10 mx-auto" />
          <p className="text-gray-100 text-lg leading-relaxed">
            The <strong>Frinso Air Quality & Noise Monitoring Device</strong> provides 
            continuous real-time measurement of PM2.5, PM10, noise, temperature, and humidity 
            levels — built for Smart City and CPCB environmental compliance.
          </p>
        </motion.div>
      </section>

      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-200">
            {[
              "Measures PM2.5, PM10, PM100, noise, temperature, and humidity.",
              "IoT telemetry over 4G, LoRa, or Wi-Fi.",
              "Weatherproof IP65 outdoor enclosure.",
              "CPCB and Smart City compliant format.",
              "Cloud dashboard with live AQI data visualization.",
              "Easy calibration and modular design.",
            ].map((f, i) => (
              <motion.li key={i} className="bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition">
                🌿 {f}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Specifications */}
<section className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-50 text-black py-16 px-6 flex justify-center">
  <div className="max-w-6xl">
    <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">
      Technical Specifications
    </h2>
    <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-gray-800">
      <ul className="space-y-2">
        <li><strong>Parameters:</strong> PM2.5, PM10, Noise, Temp, Humidity</li>
        <li><strong>Communication:</strong> 4G / Wi-Fi / LoRa</li>
        <li><strong>Accuracy:</strong> ±2% for PM and noise</li>
        <li><strong>Data Interval:</strong> 1 minute</li>
      </ul>
      <ul className="space-y-2">
        <li><strong>Power:</strong> 12V DC / Solar Option</li>
        <li><strong>Enclosure:</strong> IP65 Outdoor Rated</li>
        <li><strong>Protocol:</strong> MQTT / Modbus / HTTP</li>
        <li><strong>Mounting:</strong> Pole / Wall Mount</li>
      </ul>
    </div>
  </div>
</section>

{/* Applications */}
<section className="w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-white py-16 px-6 flex justify-center">
  <div className="max-w-6xl w-full">
    <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">
      Applications
    </h2>
    <ul className="grid md:grid-cols-2 gap-6 bg-white text-gray-800  p-8 rounded-3xl shadow-lg border border-gray-200">
      {[
        "Smart city air and noise monitoring",
        "Industrial emissions and stack monitoring",
        "Construction site environmental management",
        "Traffic pollution measurement",
        "CPCB and CGWA compliance monitoring",
        "Indoor air quality (IAQ) systems",
      ].map((a, i) => (
        <motion.li key={i} className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition">
          🌱 {a}
        </motion.li>
      ))}
    </ul>
  </div>
</section>


      <section className="bg-gradient-to-r from-emerald-800 via-teal-700 to-sky-600 text-white py-12 text-center">
        <p className="text-sky-100 font-semibold">support@frinsotech.com | +91 9969800285</p>
        <Link href="/" className="inline-block mt-6 bg-white text-emerald-700 rounded-full px-6 py-2 hover:bg-emerald-200 transition">
          ← Back to Products
        </Link>
      </section>
    </div>
  );
}
