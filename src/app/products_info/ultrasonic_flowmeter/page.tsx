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
            Ultrasonic Flowmeter
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/ultra.jpg"
              alt="Frinso Ultrasonic Flowmeter"
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
            The <strong>Frinso Ultrasonic Flowmeter</strong> is a
            <strong> non-intrusive and high-accuracy</strong> flow measurement
            device ideal for large-diameter pipes. Using advanced ultrasonic
            time-of-flight technology, it measures fluid velocity and flow rate
            without cutting or interrupting the pipeline, ensuring zero pressure
            loss and maintenance-free operation.
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
              "Clamp-on design — no pipe cutting or process interruption.",
              "High-accuracy measurement using transit-time ultrasonic principle.",
              "Supports a wide range of pipe diameters (DN25 to DN2000).",
              "Ideal for conductive and non-conductive fluids (water, oil, chemicals).",
              "Digital outputs with Modbus, 4–20mA, and pulse interfaces.",
              "Compatible with Frinso IoT Edge and SCADA systems.",
            ].map((f, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🌊 {f}
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
              <li><strong>Type:</strong> Clamp-on Ultrasonic Flowmeter</li>
              <li><strong>Pipe Sizes:</strong> DN25 to DN2000</li>
              <li><strong>Accuracy:</strong> ±1% of reading</li>
              <li><strong>Output:</strong> 4–20mA / RS485 (Modbus) / Pulse</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Power Supply:</strong> 24V DC / Battery / Solar</li>
              <li><strong>Display:</strong> LCD with flow, velocity, totalizer</li>
              <li><strong>Ingress Protection:</strong> IP67 / IP68</li>
              <li><strong>Communication:</strong> LoRa / GSM / Wi-Fi / Ethernet</li>
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
              "Municipal water supply and distribution monitoring.",
              "Industrial flow measurement for liquids and chemicals.",
              "HVAC and chiller plant flow monitoring.",
              "Smart irrigation and water resource management.",
              "Temporary flow measurement and verification studies.",
              "Integration with SCADA, EMS, and Frinso Cloud dashboards.",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                💧 {a}
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
