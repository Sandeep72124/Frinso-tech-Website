"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  // Base motion variants
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

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* HEADER SECTION */}
      <motion.section
        className="min-h-screen bg-gradient-to-r from-emerald-800 via-teal-700 to-sky-600 text-white flex flex-col items-center py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-5xl text-center"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl font-bold text-sky-100 mb-6 tracking-wide"
            variants={fadeUp}
          >
            Air Quality & Noise Monitoring Device
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1.2 }}
            className="overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/air.png"
                alt="Air Quality Device"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl mb-10 mx-auto"
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-100 text-lg leading-relaxed mb-8"
            variants={fadeUp}
          >
            The <strong>Frinso Air Quality & Noise Monitoring Device</strong>{" "}
            provides continuous real-time measurement of PM2.5, PM10, noise,
            temperature, and humidity levels — built for Smart City and CPCB
            environmental compliance.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION */}
      <motion.section
        className="w-full bg-white text-black py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div className="max-w-6xl w-full">
          <motion.h2
            className="text-3xl font-semibold text-emerald-700 mb-6 text-center"
            variants={fadeLeft}
          >
            Key Features
          </motion.h2>

          <motion.ul
            className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            {[
              "Measures PM2.5, PM10, PM100, noise, temperature, and humidity.",
              "IoT telemetry over 4G, LoRa, or Wi-Fi.",
              "Weatherproof IP65 outdoor enclosure.",
              "CPCB and Smart City compliant format.",
              "Cloud dashboard with live AQI data visualization.",
              "Easy calibration and modular design.",
            ].map((f, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🌿 {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* TECHNICAL SPECIFICATIONS */}
      <motion.section
        className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-50 text-black py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div className="max-w-6xl" variants={fadeRight}>
          <motion.h2
            className="text-3xl font-semibold text-emerald-700 mb-6 text-center"
            variants={fadeUp}
          >
            Technical Specifications
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-gray-800"
            variants={fadeUp}
          >
            <ul className="space-y-2">
              <li>
                <strong>Parameters:</strong> PM2.5, PM10, Noise, Temp, Humidity
              </li>
              <li>
                <strong>Communication:</strong> 4G / Wi-Fi / LoRa
              </li>
              <li>
                <strong>Accuracy:</strong> ±2% for PM and noise
              </li>
              <li>
                <strong>Data Interval:</strong> 1 minute
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <strong>Power:</strong> 12V DC / Solar Option
              </li>
              <li>
                <strong>Enclosure:</strong> IP65 Outdoor Rated
              </li>
              <li>
                <strong>Protocol:</strong> MQTT / Modbus / HTTP
              </li>
              <li>
                <strong>Mounting:</strong> Pole / Wall Mount
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* APPLICATIONS SECTION */}
      <motion.section
        className="w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-white py-16 px-6 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div className="max-w-6xl w-full" variants={fadeLeft}>
          <motion.h2
            className="text-3xl font-semibold text-emerald-700 mb-6 text-center"
            variants={fadeUp}
          >
            Applications
          </motion.h2>

          <motion.ul
            className="grid md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200"
            variants={fadeUp}
          >
            {[
              "Smart city air and noise monitoring",
              "Industrial emissions and stack monitoring",
              "Construction site environmental management",
              "Traffic pollution measurement",
              "CPCB and CGWA compliance monitoring",
              "Indoor air quality (IAQ) systems",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🌱 {a}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        className="bg-gradient-to-r from-emerald-800 via-teal-700 to-sky-600 text-white py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-sky-100 font-semibold"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          support@frinsotech.com | +91 9969800285
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-block mt-6 bg-white text-emerald-700 font-semibold rounded-full px-6 py-2 hover:bg-emerald-200 transition"
          >
            ← Back to Products
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
