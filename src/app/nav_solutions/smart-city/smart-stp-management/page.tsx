"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Recycle,
  Droplets,
  Gauge,
  Activity,
  ShieldCheck,
  Cloud,
  Settings2,
  Leaf,
} from "lucide-react";

export default function SmartSTPManagement() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-700 to-green-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/stp-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart STP / Sewage Management
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              IoT-based STP automation and monitoring system for real-time
              wastewater treatment performance, ensuring compliance and
              sustainability.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-emerald-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            The <b>Smart Sewage Treatment Plant (STP) Monitoring System</b>{" "}
            provides end-to-end visibility of the wastewater treatment process,
            including flow, dissolved oxygen, turbidity, and pH parameters. The
            system automates pump, blower, and valve operations, ensuring
            compliance with <b>CPCB/OLEMS</b> standards and sustainable water
            reuse.
          </motion.p>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-emerald-700 mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Gauge className="w-8 h-8 text-emerald-600" />,
                  title: "Flow & pH Monitoring",
                  desc: "Monitor inflow, treated water, and outlet water pH in real time.",
                },
                {
                  icon: <Activity className="w-8 h-8 text-emerald-600" />,
                  title: "DO, TSS & Turbidity Sensors",
                  desc: "Track vital STP parameters to ensure water quality compliance.",
                },
                {
                  icon: <Settings2 className="w-8 h-8 text-emerald-600" />,
                  title: "Automated Control Logic",
                  desc: "Auto-start/stop pumps and blowers based on real-time readings.",
                },
                {
                  icon: <Cloud className="w-8 h-8 text-emerald-600" />,
                  title: "Cloud-Based Dashboard",
                  desc: "Access data from anywhere via secure cloud visualization.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                  title: "Compliance Reports",
                  desc: "Automated daily and monthly CPCB/OLEMS compliance reports.",
                },
                {
                  icon: <Leaf className="w-8 h-8 text-emerald-600" />,
                  title: "Energy & Cost Optimization",
                  desc: "Improve efficiency and reduce power consumption through smart control.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-6 bg-gray-50 rounded-2xl border hover:shadow-lg transition"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="container mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-emerald-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/stp-architecture.png"
              alt="Smart STP Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT devices collect data from STP sensors and controllers.</li>
              <li>• Data is transmitted via 4G/LoRa to a centralized SCADA server.</li>
              <li>• AI engine optimizes energy and operation cycles.</li>
              <li>• Live dashboards track performance and compliance status.</li>
              <li>• Alerts and predictive maintenance insights are generated automatically.</li>
            </ul>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-emerald-700 mb-6"
            >
              Real-Time Monitoring Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Interactive dashboards display live data from multiple treatment
              plants, including inflow/outflow metrics, process parameters, and
              compliance KPIs.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/stp-dashboard.png"
                alt="Smart STP Dashboard"
                width={800}
                height={450}
                className="rounded-xl shadow-lg border"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-emerald-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "24×7 STP monitoring with automated reporting",
                "Energy-efficient and optimized operations",
                "CPCB/OLEMS compliant data logging and alerts",
                "Reduced downtime through predictive maintenance",
                "Enhanced operational transparency and visibility",
                "Supports smart city and AMRUT 2.0 initiatives",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-gray-50 rounded-xl border hover:shadow-md"
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
