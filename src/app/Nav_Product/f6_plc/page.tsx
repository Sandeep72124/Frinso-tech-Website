"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F6PLCPage() {
  return (
    <>
    <Navbar/>
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-sky-700">
            F6 – PLC IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A robust <span className="font-semibold">industrial IoT gateway</span> 
            engineered for Programmable Logic Controller (PLC) integration — enabling 
            seamless real-time SCADA data exchange and analytics through secure cloud platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/f6-device.jpg"
            alt="F6 PLC IoT Gateway"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🔌 Direct connectivity to Siemens, Allen Bradley, and Delta PLCs.</li>
              <li>🌐 Supports MODBUS RTU/TCP, OPC UA, and MQTT protocols.</li>
              <li>📊 Edge computing support for local logic and pre-processing.</li>
              <li>🧠 Integrates seamlessly with Frinso SCADA and cloud dashboards.</li>
              <li>📱 Web-based configuration and real-time device management.</li>
              <li>⚙️ Ideal for Industrial Automation, Water Plants, and OEM systems.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/plc-dashboard.jpg"
              alt="PLC IoT Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-sky-700 mb-8"
          >
            Technical Specifications
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-lg">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Processor</td>
                  <td className="p-4">ARM Cortex-A53 Industrial Grade SoC</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Communication Ports</td>
                  <td className="p-4">RS485 / RS232 / Ethernet / USB / 4G LTE</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Protocol Support</td>
                  <td className="p-4">MODBUS RTU/TCP, MQTT, OPC UA, HTTPs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Memory & Storage</td>
                  <td className="p-4">1GB DDR + 8GB Flash / SD Card Support</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Power Supply</td>
                  <td className="p-4">12–36V DC with Reverse Polarity Protection</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Operating Temperature</td>
                  <td className="p-4">-20°C to +75°C (IP65)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Perfect for Industrial & Utility Automation
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          The F6 PLC IoT Gateway enables remote monitoring and control for PLC-based automation systems, 
          transforming industrial plants into smart, connected ecosystems.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/plc-industrial.jpg"
            alt="PLC Industrial Application"
            width={800}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Connect Your PLC Systems to the Cloud
        </motion.h3>
        <p className="text-white/90 mb-6">
          Frinso’s F6 Gateway bridges your industrial PLCs and real-time analytics dashboards — securely and efficiently.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white text-sky-700 px-6 py-3 font-medium hover:bg-sky-100 hover:scale-105 transition"
        >
          Request Demo
        </Link>
      </section>
    </main>
    <Footer/>
    </>
  );
}
