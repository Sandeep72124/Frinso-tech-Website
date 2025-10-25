"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F10BatteryPage() {
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
            F10 Battery-Based IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A self-powered IoT gateway built for <span className="font-semibold">remote data logging</span> and 
            <span className="font-semibold"> telemetry applications</span> — designed for locations without 
            continuous power supply, ensuring long-term field operation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/f10-device.jpg"
            alt="F10 Battery IoT Gateway"
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
              <li>🔋 Long-lasting lithium battery (up to 5 years of operation).</li>
              <li>📶 Supports 2G / 4G / NB-IoT / LoRa communication modes.</li>
              <li>📊 Internal data logging with intelligent sleep-wake scheduling.</li>
              <li>💧 Ideal for remote flowmeters, pressure sensors, and tank monitoring.</li>
              <li>📦 Compact IP68-rated enclosure for harsh field conditions.</li>
              <li>🧠 AI-optimized telemetry intervals for energy conservation.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/f10-dashboard.jpg"
              alt="Battery IoT Dashboard"
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
                  <td className="p-4 font-medium text-gray-700">Power Source</td>
                  <td className="p-4">Inbuilt Li-SOCl₂ Battery (3.6V / 19Ah)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Battery Life</td>
                  <td className="p-4">Up to 5 years (with 1 data push/hour)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Communication</td>
                  <td className="p-4">2G / 4G / NB-IoT / LoRa / BLE</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Protocol</td>
                  <td className="p-4">MODBUS, MQTT, HTTP</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Data Logging</td>
                  <td className="p-4">Local EEPROM / Flash Storage (30,000+ records)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Enclosure Rating</td>
                  <td className="p-4">IP68 – Dustproof and Waterproof</td>
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
          Designed for Remote & Off-Grid Monitoring
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          The F10 Battery-Based IoT Gateway is ideal for remote water flow monitoring, tank level 
          management, and isolated field stations — enabling real-time visibility even in 
          non-powered environments.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/f10-field.jpg"
            alt="F10 Field Deployment"
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
          Bring IoT to Remote Locations with Battery Power
        </motion.h3>
        <p className="text-white/90 mb-6">
          Deploy Frinso’s F10 Battery Gateway for reliable, long-term telemetry without 
          external power — perfect for smart water and energy infrastructure.
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
