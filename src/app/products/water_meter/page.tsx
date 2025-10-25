"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <motion.section
        className="min-h-screen bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-500 text-white flex flex-col items-center py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Smart Prepaid Water Meter
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/prepared_watermeter.png"
              alt="Smart Water Meter"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl mb-10 mx-auto border border-white/20 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.p
            className="text-gray-100 text-lg leading-relaxed mb-8"
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            The <strong>Frinso Smart Prepaid Water Meter</strong> enables 
            real-time billing, leakage detection, and consumption tracking 
            for JJM and AMRUT 2.0 water projects.
          </motion.p>
        </motion.div>
      </motion.section>

            {/* Features */}
      <motion.section
        className="w-full bg-white text-black py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-6xl w-full">
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Key Features
          </h2>
          <motion.ul
            className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            {[
              "Highly accurate ±0.5% measurement range.",
              "4–20mA, RS485 (Modbus), and pulse outputs.",
              "Non-intrusive measurement for clean or wastewater.",
              "CPCB and CGWA telemetry ready.",
              "LCD display with flow totalizer.",
              "IP68 sensor with IP65 transmitter.",
            ].map((f, i) => (
              <motion.li
                key={i}
                className="bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                💧 {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Technical Specs */}
      <motion.section
        className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-50 text-black py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-6xl" variants={fadeUp}>
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-gray-800">
            <ul className="space-y-2">
              <li><strong>Pipe Size:</strong> DN15 – DN600</li>
              <li><strong>Accuracy:</strong> ±0.5%</li>
              <li><strong>Output:</strong> 4–20mA / RS485 / Pulse</li>
              <li><strong>Display:</strong> LCD with totalizer</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Power:</strong> 24V DC / 230V AC</li>
              <li><strong>Protection:</strong> IP68 Sensor, IP65 Transmitter</li>
              <li><strong>Material:</strong> SS316L / PTFE</li>
              <li><strong>Protocol:</strong> Modbus RTU / Telemetry</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Applications */}
      <motion.section
        className="w-full bg-gradient-to-r from-sky-50 via-blue-50 to-white py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-6xl w-full" variants={fadeUp}>
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Applications
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200">
            {[
              "Water & wastewater plants",
              "Municipal flow monitoring",
              "Irrigation systems",
              "Industrial effluent monitoring",
              "Smart City telemetry networks",
              "ETP/STP automation projects",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🌊 {a}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="bg-gradient-to-r from-sky-900 via-blue-800 to-gray-700 text-white py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <p className="text-sky-300 font-semibold">
          support@frinsotech.com | +91 9969800285
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-white text-sky-800 font-semibold rounded-full px-6 py-2 hover:bg-sky-200 transition"
        >
          ← Back to Products
        </Link>
      </motion.section>
    </div>
  );
}
