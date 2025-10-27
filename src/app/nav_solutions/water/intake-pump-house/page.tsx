"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Waves,
  Gauge,
  Cpu,
  Droplets,
  Activity,
  Cloud,
  Power,
  Bell,
} from "lucide-react";

export default function IntakePumpHouse() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-800 to-sky-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/water-pattern.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Intake Well Cum Pump House Monitoring
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Real-time monitoring and control of intake wells, pumps, and
              water flow for efficient operation and energy savings.
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
            The <b>Intake Well & Pump House Monitoring System</b> by Frinso enables
            utilities and municipalities to monitor water levels, flow, and
            pump health from anywhere. It ensures optimal pump operation,
            automatic alerts, and energy-efficient performance through real-time IoT dashboards.
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
                  desc: "Continuous tracking of intake well and sump levels using ultrasonic or radar level sensors.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Flow Measurement",
                  desc: "Flowmeters monitor inflow/outflow and pump discharge with real-time telemetry updates.",
                },
                {
                  icon: <Power className="w-8 h-8 text-sky-600" />,
                  title: "Pump Status & Energy",
                  desc: "Monitors pump running hours, power consumption, and load imbalance to optimize energy usage.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "IoT Controller Integration",
                  desc: "F6 PLC-based IoT controllers automate pump control and fault handling.",
                },
                {
                  icon: <Activity className="w-8 h-8 text-sky-600" />,
                  title: "Motor Protection & Alerts",
                  desc: "Overload, dry-run, and voltage fluctuation alerts prevent damage to pumps.",
                },
                {
                  icon: <Cloud className="w-8 h-8 text-sky-600" />,
                  title: "Central Dashboard & Reporting",
                  desc: "Cloud-based monitoring with performance insights and automatic daily reports.",
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

        {/* Architecture */}
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
              src="/images/intake-pump-architecture.png"
              alt="Intake Pump Monitoring Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT-enabled PLC panel for pump automation.</li>
              <li>• Integrated level, flow, and pressure sensors.</li>
              <li>• SCADA dashboard for real-time operation.</li>
              <li>• Auto-alerts for pump failure or dry run.</li>
              <li>• SMS/Email notifications for maintenance teams.</li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
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
                "Remote operation and control of pumps",
                "Reduced energy wastage and downtime",
                "Predictive maintenance with early alerts",
                "Data-driven decision-making for utilities",
                "Integration with existing SCADA and EMS systems",
                "Improved efficiency of water supply operations",
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
