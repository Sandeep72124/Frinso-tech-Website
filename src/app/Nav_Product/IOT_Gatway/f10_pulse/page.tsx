"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F10PulsePage() {
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
            F10 Pulse + Battery-Based IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A compact, battery-powered IoT gateway with <span className="font-semibold">pulse input compatibility</span>, 
            designed for mechanical water meters and low-power AMR (Automatic Meter Reading) systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/f10-pulse-device.jpg"
            alt="F10 Pulse IoT Gateway"
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
              <li>💧 Compatible with mechanical water meters with reed or open-drain pulse output.</li>
              <li>🔋 Battery life up to 5 years (1 pulse per second, hourly transmission).</li>
              <li>📶 2G / 4G / NB-IoT communication with secure MQTT data push.</li>
              <li>📊 Real-time consumption tracking with cloud dashboard integration.</li>
              <li>🧠 AI-based pulse-to-volume conversion and tamper detection.</li>
              <li>🌦️ IP68 waterproof enclosure for field and underground installations.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/f10-pulse-dashboard.jpg"
              alt="F10 Pulse IoT Dashboard"
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
                  <td className="p-4 font-medium text-gray-700">Pulse Input</td>
                  <td className="p-4">1 / 2 channels – dry contact, open collector, or reed switch</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Communication</td>
                  <td className="p-4">2G / 4G / NB-IoT / LoRa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Battery Type</td>
                  <td className="p-4">Li-SOCl₂ 3.6V / 19Ah (replaceable module)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Battery Life</td>
                  <td className="p-4">3–5 years (based on data push frequency)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Data Logging</td>
                  <td className="p-4">Local EEPROM – 25,000+ readings</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Protection Rating</td>
                  <td className="p-4">IP68 – waterproof and dustproof</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Designed for Water Utilities & Smart Metering
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          The F10 Pulse Gateway simplifies mechanical meter digitization — allowing water boards, 
          industries, and smart city operators to monitor consumption remotely with full analytics integration.
        </p>
        <div className="flex justify-center">
          <Image
            src="/f10-pulse-usecase.jpg"
            alt="F10 Pulse Use Case"
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
          Make Your Water Meters Smart with F10 Pulse
        </motion.h3>
        <p className="text-white/90 mb-6">
          Connect any mechanical or pulse-based water meter to the cloud effortlessly — 
          with long-life battery operation and zero maintenance.
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
