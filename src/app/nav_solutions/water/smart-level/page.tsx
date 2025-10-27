"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Gauge, Settings, Cpu, Bell, BarChart } from "lucide-react";

export default function SmartLevelManagement() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-700 to-sky-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/water-bg-pattern.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart Level Management System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Real-time monitoring of water tank levels, pump control, and automation powered by IoT & cloud intelligence.
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
            The <b>Smart Level Management System</b> helps utilities, industries, and residential societies 
            monitor and control their water tanks in real-time. The system automates pump operation,
            prevents overflow, and ensures optimal water utilization.
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
                  icon: <Waves className="w-8 h-8 text-sky-600" />,
                  title: "Real-Time Tank Level Monitoring",
                  desc: "Monitor tank levels continuously using ultrasonic or pressure sensors.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Automatic Pump Control",
                  desc: "Start/stop pumps automatically based on water level thresholds.",
                },
                {
                  icon: <Settings className="w-8 h-8 text-sky-600" />,
                  title: "Configurable Thresholds",
                  desc: "Easily configure upper and lower tank limits through a cloud dashboard.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "Edge Automation",
                  desc: "Smart edge controllers ensure seamless pump operation even during network downtime.",
                },
                {
                  icon: <Bell className="w-8 h-8 text-sky-600" />,
                  title: "Alert & Notification System",
                  desc: "Instant alerts for overflow, low level, or pump malfunction conditions.",
                },
                {
                  icon: <BarChart className="w-8 h-8 text-sky-600" />,
                  title: "Data Analytics & Reports",
                  desc: "Comprehensive reports for consumption, usage patterns, and efficiency tracking.",
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
              src="/images/smart-level-architecture.png"
              alt="Smart Level Management Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• Ultrasonic or Pressure Level Sensor in tanks.</li>
              <li>• IoT Gateway with 4G/LTE or LoRaWAN connectivity.</li>
              <li>• Cloud dashboard with tank visualization and pump status.</li>
              <li>• Automatic alerts for overflow or low level.</li>
              <li>• Optional manual/auto pump control mode.</li>
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
                "Eliminates manual water tank monitoring",
                "Prevents overflow and water wastage",
                "Reduces pump running time and energy usage",
                "Enables predictive maintenance of pumps",
                "Supports mobile and web-based remote control",
                "Ideal for industries, apartments, and WTPs",
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

      <Footer />
    </>
  );
}
