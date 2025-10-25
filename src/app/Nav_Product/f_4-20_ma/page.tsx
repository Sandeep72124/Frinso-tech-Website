"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F1_420_Page() {
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
            F1: 4–20 mA IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Industrial-grade IoT gateway for <span className="font-semibold">analog 4–20 mA signal acquisition</span>,
            enabling seamless integration with sensors, transmitters, and SCADA dashboards for real-time monitoring.
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
            alt="F1 4-20mA IoT Gateway"
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
              <li>⚙️ Supports up to 8 isolated 4–20 mA input channels.</li>
              <li>🌐 MODBUS RTU/TCP & MQTT-based cloud communication.</li>
              <li>🔌 Compatible with pressure, flow, and temperature transmitters.</li>
              <li>📊 Real-time data logging with configurable sampling interval.</li>
              <li>🧠 AI-based anomaly detection and trend prediction.</li>
              <li>📱 Remote calibration, diagnostics, and over-the-air firmware updates.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/420-dashboard.jpg"
              alt="4-20mA Dashboard"
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
                  <td className="p-4 font-medium text-gray-700">Input Channels</td>
                  <td className="p-4">4 / 8 isolated 4–20 mA analog inputs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Signal Resolution</td>
                  <td className="p-4">16-bit ADC for high-accuracy measurement</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Communication</td>
                  <td className="p-4">RS485 (MODBUS RTU), Ethernet, 4G/LTE, MQTT</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Data Storage</td>
                  <td className="p-4">Local flash up to 1GB with auto sync</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Power Supply</td>
                  <td className="p-4">9–36V DC, surge-protected</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Enclosure</td>
                  <td className="p-4">IP65, Polycarbonate Industrial Grade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Ideal for Industrial Process Monitoring
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          The F1 4–20 mA IoT Gateway is widely used for remote pressure, flow, 
          and energy monitoring in industrial automation, water treatment, and 
          energy management systems.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/420-usecase.jpg"
            alt="4-20mA Industrial Usecase"
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
          Connect Your Analog Sensors to the Cloud
        </motion.h3>
        <p className="text-white/90 mb-6">
          Deploy Frinso’s 4–20 mA gateway to modernize your analog infrastructure with real-time IoT analytics.
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
