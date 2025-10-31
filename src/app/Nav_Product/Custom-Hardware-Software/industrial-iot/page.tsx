"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IndustrialIoTPage() {
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
            Industrial IoT Systems
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Empowering industries with{" "}
            <span className="font-semibold">custom IoT hardware, edge computing,</span>{" "}
            and real-time data analytics for smarter, more sustainable operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/industrial-iot-overview.jpg"
            alt="Industrial IoT Systems Overview"
            width={800}
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
              Key Capabilities
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🏭 Smart data acquisition from sensors, PLCs, and machines.</li>
              <li>⚙️ Edge computing for local decision-making and control logic.</li>
              <li>📡 Multi-protocol communication: MODBUS, MQTT, REST API, LoRa, and 4G.</li>
              <li>🧠 AI/ML-based predictive maintenance for industrial equipment.</li>
              <li>🌐 Real-time dashboards with cloud integration (AWS / Azure / Frinso Cloud).</li>
              <li>🔒 Secure device management and OTA firmware updates.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/industrial-edge-device.jpg"
              alt="Industrial IoT Edge Device"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-8"
        >
          System Architecture
        </motion.h2>
        <div className="flex justify-center">
          <Image
            src="/images/industrial-architecture.jpg"
            alt="Industrial IoT System Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
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
          Industry Applications
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Energy management in manufacturing and processing units.</p>
          <p>✅ Water treatment and distribution network automation.</p>
          <p>✅ HVAC and environmental monitoring for industrial plants.</p>
          <p>✅ DG and solar hybrid power tracking and analytics.</p>
          <p>✅ Smart logistics, predictive maintenance, and asset tracking.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/industrial-usecase.jpg"
            alt="Industrial IoT Use Case"
            width={850}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-white to-sky-50 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Benefits
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Reduce downtime and improve asset uptime with predictive maintenance.</p>
          <p>✅ Enhance operational transparency with centralized monitoring.</p>
          <p>✅ Optimize energy and resource usage for cost savings.</p>
          <p>✅ Enable compliance with ISO, CGWA, and sustainability standards.</p>
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
          Build Your Industrial IoT Ecosystem
        </motion.h3>
        <p className="text-white/90 mb-6">
          Transform operations with connected devices, edge analytics, and custom SCADA dashboards — 
          designed, developed, and integrated by Frinso.
        </p>
        <Link
          href="/demo"
          className="inline-block rounded-lg bg-white text-sky-700 px-6 py-3 font-medium hover:bg-sky-100 hover:scale-105 transition"
        >
          Request Demo
        </Link>
      </section>
    </main>
    <footer/>
    </>
  );
}
