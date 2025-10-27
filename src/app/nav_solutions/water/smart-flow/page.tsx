"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, Gauge, Cpu, Wifi, Settings, LineChart } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SmartFlowWaterManagement() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-sky-400 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-bg-pattern.svg')] bg-cover opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Smart Flow Water Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Real-time monitoring and management of water flow across residential, industrial, and municipal networks — powered by IoT & AI.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-sky-700 mb-6 text-center"
        >
          Overview
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          The <b>Smart Flow Water Management</b> system enables utilities, industries, and local bodies
          to manage water supply networks more efficiently. With the help of IoT-enabled
          flow meters, edge gateways, and cloud dashboards, you can visualize consumption,
          detect leakages, automate distribution, and ensure accountability.
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
                icon: <Droplets className="w-8 h-8 text-sky-600" />,
                title: "Real-Time Flow Monitoring",
                desc: "Monitor live water flow across networks using ultrasonic or electromagnetic sensors.",
              },
              {
                icon: <Gauge className="w-8 h-8 text-sky-600" />,
                title: "Pressure & Leakage Detection",
                desc: "Detect and alert anomalies in water pressure, leakage, or backflow in real-time.",
              },
              {
                icon: <Cpu className="w-8 h-8 text-sky-600" />,
                title: "IoT Edge Control",
                desc: "Smart edge controllers automate valve control and data transmission securely.",
              },
              {
                icon: <Wifi className="w-8 h-8 text-sky-600" />,
                title: "Wireless Connectivity",
                desc: "Supports 4G/LTE, LoRaWAN, and NB-IoT communication for remote monitoring.",
              },
              {
                icon: <Settings className="w-8 h-8 text-sky-600" />,
                title: "Automated Valve Operation",
                desc: "Automate valve control based on tank level, time schedule, or demand analytics.",
              },
              {
                icon: <LineChart className="w-8 h-8 text-sky-600" />,
                title: "AI-Based Consumption Analytics",
                desc: "AI models predict consumption trends and optimize supply-demand balancing.",
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

      {/* Architecture Section */}
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
            src="/images/smart-flow-architecture.png"
            alt="Smart Flow Water Architecture"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
          <ul className="space-y-3 text-gray-600 max-w-md">
            <li>• Smart IoT Flow Meters installed at key junctions.</li>
            <li>• IoT Gateways communicate via 4G/LoRaWAN to Cloud.</li>
            <li>• Real-time dashboards display usage and pressure trends.</li>
            <li>• Alerts for leakages, valve status, and energy consumption.</li>
            <li>• Integration with PLC/SCADA for automation.</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
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
              "Reduces Non-Revenue Water (NRW)",
              "Improves water distribution efficiency",
              "Ensures transparency in billing and usage",
              "Optimizes energy usage in pumping stations",
              "Enables predictive maintenance",
              "Supports 24×7 water supply projects",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white rounded-xl border hover:shadow-md"
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
