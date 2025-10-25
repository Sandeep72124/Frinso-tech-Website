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
      {/* Section 1: Header */}
      <section className="min-h-screen bg-gradient-to-r from-sky-900 via-sky-800 to-sky-700 text-white flex flex-col items-center py-16 px-6 overflow-hidden">
        <motion.div
          className="max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
            Smart HVAC Controller
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/hvac.png"
              alt="Smart HVAC Controller"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl mb-10 mx-auto border border-white/20 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.p
            className="text-gray-100 text-lg leading-relaxed mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            The <strong>Frinso Smart HVAC Controller</strong> is a next-generation
            IoT-enabled device for intelligent climate control. It enhances energy
            efficiency, enables remote control, and delivers actionable analytics
            for HVAC systems across smart buildings and facilities.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 2: Key Features */}
      <section className="w-full bg-white text-black py-16 px-6 flex justify-center">
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Key Features
          </h2>
          <motion.ul
            className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            {[
              "Supports Split, Cassette, VRV, and AHU systems.",
              "Real-time monitoring of temperature, humidity, and energy consumption.",
              "Remote ON/OFF control and set-point temperature adjustments.",
              "Supports 4G LTE, Wi-Fi, LoRa, and RS485 Modbus communication.",
              "AI-powered optimization for energy savings and comfort control.",
              "Fault detection and intelligent alert notifications.",
              "Integrates seamlessly with Frinso Edge, BMS, and SCADA.",
            ].map((feature, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg hover:-translate-y-1 transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="text-sky-700 font-semibold">•</span> {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* Section 3: Technical Specifications */}
      <section className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-50 text-black py-16 px-6 flex justify-center">
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Technical Specifications
          </h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8 text-gray-800 bg-white p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            <ul className="space-y-2">
              <li><strong>Model:</strong> Frinso Smart AC Controller V1.0</li>
              <li><strong>Input Voltage:</strong> 12V DC / 1A</li>
              <li><strong>Connectivity:</strong> 4G LTE / Wi-Fi / LoRa / RS485</li>
              <li><strong>Protocols:</strong> MQTT, HTTP, Modbus</li>
              <li><strong>Outputs:</strong> 2 × Relay (5A @ 230V AC)</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Inputs:</strong> Temperature (NTC), Humidity, Voltage, Current</li>
              <li><strong>Enclosure:</strong> ABS Industrial Grade, IP65</li>
              <li><strong>Operating Temp:</strong> -10°C to +60°C</li>
              <li><strong>Dimensions:</strong> 120 × 85 × 45 mm</li>
              <li><strong>Mounting:</strong> Wall / Panel mount</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 4: Applications */}
      <section className="w-full bg-gradient-to-r from-sky-50 via-sky-100 to-white py-16 px-6 flex justify-center">
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-sky-700 mb-6 text-center">
            Applications
          </h2>
          <motion.ul
            className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            {[
              "Corporate offices and smart commercial buildings",
              "Hospitals and healthcare facilities",
              "Hotels, malls, and retail environments",
              "Educational institutions and laboratories",
              "Data centers and server rooms",
            ].map((app, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg border text-black hover:-translate-y-1 transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                ⚙️ {app}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* Section 5: Contact */}
      <section className="w-full bg-gradient-to-r from-sky-800 via-sky-700 to-sky-900 text-white py-16 px-6 flex justify-center">
        <motion.div
          className="text-center max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-100 mb-4">
            For product integration, installation, or technical support:
          </p>
          <p className="text-sky-300 font-semibold text-lg">
            support@frinsotech.com | +91 9969800285
          </p>

          <Link
            href="/"
            className="inline-block mt-10 bg-white text-sky-700 font-semibold rounded-full px-6 py-2 hover:bg-sky-200 transition"
          >
            ← Back to Products
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
