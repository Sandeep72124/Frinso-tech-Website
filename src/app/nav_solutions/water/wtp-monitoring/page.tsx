"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplets,
  Gauge,
  Cpu,
  SlidersHorizontal,
  Cloud,
  Activity,
  Power,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export default function WTPMonitoring() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-800 to-blue-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/wtp-pattern.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Water Treatment Plant (WTP) Monitoring & Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              IoT and SCADA-enabled system for intelligent monitoring, process
              automation, and efficiency management in water treatment plants.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-sky-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Frinso’s <b>WTP Automation & Monitoring System</b> enables complete
            visibility, control, and optimization of plant operations. The
            system automates backwashing, valve control, chemical dosing, and
            energy management while providing real-time dashboards for plant
            managers and engineers.
          </motion.p>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-sky-700 mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <SlidersHorizontal className="w-8 h-8 text-sky-600" />,
                  title: "Process Automation",
                  desc: "Automates valve operation, filtration, and chemical dosing sequences with intelligent PLC logic.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Real-Time Flow & Pressure Monitoring",
                  desc: "Continuous monitoring of inlet/outlet pressure, flow, and turbidity levels across treatment stages.",
                },
                {
                  icon: <Droplets className="w-8 h-8 text-sky-600" />,
                  title: "Water Quality Tracking",
                  desc: "Monitors pH, turbidity, chlorine, and TDS using smart analyzers with automatic calibration.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "PLC + IoT Integration",
                  desc: "Uses F6 PLCs and F1/F10 telemetry devices for real-time data acquisition and remote control.",
                },
                {
                  icon: <Power className="w-8 h-8 text-sky-600" />,
                  title: "Energy Management",
                  desc: "Tracks pump power consumption and optimizes operational timing to reduce energy costs.",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-sky-600" />,
                  title: "Predictive Maintenance Alerts",
                  desc: "Early fault detection and maintenance notifications to prevent unplanned shutdowns.",
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
            className="text-3xl font-semibold text-sky-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/wtp-architecture.png"
              alt="WTP Monitoring Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• PLC + IoT-based automation system.</li>
              <li>• Smart sensors for level, flow, and quality data.</li>
              <li>• Cloud-connected SCADA with live dashboards.</li>
              <li>• AI-based efficiency and performance analytics.</li>
              <li>• Integration with water distribution and OHSR systems.</li>
            </ul>
          </div>
        </section>

        {/* SCADA Visualization */}
        <section className="bg-gradient-to-br from-sky-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-sky-700 mb-6"
            >
              Real-Time SCADA Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Frinso’s SCADA dashboard provides interactive visualization of
              filtration, chlorination, pumping, and distribution systems,
              allowing operators to monitor performance and issue commands in
              real time.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/wtp-scada-dashboard.png"
                alt="WTP SCADA Dashboard"
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
              className="text-3xl font-semibold text-sky-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "End-to-end automation of WTP processes",
                "Enhanced water quality control and safety",
                "Reduced manual intervention and downtime",
                "Energy-efficient pumping and dosing cycles",
                "SCADA and IoT-enabled real-time visibility",
                "Centralized reporting and analytics for utilities",
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
