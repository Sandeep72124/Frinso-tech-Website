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
      {/* Header Section */}
      <motion.section
        className="min-h-screen bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1e3a8a] text-white flex flex-col items-center py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <motion.div className="max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-sky-300 mb-6 tracking-wide">
            Bulk Flowmeter
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/bulk_flowmeter.png"
              alt="Frinso Bulk Flowmeter"
              width={650}
              height={420}
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
            The <strong>Frinso Bulk Flowmeter</strong> is a high-precision,
            industrial-grade flow measurement solution engineered for large
            pipelines and water distribution systems. Designed for
            <strong> high-capacity and accurate flow monitoring</strong>, it is
            ideal for municipal, industrial, and irrigation applications that
            demand consistent and reliable performance.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Key Features */}
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
              "Accurate measurement for high-volume water and industrial flows.",
              "Available in electromagnetic, ultrasonic, and turbine types.",
              "IP68 waterproof construction for outdoor and underground use.",
              "Compatible with telemetry, SCADA, and IoT gateways.",
              "Low-pressure drop and maintenance-free design.",
              "Supports Modbus, 4–20mA, and pulse outputs.",
            ].map((f, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
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

      {/* Technical Specifications */}
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
              <li><strong>Type:</strong> Electromagnetic / Ultrasonic / Turbine</li>
              <li><strong>Pipe Sizes:</strong> DN50 to DN1200</li>
              <li><strong>Accuracy:</strong> ±0.5% of Reading</li>
              <li><strong>Output:</strong> 4–20mA, Pulse, RS485 (Modbus)</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Power Supply:</strong> 24V DC / Battery / Solar</li>
              <li><strong>Ingress Protection:</strong> IP68</li>
              <li><strong>Material:</strong> Carbon Steel / SS316 / PVC Options</li>
              <li><strong>Communication:</strong> LoRa / GSM / Ethernet</li>
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
              "Municipal and bulk water supply systems.",
              "Industrial process flow measurement.",
              "Irrigation and canal monitoring networks.",
              "Water treatment plant inlet/outlet metering.",
              "Smart city and utility flow monitoring dashboards.",
              "Integration with Frinso IoT Edge and SCADA systems.",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                📊 {a}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Contact / Footer */}
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
          href="/products"
          className="inline-block mt-6 bg-white text-sky-800 font-semibold rounded-full px-6 py-2 hover:bg-sky-200 transition"
        >
          ← Back to Products
        </Link>
      </motion.section>
    </div>
  );
}
