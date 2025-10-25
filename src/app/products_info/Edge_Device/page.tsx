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
      {/* Header */}
      <motion.section
        className="min-h-screen bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1e3a8a] text-white flex flex-col items-center py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-sky-300 mb-6 tracking-wide">
            Frinso Industry 4.0 IoT Edge Device
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/product-edge.png"
              alt="Frinso IoT Edge Device"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl mb-10 mx-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.p
            className="text-gray-200 text-lg leading-relaxed mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            The <strong>Frinso IoT Edge Device</strong> connects any meter or sensor
            to the cloud. Designed for real-time data processing, analytics, and
            automation in Industry 4.0 environments.
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
              "Supports Modbus RTU/TCP, MQTT, HTTP protocols.",
              "Integrated 4G LTE, Wi-Fi, and Ethernet connectivity.",
              "Local storage and offline logging.",
              "Multiple analog/digital I/Os.",
              "Rugged IP65 industrial enclosure.",
              "Cloud dashboard integration.",
            ].map((f, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                ⚙️ {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Specs */}
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
              <li><strong>Processor:</strong> ARM Cortex-M4 / ESP32</li>
              <li><strong>Connectivity:</strong> 4G LTE, Wi-Fi, LoRa, RS485</li>
              <li><strong>Storage:</strong> 8GB Flash / SD Card</li>
              <li><strong>Power:</strong> 12V DC / 1A</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Enclosure:</strong> ABS IP65</li>
              <li><strong>Operating Temp:</strong> -10°C to +70°C</li>
              <li><strong>Protocols:</strong> MQTT / Modbus / HTTP</li>
              <li><strong>Mounting:</strong> Wall / DIN Rail</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Applications */}
      <motion.section
        className="w-full bg-gradient-to-r from-sky-50 via-sky-100 to-white py-16 px-6 flex justify-center"
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
          <ul className="grid md:grid-cols-2 gap-6 bg-white text-gray-700 p-8 rounded-3xl shadow-lg border border-gray-200">
            {[
              "Industrial IoT data logging",
              "Smart factory automation",
              "Energy and water monitoring gateways",
              "SCADA / EMS / BMS systems",
              "Remote pump & valve control",
              "Renewable monitoring units",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🔹 {a}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1e3a8a] text-white py-12 text-center"
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

 