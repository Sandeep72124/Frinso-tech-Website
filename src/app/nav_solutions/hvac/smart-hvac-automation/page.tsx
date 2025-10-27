"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wind,
  Thermometer,
  Gauge,
  Cpu,
  Cloud,
  Power,
  Activity,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

export default function SmartHVACAutomation() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-800 to-blue-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/energy-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart HVAC Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Intelligent IoT-driven HVAC automation and monitoring to maximize
              comfort, reduce energy costs, and enhance building efficiency.
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
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
            Frinso’s <b>Smart HVAC Automation System</b> integrates real-time
            sensor data, IoT gateways, and energy management analytics to deliver
            intelligent HVAC control for industrial plants, data centers, and
            commercial complexes — ensuring efficiency, reliability, and comfort.
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
                  icon: <Thermometer className="w-8 h-8 text-sky-600" />,
                  title: "Temperature & Humidity Monitoring",
                  desc: "Smart sensors provide accurate indoor climate readings across multiple zones.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "Automated Control Logic",
                  desc: "IoT-based control of AHUs, chillers, and FCUs for balanced load and comfort.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Energy Optimization",
                  desc: "Automated scheduling and performance tuning minimize power consumption.",
                },
                {
                  icon: <Activity className="w-8 h-8 text-sky-600" />,
                  title: "Predictive Maintenance",
                  desc: "Analyzes vibration, current, and temperature trends for proactive maintenance.",
                },
                {
                  icon: <Power className="w-8 h-8 text-sky-600" />,
                  title: "Smart EMS Integration",
                  desc: "Works seamlessly with Frinso EMS for unified building energy analytics.",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-sky-600" />,
                  title: "Fault & Alert Management",
                  desc: "Instant alarms for filter clogging, compressor failure, or abnormal temperature.",
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
              src="/images/hvac-architecture.png"
              alt="Smart HVAC Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT edge device collects data from chillers, AHUs, FCUs.</li>
              <li>• Modbus/4-20mA integration with sensors and controllers.</li>
              <li>• Real-time data sync to cloud-based EMS dashboard.</li>
              <li>• Predictive alerts and energy analytics visualization.</li>
              <li>• Web-based monitoring and control from anywhere.</li>
            </ul>
          </div>
        </section>

        {/* Real-Time Monitoring */}
        <section className="bg-gradient-to-br from-sky-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-sky-700 mb-6"
            >
              Real-Time Monitoring Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              The centralized dashboard provides zone-wise temperature,
              humidity, and energy data visualization — empowering operators
              with actionable insights and live control capabilities.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/hvac-dashboard.png"
                alt="HVAC Dashboard"
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
                "Optimized HVAC energy consumption",
                "Improved occupant comfort and air quality",
                "Predictive fault detection and maintenance",
                "Seamless integration with EMS and BMS systems",
                "Reduced downtime and operational costs",
                "Centralized monitoring across all zones",
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
