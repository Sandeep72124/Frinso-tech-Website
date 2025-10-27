"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplets,
  Waves,
  Gauge,
  Activity,
  Cloud,
  Cpu,
  MapPin,
  Radio,
  ShieldCheck,
} from "lucide-react";

export default function SmartWaterNetwork() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-700 to-blue-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/water-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart Water Network SCADA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Real-time flow, pressure, and reservoir monitoring through IoT &
              SCADA integration — enabling efficient and sustainable water
              distribution management.
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
            The <b>Smart Water Network SCADA</b> platform connects flow meters,
            pressure sensors, tank levels, and pump systems in real-time. It
            supports automation, analytics, and alerting to minimize leakage,
            improve efficiency, and ensure 24×7 water supply reliability.
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
                  title: "Flow & Pressure Monitoring",
                  desc: "Real-time flow and pressure data from DMA zones and pumping stations.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Reservoir & Tank Level Monitoring",
                  desc: "IoT-based level sensors for overhead tanks, sumps, and reservoirs.",
                },
                {
                  icon: <Radio className="w-8 h-8 text-sky-600" />,
                  title: "4G/LoRa Telemetry Connectivity",
                  desc: "Reliable data transmission via LoRa or 4G gateways to central SCADA.",
                },
                {
                  icon: <Cloud className="w-8 h-8 text-sky-600" />,
                  title: "Cloud SCADA Integration",
                  desc: "Centralized control & visualization of distributed water assets.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-sky-600" />,
                  title: "Leakage Detection & Alarms",
                  desc: "Instant alerts for abnormal flow, pressure drops, or overflow events.",
                },
                {
                  icon: <Activity className="w-8 h-8 text-sky-600" />,
                  title: "Analytics & Reporting",
                  desc: "Interactive dashboards for water balance, trends, and efficiency KPIs.",
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
              src="/images/smart-water-architecture.png"
              alt="Smart Water SCADA Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT gateways collect data from field instruments.</li>
              <li>• Data is transmitted via LoRa/4G to the cloud SCADA.</li>
              <li>• Real-time dashboards visualize flow, level, and pressure.</li>
              <li>• Control logic automates valve and pump operations.</li>
              <li>• Alerts ensure quick fault detection and resolution.</li>
            </ul>
          </div>
        </section>

        {/* Dashboard Section */}
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
              Interactive SCADA dashboard displaying live flow data, pressure
              trends, and system performance metrics across zones.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/smart-water-dashboard.png"
                alt="Smart Water Dashboard"
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
                "Reduced non-revenue water and leakage losses",
                "Improved system visibility and response time",
                "Automation of pumps and valve operations",
                "24×7 monitoring via centralized dashboard",
                "Data-driven water distribution optimization",
                "Compliance with AMRUT 2.0 and JJM requirements",
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
