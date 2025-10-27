"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MeterBatteryPage() {
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
            Battery-Based Ultrasonic Water Meter
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Compact, battery-powered{" "}
            <span className="font-semibold">ultrasonic smart water meter</span> for precise 
            volumetric measurement and real-time monitoring — designed for{" "}
            <span className="font-semibold">residential, commercial, and Smart City networks.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/battery-ultra-meter.jpg"
            alt="Battery-Based Ultrasonic Water Meter"
            width={700}
            height={450}
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
              <li>🔋 Long-life lithium battery (up to 10–12 years).</li>
              <li>💧 Ultrasonic technology for high accuracy and no moving parts.</li>
              <li>⚙️ Digital totalizer with inbuilt flow and tamper detection.</li>
              <li>🌐 IoT-ready: LoRa, NB-IoT, or 4G LTE communication modules.</li>
              <li>📊 Compatible with Frinso IoT dashboard and SCADA visualization.</li>
              <li>🛡️ IP68 waterproof design for outdoor and underground use.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/battery-ultra-dashboard.jpg"
              alt="Smart Ultrasonic Water Meter Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-8"
        >
          Technical Specifications
        </motion.h2>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Measurement Technology</td>
                <td className="p-4">Transit-Time Ultrasonic</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Power Source</td>
                <td className="p-4">Internal Lithium Battery (10–12 Years)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Communication Options</td>
                <td className="p-4">LoRaWAN / NB-IoT / 4G LTE / Pulse</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Accuracy Class</td>
                <td className="p-4">Class C / ISO 4064</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Protection</td>
                <td className="p-4">IP68 (Fully Submersible)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700">Size Range</td>
                <td className="p-4">DN15 – DN50</td>
              </tr>
            </tbody>
          </table>
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
          Applications
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Household water connections under JJM and AMRUT 2.0.</p>
          <p>✅ Smart City and Smart Building metering networks.</p>
          <p>✅ Industrial and commercial water usage monitoring.</p>
          <p>✅ Remote water audit and leakage detection systems.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/battery-ultra-usecase.jpg"
            alt="Battery Ultrasonic Water Meter Use Case"
            width={850}
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
          Enable Smart Water Monitoring with IoT
        </motion.h3>
        <p className="text-white/90 mb-6">
          Bring automation and transparency to water billing and consumption analytics 
          using Frinso’s IoT-enabled ultrasonic metering platform.
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
