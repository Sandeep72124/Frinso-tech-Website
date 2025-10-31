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
            PLC / SCADA Panel
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/rtu.png"
              alt="Frinso PLC SCADA Panel"
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
            The <strong>Frinso PLC/SCADA Panel</strong> is an industrial-grade
            automation and control system designed for high reliability in
            water, energy, and industrial process automation. Integrating
            <strong> PLC hardware</strong> and <strong>SCADA software</strong>,
            it enables centralized process control, real-time data acquisition,
            and efficient remote operations.
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
              "Integrated PLC and SCADA-based control architecture.",
              "Custom-engineered panels for water, energy, and industrial processes.",
              "Supports Siemens, Allen-Bradley, Delta, and Schneider PLCs.",
              "Real-time data logging, remote control, and alarm management.",
              "Redundant design for high reliability and 24×7 operation.",
              "Seamless connectivity with IoT, EMS, and cloud dashboards.",
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
              <li><strong>Controller:</strong> PLC (Siemens/Delta/Allen-Bradley)</li>
              <li><strong>Protocols:</strong> MODBUS RTU/TCP, Ethernet/IP, MQTT</li>
              <li><strong>Inputs/Outputs:</strong> Digital, Analog, Relay configurable</li>
              <li><strong>Display:</strong> 7”–15” HMI with SCADA interface</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Power Supply:</strong> 24V DC / 230V AC</li>
              <li><strong>Enclosure:</strong> IP54 / IP65 Industrial Panel</li>
              <li><strong>Connectivity:</strong> Ethernet, 4G, RS485, Wi-Fi</li>
              <li><strong>Panel Type:</strong> Wall/DIN/Outdoor Floor Mounted</li>
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
              "Water Treatment and Sewage Treatment Plants (WTP/STP).",
              "Pumping and Booster Station Automation.",
              "Industrial and Manufacturing Process Control.",
              "Smart Grid and Energy Distribution Systems.",
              "HVAC, Building Automation, and Utility Control.",
              "Municipal Infrastructure Monitoring and SCADA Integration.",
            ].map((a, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                🏭 {a}
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
