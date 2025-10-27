"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Gauge,
  BarChart3,
  Server,
  Cpu,
  Battery,
  Activity,
} from "lucide-react";

export default function SmartEMS() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Smart Energy Management System (EMS)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Real-time IoT-based energy monitoring, analytics, and optimization for
            industrial, commercial, and utility applications — enabling smarter, greener energy usage.
          </motion.p>
        </section>

        {/* Overview */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                Comprehensive Energy Intelligence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso EMS provides real-time visibility into power consumption,
                efficiency, and performance across distributed assets. 
                Through IoT sensors, smart meters, and SCADA connectivity,
                it delivers actionable insights for reducing energy wastage
                and operational costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/ems-overview.png"
                alt="EMS Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-r from-cyan-50 to-sky-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Core Features of Smart EMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Gauge,
                  title: "Real-Time Power Monitoring",
                  desc: "Monitor voltage, current, PF, harmonics, and frequency in real time.",
                },
                {
                  icon: Zap,
                  title: "Load Management",
                  desc: "Analyze load curves and automatically balance power usage.",
                },
                {
                  icon: BarChart3,
                  title: "Energy Consumption Reports",
                  desc: "Generate facility-wise and equipment-wise energy usage reports.",
                },
                {
                  icon: Cpu,
                  title: "Predictive Analytics",
                  desc: "Detect energy inefficiencies using AI-based predictive models.",
                },
                {
                  icon: Server,
                  title: "Centralized SCADA Integration",
                  desc: "Connect EMS data to plant SCADA for unified control.",
                },
                {
                  icon: Battery,
                  title: "Renewable Integration",
                  desc: "Integrate solar, wind, and DG systems for hybrid energy analytics.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                System Architecture & Connectivity
              </h2>
              <p className="text-gray-600">
                The EMS architecture leverages IoT-enabled meters, PLCs, and
                Frinso Gateways for seamless data aggregation and edge analytics.
                The system interfaces with cloud servers for visualization,
                automated reporting, and energy control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/ems-architecture.png"
                alt="EMS Architecture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-20 bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">EMS Dashboard</h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Interactive dashboards for load profiling, efficiency tracking,
              and KPI visualization with customizable widgets and drill-down analytics.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/ems-dashboard.png"
                alt="EMS Dashboard"
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Benefits of Frinso Smart EMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Reduce energy costs with real-time monitoring",
                "Increase operational efficiency with analytics",
                "Enable sustainability with carbon tracking",
                "Automate energy reports and compliance logs",
                "Integrate renewable and non-renewable systems",
                "Enhance visibility through IoT dashboards",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-sky-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-700">{benefit}</p>
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
