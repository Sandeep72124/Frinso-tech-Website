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
      <section className="min-h-screen bg-gradient-to-r from-blue-800 via-sky-700 to-cyan-500 text-white py-16 px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }}>
          <h1 className="text-4xl font-bold text-white mb-6">Smart Ultrasonic Level Sensor</h1>
          <Image src="/ultra.jpg" alt="Ultrasonic Sensor" width={600} height={400} className="rounded-2xl shadow-xl mb-10 mx-auto" />
          <p className="text-gray-100 text-lg leading-relaxed">
            The <strong>Frinso Ultrasonic Level Sensor</strong> enables precise monitoring 
            of water and fuel levels in tanks and sumps. Compact, battery-powered, and 
            IoT-ready, it provides reliable data for smart city and industrial applications.
          </p>
        </motion.div>
      </section>

      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-200">
            {[
              "Non-contact measurement up to 10 meters.",
              "Battery-powered with 5-year life.",
              "LoRa, GSM, and RS485 communication options.",
              "Weatherproof IP68 enclosure.",
              "Compatible with Frinso IoT cloud platform.",
              "Supports real-time alerts for overflow or low level.",
            ].map((f, i) => (
              <motion.li key={i} className="bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition">
                📶 {f}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Specifications */}
<section className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-50 text-black py-16 px-6 flex justify-center">
  <div className="max-w-6xl">
    <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
      Technical Specifications
    </h2>
    <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-gray-800">
      <ul className="space-y-2">
        <li><strong>Range:</strong> 0.25m – 10m</li>
        <li><strong>Accuracy:</strong> ±1%</li>
        <li><strong>Communication:</strong> LoRa / GSM / RS485</li>
        <li><strong>Battery Life:</strong> 5 Years</li>
      </ul>
      <ul className="space-y-2">
        <li><strong>Enclosure:</strong> IP68 Weatherproof</li>
        <li><strong>Protocol:</strong> Modbus RTU / MQTT</li>
        <li><strong>Operating Temp:</strong> -20°C to +70°C</li>
        <li><strong>Mounting:</strong> Threaded / Top Mount</li>
      </ul>
    </div>
  </div>
</section>

{/* Applications */}
<section className="w-full bg-gradient-to-r from-sky-50 via-blue-50 to-white py-16 px-6 flex justify-center">
  <div className="max-w-6xl w-full">
    <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
      Applications
    </h2>
    <ul className="grid md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200">
      {[
        "Water tank and sump level monitoring",
        "Flood detection and river level monitoring",
        "Fuel and chemical tank level control",
        "Industrial fluid management systems",
        "Smart city stormwater applications",
        "Groundwater recharge and borewell monitoring",
      ].map((a, i) => (
        <motion.li key={i} className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition">
          📡 {a}
        </motion.li>
      ))}
    </ul>
  </div>
</section>


      <section className="bg-gradient-to-r from-blue-800 via-sky-700 to-cyan-500 text-white py-12 text-center">
        <p className="text-sky-100 font-semibold">support@frinsotech.com | +91 9969800285</p>
        <Link href="/" className="inline-block mt-6 bg-white text-sky-700 rounded-full px-6 py-2 hover:bg-sky-200 transition">
          ← Back to Products
        </Link>
      </section>
    </div>
  );
}
