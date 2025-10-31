"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ScadaSolarPage() {
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
            SCADA for Solar Plant
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A fully automated, real-time IoT + SCADA platform for{" "}
            <span className="font-semibold">solar power generation monitoring,</span>{" "}
            performance analytics, and energy yield optimization — empowering plants with
            predictive insights and remote control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/solar-scada-overview.jpg"
            alt="Solar SCADA Overview"
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
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🔆 Real-time monitoring of inverters, strings, combiner boxes, and meters.</li>
              <li>📊 AI-driven energy yield analytics and PR (Performance Ratio) tracking.</li>
              <li>🌐 MODBUS TCP, RS485, IEC 104, and MQTT communication protocols supported.</li>
              <li>⚡ Fault, temperature, and current imbalance detection with alerts.</li>
              <li>📱 Cloud dashboard for live plant visualization and reporting.</li>
              <li>🧠 Historical trend analysis and predictive maintenance insights.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/solar-dashboard.jpg"
              alt="Solar SCADA Dashboard"
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
            src="/images/solar-architecture.jpg"
            alt="Solar SCADA Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Real-Time Solar Plant Visualization
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Visualize your solar plant performance with real-time dashboards, energy graphs, 
          and live status for each inverter, combiner, and string — powered by Frinso SCADA.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/solar-visualization.jpg"
            alt="Solar Plant Visualization"
            width={850}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-white to-sky-50 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Benefits for Solar Operators & EPCs
        </motion.h3>
        <div className="max-w-5xl mx-auto text-gray-600 space-y-3">
          <p>✅ Optimize generation through continuous inverter performance tracking.</p>
          <p>✅ Detect underperforming strings and equipment in real-time.</p>
          <p>✅ Simplify O&M with smart alerts and remote command features.</p>
          <p>✅ Ensure compliance reporting for DISCOM, MNRE, and State Nodal Agencies.</p>
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
          Enable Smart Solar SCADA Monitoring Today
        </motion.h3>
        <p className="text-white/90 mb-6">
          Get complete control and visibility of your solar plant performance — anytime, anywhere.
        </p>
        <Link
          href="/demo"
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
