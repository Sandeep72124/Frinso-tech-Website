"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplets,
  Gauge,
  Wifi,
  Cpu,
  Cloud,
  Activity,
  Power,
  BellRing,
  Layers,
} from "lucide-react";

export default function OHSRMonitoring() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-800 to-blue-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/water-pattern.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              OHSR / OHMBR Monitoring System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Smart IoT-based monitoring and control of overhead reservoirs to
              ensure efficient water distribution, level management, and
              real-time analytics.
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
            The <b>OHSR/OHMBR Monitoring System</b> is designed for automated,
            real-time monitoring of overhead reservoirs that supply water to
            distribution networks. It measures water level, inflow/outflow,
            and pump status while providing data to central SCADA dashboards.
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
                  title: "Real-Time Level Monitoring",
                  desc: "Continuous level measurement using ultrasonic or radar-based sensors.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Flow and Pressure Sensing",
                  desc: "Integrated flow and pressure sensors at inlet/outlet lines for hydraulic balance.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "IoT/RTU Control Unit",
                  desc: "Edge device for data logging, relay control, and automated communication.",
                },
                {
                  icon: <Wifi className="w-8 h-8 text-sky-600" />,
                  title: "4G/LTE Connectivity",
                  desc: "Wireless communication via LTE modem ensures remote accessibility.",
                },
                {
                  icon: <Cloud className="w-8 h-8 text-sky-600" />,
                  title: "SCADA Integration",
                  desc: "Real-time data visualization, alarms, and control via Frinso Cloud SCADA.",
                },
                {
                  icon: <BellRing className="w-8 h-8 text-sky-600" />,
                  title: "Alarm & Notification System",
                  desc: "SMS / email alerts for overflow, dry run, or abnormal tank behavior.",
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

        {/* Architecture Diagram */}
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
              src="/images/ohsr-architecture.png"
              alt="OHSR System Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT-enabled sensors for level, pressure, and flow.</li>
              <li>• Pump and valve status monitoring in real-time.</li>
              <li>• Edge device (RTU) with 4G connectivity.</li>
              <li>• Data analytics and alert engine in Frinso Cloud.</li>
              <li>• Integration with water distribution network SCADA.</li>
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
              Real-Time Visualization
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              The live SCADA interface displays OHSR level, inflow/outflow trends,
              and pressure graphs — allowing operators to manage supply-demand
              balance with predictive automation.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/ohsr-scada.png"
                alt="OHSR SCADA Visualization"
                width={800}
                height={450}
                className="rounded-xl shadow-lg border"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                "24x7 visibility of water level and pump status",
                "Avoids overflow and dry-run losses",
                "Energy-efficient distribution control",
                "Centralized monitoring via SCADA",
                "Seamless integration with sump and WTP systems",
                "Supports predictive water distribution analytics",
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
