"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F1CGWAPage() {
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
            F1: CGWA IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A specialized IoT gateway designed for <span className="font-semibold">Central Ground Water Authority (CGWA)</span> compliance — 
            enabling real-time monitoring, data logging, and automatic reporting of groundwater extraction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/f1-device.jpg"
            alt="F1 CGWA IoT Gateway"
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
              <li>✅ CGWA-compliant automatic groundwater monitoring and data push.</li>
              <li>📡 4G / NB-IoT / GSM connectivity for remote telemetry.</li>
              <li>💧 Compatible with Ultrasonic and Electromagnetic Flowmeters.</li>
              <li>⚙️ Real-time borewell flow, pressure, and level data visualization.</li>
              <li>🌐 Secure MQTT and HTTPS data transmission to CGWA portal.</li>
              <li>🧠 Integrated AI-based anomaly detection for illegal extraction alerts.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/cgwa-dashboard.jpg"
              alt="CGWA Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
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
                  <td className="p-4 font-medium text-gray-700">Communication</td>
                  <td className="p-4">RS485 / RS232 / 4G LTE / NB-IoT / Ethernet</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Protocol</td>
                  <td className="p-4">MODBUS RTU / MQTT / HTTPS (CGWA API)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Flowmeter Compatibility</td>
                  <td className="p-4">Electromagnetic, Ultrasonic, or Mechanical Pulse</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Power Supply</td>
                  <td className="p-4">12–36V DC with Surge Protection</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Data Backup</td>
                  <td className="p-4">Local SD Storage up to 1 year</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Operating Temperature</td>
                  <td className="p-4">-20°C to +70°C (IP65 Enclosure)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Ideal for CGWA & Groundwater Compliance Projects
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Deployed in industrial and commercial borewells, this IoT gateway ensures 
          real-time compliance with CGWA regulations through automated data transmission 
          and centralized monitoring dashboards.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/cgwa-project.jpg"
            alt="CGWA Project Overview"
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
          Ensure CGWA Compliance with Smart IoT
        </motion.h3>
        <p className="text-white/90 mb-6">
          Connect your groundwater systems to Frinso’s IoT platform and achieve 
          real-time transparency, reporting, and compliance.
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
