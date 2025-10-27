"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MeterUltraPage() {
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
            Ultrasonic Water Flowmeter
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A non-intrusive, highly accurate flow measurement solution based on{" "}
            <span className="font-semibold">transit-time ultrasonic technology,</span> 
            suitable for clean water applications, industrial pipelines, and CGWA monitoring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/ultra-flowmeter.jpg"
            alt="Ultrasonic Water Flowmeter"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🔊 Clamp-on / inline installation without pipe cutting.</li>
              <li>💧 Measures flow velocity from 0.03 to 12 m/s with ±1% accuracy.</li>
              <li>⚙️ Suitable for plastic, steel, and ductile iron pipelines.</li>
              <li>🔌 Output options: 4–20 mA, RS485 (MODBUS RTU), pulse, and relay.</li>
              <li>🌐 IoT connectivity with Frinso F1 and F10 gateways for real-time monitoring.</li>
              <li>🧠 Temperature compensation and automatic signal gain control.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/ultra-dashboard.jpg"
              alt="Ultrasonic Flowmeter Dashboard"
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
                <td className="p-4 font-medium text-gray-700">Technology</td>
                <td className="p-4">Transit-time Ultrasonic (Clamp-on / Inline)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Pipe Size Range</td>
                <td className="p-4">DN25 to DN1200</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Accuracy</td>
                <td className="p-4">±1% of reading</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Output</td>
                <td className="p-4">4–20 mA, RS485 (MODBUS), Pulse, Relay</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Display</td>
                <td className="p-4">LCD with flow rate, totalizer, and diagnostics</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700">Protection</td>
                <td className="p-4">IP68 (Sensor), IP65 (Transmitter)</td>
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
          <p>✅ Borewell, irrigation, and groundwater abstraction monitoring.</p>
          <p>✅ WTP / STP inflow and outflow metering with SCADA integration.</p>
          <p>✅ Industrial utilities: HVAC water circuits, cooling systems, RO plants.</p>
          <p>✅ Smart city water network and CGWA compliance monitoring.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/ultra-usecase.jpg"
            alt="Ultrasonic Flowmeter Use Case"
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
          Measure Smartly with Ultrasonic Precision
        </motion.h3>
        <p className="text-white/90 mb-6">
          Deploy non-intrusive flowmeters with IoT dashboards for complete visibility and CGWA compliance.
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
