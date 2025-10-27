"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CustomEMSPage() {
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
            Custom EMS / SCADA Software
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Frinso develops <span className="font-semibold">tailored EMS and SCADA solutions</span> 
            that combine data acquisition, analytics, and automation — purpose-built for your 
            industry’s unique needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/custom-ems-overview.jpg"
            alt="Custom EMS SCADA Overview"
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
              Platform Features
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🧠 Real-time monitoring of energy, water, and environmental systems.</li>
              <li>📊 Web-based dashboards with modular widgets and GIS integration.</li>
              <li>⚙️ Supports multiple data protocols — MODBUS, MQTT, OPC-UA, REST API.</li>
              <li>🔒 Role-based access control, user management, and audit logs.</li>
              <li>📱 Mobile-responsive interface with live notifications and alerts.</li>
              <li>💾 On-premise or cloud deployment — AWS, Azure, or Frinso Cloud.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/custom-ems-dashboard.jpg"
              alt="EMS SCADA Dashboard"
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
          Software Architecture
        </motion.h2>
        <div className="flex justify-center">
          <Image
            src="/images/custom-ems-architecture.jpg"
            alt="EMS SCADA Software Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Core Software Modules
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-gray-700">
          {[
            { title: "Energy Management System", desc: "Monitor, analyze, and optimize power usage and efficiency across sites." },
            { title: "Water Management SCADA", desc: "Automate pump houses, ESR, and distribution through IoT-enabled control." },
            { title: "Environmental Monitoring", desc: "Integrate sensors for air, water, and wastewater quality tracking." },
            { title: "Asset Management", desc: "Track maintenance cycles and predictive service intervals with IoT data." },
            { title: "Alert & Reporting Engine", desc: "Custom threshold alerts and auto-reporting to government dashboards." },
            { title: "API & Integration Layer", desc: "Open API for data sharing with external systems and utilities." },
          ].map((module, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl bg-sky-50 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-sky-700 mb-2">{module.title}</h4>
              <p className="text-gray-600 text-sm">{module.desc}</p>
            </motion.div>
          ))}
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
          Why Choose Frinso EMS / SCADA
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Fully customizable to match client architecture and project scope.</p>
          <p>✅ Scalable from single-site installations to national-level systems.</p>
          <p>✅ Compliance-ready with CGWA, CPCB, JJM, and Smart City frameworks.</p>
          <p>✅ Designed, developed, and supported entirely in India.</p>
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
          Customize Your EMS / SCADA Solution
        </motion.h3>
        <p className="text-white/90 mb-6">
          Deploy industry-ready, modular EMS/SCADA platforms integrated with Frinso IoT edge devices.
        </p>
        <Link
          href="/contact"
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
