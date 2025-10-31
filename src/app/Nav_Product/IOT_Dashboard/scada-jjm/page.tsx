"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ScadaJJMPage() {
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
            SCADA for Jal Jeevan Mission / AMRUT 2.0 / WTP / STP / ETP
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A unified SCADA and IoT platform for real-time water management, ensuring transparency,
            efficiency, and sustainability across urban and rural infrastructure under government missions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/archetecture.png"
            alt="JJM SCADA Overview"
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
              <li>💧 Real-time monitoring of WTP, STP, ESR, UGR, and Borewells.</li>
              <li>📊 Integration with flow, pressure, and level sensors across all zones.</li>
              <li>🌐 SCADA dashboards with GIS mapping and alarm management.</li>
              <li>🧠 AI-driven analytics for leak detection and pump performance prediction.</li>
              <li>📱 Remote command and auto-scheduling for pumps and valves.</li>
              <li>🛰️ Data compliance with Jal Jeevan Mission and AMRUT 2.0 standards.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/dashboards/2.png"
              alt="SCADA Dashboard"
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
            src="/dashboards/8.jpg"
            alt="SCADA System Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Benefits for Utilities & Stakeholders
        </motion.h3>
        <div className="max-w-5xl mx-auto text-gray-600 space-y-4">
          <p>✅ Transparent water supply monitoring and reporting to authorities.</p>
          <p>✅ Energy and pump performance optimization with predictive alerts.</p>
          <p>✅ 24×7 remote visibility for operators, engineers, and administrators.</p>
          <p>✅ Auto report generation for CGWA / JJM / State Water Board formats.</p>
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
          Transform Water Infrastructure with Smart SCADA
        </motion.h3>
        <p className="text-white/90 mb-6">
          Frinso’s SCADA solutions help municipalities and utilities achieve 24×7 
          smart water supply with minimal losses and maximum control.
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
