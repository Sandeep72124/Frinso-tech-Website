"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ScadaGridPage() {
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
            SCADA for Smart Grid
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A next-generation SCADA system enabling{" "}
            <span className="font-semibold">real-time grid monitoring, load management,</span>{" "}
            and <span className="font-semibold">energy distribution optimization</span> — 
            designed for modern substations and utilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/grid-scada-overview.jpg"
            alt="Smart Grid SCADA Overview"
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
              <li>⚙️ Real-time transformer, feeder, and busbar monitoring.</li>
              <li>⚡ Live visualization of voltage, current, power factor, and load.</li>
              <li>🧠 Predictive fault and transformer health diagnostics using AI.</li>
              <li>🌐 MODBUS, IEC 60870-5-104, DNP3, MQTT protocol integration.</li>
              <li>📈 Power flow analytics and peak load prediction dashboards.</li>
              <li>🔒 Secure, encrypted communication with redundant failover.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/grid-dashboard.jpg"
              alt="Smart Grid Dashboard"
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
          Smart Grid SCADA Architecture
        </motion.h2>
        <div className="flex justify-center">
          <Image
            src="/images/grid-architecture.jpg"
            alt="Smart Grid SCADA Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Real-Time Power Analytics
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Track power quality, consumption, and efficiency in real time across substations 
          and feeders. Identify losses, unbalanced loads, and system faults before downtime occurs.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/grid-analytics.jpg"
            alt="Smart Grid Analytics"
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
          Benefits for Utilities & Smart City Operators
        </motion.h3>
        <div className="max-w-5xl mx-auto text-gray-600 space-y-3">
          <p>✅ Reduce downtime through AI-powered predictive maintenance.</p>
          <p>✅ Balance grid load dynamically and reduce transmission losses.</p>
          <p>✅ Integrate renewable sources for hybrid grid management.</p>
          <p>✅ Generate daily, monthly, and event-based reports automatically.</p>
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
          Digitize Your Power Network with Smart Grid SCADA
        </motion.h3>
        <p className="text-white/90 mb-6">
          Achieve real-time grid intelligence with Frinso’s scalable SCADA platform — 
          from substations to city-wide energy systems.
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
