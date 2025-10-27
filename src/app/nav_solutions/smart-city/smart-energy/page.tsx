"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Gauge,
  ServerCog,
  LineChart,
  Cpu,
  Factory,
  ShieldCheck,
  Battery,
} from "lucide-react";

export default function SmartEnergyManagement() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-700 to-yellow-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/energy-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart Energy Management System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Comprehensive IoT-based energy monitoring platform for industrial,
              commercial, and municipal facilities, improving efficiency and
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
            className="text-3xl font-semibold text-amber-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            The <b>Smart Energy Management System (EMS)</b> provides centralized
            visibility of all energy assets—transformers, DG sets, solar plants,
            HVAC units, and street lighting. It integrates with SCADA and IoT
            devices to ensure real-time insights, automated control, and
            predictive maintenance.
          </motion.p>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-amber-700 mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Gauge className="w-8 h-8 text-amber-600" />,
                  title: "Real-Time Energy Monitoring",
                  desc: "Capture voltage, current, power factor, and harmonics for all feeders and DG sets.",
                },
                {
                  icon: <Zap className="w-8 h-8 text-amber-600" />,
                  title: "Load & Demand Management",
                  desc: "Automated control based on dynamic load balancing to avoid peak penalties.",
                },
                {
                  icon: <LineChart className="w-8 h-8 text-amber-600" />,
                  title: "Analytics & Trend Reports",
                  desc: "Energy profiling, carbon footprint insights, and historical comparisons.",
                },
                {
                  icon: <Battery className="w-8 h-8 text-amber-600" />,
                  title: "DG & Backup Energy Tracking",
                  desc: "Monitor DG runtime, fuel consumption, and integrate with BMS or SCADA.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-amber-600" />,
                  title: "IoT-Based Edge Devices",
                  desc: "Smart gateways collect, preprocess, and transmit live energy data securely.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
                  title: "Custom Alerts & Efficiency Targets",
                  desc: "Receive energy threshold alerts and automated performance scorecards.",
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
            className="text-3xl font-semibold text-amber-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/energy-architecture.png"
              alt="Smart Energy Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• Energy meters and IoT gateways collect live consumption data.</li>
              <li>• Data transmitted securely to a central SCADA/EMS server.</li>
              <li>• AI models identify inefficiencies and load imbalance patterns.</li>
              <li>• Cloud dashboards visualize consumption and cost analytics.</li>
              <li>• Integration with solar, DG, and grid systems for unified control.</li>
            </ul>
          </div>
        </section>

        {/* Dashboard */}
        <section className="bg-gradient-to-br from-amber-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-amber-700 mb-6"
            >
              Real-Time Energy Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Dynamic visualization of power usage, DG runtime, solar generation,
              and energy efficiency indicators across facilities.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/energy-dashboard.png"
                alt="Smart Energy Dashboard"
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
              className="text-3xl font-semibold text-amber-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "Real-time power consumption visibility",
                "Centralized dashboard for all energy assets",
                "Reduced operational costs via optimization",
                "Automatic energy efficiency reports",
                "Predictive maintenance for DG & transformers",
                "Supports ISO 50001 and smart city frameworks",
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
