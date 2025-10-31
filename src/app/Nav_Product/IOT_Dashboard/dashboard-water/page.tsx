"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DashboardWaterPage() {
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
            Real-Time Dashboard for Water Management
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            End-to-end IoT-powered visualization for{" "}
            <span className="font-semibold">flow, pressure, tank levels,</span> and{" "}
            <span className="font-semibold">pump performance,</span> ensuring transparent, data-driven 
            water distribution for utilities and industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/water-dashboard-overview.jpg"
            alt="Water Management Dashboard"
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
              <li>💧 Real-time monitoring of flow, pressure, tank levels, and pump status.</li>
              <li>📊 GIS-based map visualization for WTP, ESR, OHT, and network nodes.</li>
              <li>📱 Instant alerts for leakage, overflow, dry-run, and supply interruption.</li>
              <li>🧠 AI-based analytics for water balance and non-revenue water detection.</li>
              <li>🌐 Integrated CGWA compliance and automatic data submission.</li>
              <li>🔌 Supports any flow meter, pressure sensor, or RTU device via MODBUS/MQTT.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/water-dashboard.jpg"
              alt="Real-Time Water Dashboard"
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
            src="/images/water-architecture.jpg"
            alt="Water SCADA Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Analytics & Visualization Section */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Real-Time Analytics & Visualization
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          See your entire water network in one interactive dashboard. Visualize tank levels,
          supply flow, energy consumption, and pump activity with AI-powered insights.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/water-visualization.jpg"
            alt="Water Dashboard Visualization"
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
          Benefits for Utilities & Municipalities
        </motion.h3>
        <div className="max-w-5xl mx-auto text-gray-600 space-y-3">
          <p>✅ Optimize pump run hours and reduce power wastage.</p>
          <p>✅ Detect leakage, overflow, and distribution imbalance early.</p>
          <p>✅ Improve water supply reliability with predictive analytics.</p>
          <p>✅ Simplify compliance with CGWA, AMRUT 2.0, and JJM standards.</p>
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
          Empower Water Management with Real-Time Intelligence
        </motion.h3>
        <p className="text-white/90 mb-6">
          Bring visibility, efficiency, and sustainability to your water network 
          using Frinso’s IoT-enabled dashboards.
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
