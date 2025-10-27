"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Gauge,
  Droplets,
  Power,
  Cpu,
  Cloud,
  Activity,
  AlertTriangle,
  Waves,
} from "lucide-react";

export default function ClearWaterSump() {
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
              Clear Water Sump Cum Pump House Monitoring
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              IoT and SCADA-enabled system for automated control and monitoring
              of clear water sumps, pumps, and transmission to OHSRs.
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
            The <b>Clear Water Sump Cum Pump House Monitoring System</b> provides
            real-time visibility and automation for municipal and industrial
            water transmission. By integrating sensors, PLCs, and IoT gateways,
            operators can manage multiple pumps, monitor flow direction, and
            maintain balanced distribution to OHSR tanks.
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
                  title: "Water Level Monitoring",
                  desc: "Ultrasonic or radar-based sensors track sump level with accuracy up to ±2 mm.",
                },
                {
                  icon: <Power className="w-8 h-8 text-sky-600" />,
                  title: "Automatic Pump Control",
                  desc: "Automates ON/OFF logic of main and standby pumps based on water levels and pressure.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Flow and Pressure Tracking",
                  desc: "Measures real-time discharge flow and line pressure for network stability.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "PLC + IoT Integration",
                  desc: "F6 PLC or RTU-based system enables intelligent automation and remote control via dashboard.",
                },
                {
                  icon: <Cloud className="w-8 h-8 text-sky-600" />,
                  title: "SCADA Connectivity",
                  desc: "Live data visualization and control commands through Frinso’s cloud SCADA.",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-sky-600" />,
                  title: "Alert & Fault System",
                  desc: "Instant alerts for motor overload, low level, or dry run conditions.",
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
              src="/images/clear-water-sump-architecture.png"
              alt="Clear Water Sump Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• Smart water level and flow sensors in sump & discharge line.</li>
              <li>• Pump house automation through F6 PLC system.</li>
              <li>• IoT Gateway for real-time data sync to SCADA.</li>
              <li>• Automatic standby pump switch-over logic.</li>
              <li>• Integration with OHSR / Distribution system dashboards.</li>
            </ul>
          </div>
        </section>

        {/* Real-Time Visualization */}
        <section className="bg-gradient-to-br from-sky-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-sky-700 mb-6"
            >
              Real-Time SCADA Visualization
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Frinso’s SCADA platform provides a comprehensive view of sump and
              pump house operations — including live levels, pump status, and
              flow rate — allowing optimized water distribution with minimal
              energy consumption.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/clear-water-sump-scada.png"
                alt="Clear Water Sump SCADA Dashboard"
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
                "Automatic control reduces manpower dependency",
                "Optimized energy use through scheduled pump operation",
                "24x7 remote visibility of water flow and level",
                "Fault detection and predictive maintenance alerts",
                "Integrated with central SCADA and distribution systems",
                "Ensures consistent and reliable water delivery",
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
