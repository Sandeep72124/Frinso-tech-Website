"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DashboardEnergyPage() {
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
            Real-Time Dashboard for Energy Management
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            AI-powered energy visualization platform for{" "}
            <span className="font-semibold">industries, utilities, and buildings,</span> 
            enabling real-time monitoring of power consumption, load balance, 
            and renewable integration for optimized performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/energy-dashboard-overview.jpg"
            alt="Energy Management Dashboard Overview"
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
              <li>⚡ Real-time power, voltage, current, and PF monitoring.</li>
              <li>📊 Energy analytics with automatic cost calculation and KPIs.</li>
              <li>🔋 DG and solar energy integration for hybrid power monitoring.</li>
              <li>🧠 AI-based load profiling, demand prediction, and efficiency tracking.</li>
              <li>🌐 Integration with smart meters, MODBUS RTUs, and IoT gateways.</li>
              <li>📱 Multi-site dashboard view for enterprises and utilities.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/energy-dashboard.jpg"
              alt="Real-Time Energy Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-8"
        >
          Energy Flow & Analytics
        </motion.h2>
        <div className="flex justify-center">
          <Image
            src="/images/energy-analytics.jpg"
            alt="Energy Analytics Visualization"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Advanced Insights */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Real-Time Insights & Reporting
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Track efficiency metrics, identify anomalies, and get intelligent alerts for 
          overconsumption or phase imbalance. Automated reports simplify compliance 
          and auditing for ISO 50001 or state energy boards.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/energy-reports.jpg"
            alt="Energy Reports Visualization"
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
          Benefits for Industries & Facilities
        </motion.h3>
        <div className="max-w-5xl mx-auto text-gray-600 space-y-3">
          <p>✅ Reduce energy wastage and carbon footprint.</p>
          <p>✅ Improve power quality and reduce downtime.</p>
          <p>✅ Optimize DG and solar hybrid power utilization.</p>
          <p>✅ Gain actionable insights for energy cost reduction.</p>
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
          Transform Energy Management with Frinso Dashboards
        </motion.h3>
        <p className="text-white/90 mb-6">
          Unlock real-time energy intelligence and predictive insights to optimize power performance.
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
