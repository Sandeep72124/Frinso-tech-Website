"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Gauge,
  BarChart3,
  BatteryCharging,
  CloudLightning,
  Cpu,
  Factory,
} from "lucide-react";

export default function EnergyPowerSolutions() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            Energy & Power Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Empowering industries, smart cities, and utilities with real-time energy
            monitoring, predictive analytics, and optimized power management through
            IoT and AI-driven systems.
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
                Powering Sustainable and Smart Energy Networks
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s Energy & Power Solutions bring a complete ecosystem of smart
                energy monitoring, predictive maintenance, solar & DG integration, and
                real-time SCADA dashboards. Built for both industrial and smart city
                infrastructure, it ensures optimized consumption and proactive
                management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/energy-power-overview.png"
                alt="Energy Power Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 bg-gradient-to-r from-cyan-50 to-sky-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Core Energy Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Smart Energy Management",
                  desc: "Monitor, control, and optimize energy consumption across plants and utilities in real time.",
                },
                {
                  icon: BatteryCharging,
                  title: "DG Monitoring & Fuel Tracking",
                  desc: "Real-time visibility of generator performance, fuel levels, and efficiency analytics.",
                },
                {
                  icon: CloudLightning,
                  title: "Solar Power SCADA",
                  desc: "Centralized dashboards for solar PV generation, inverters, and grid export monitoring.",
                },
                {
                  icon: Gauge,
                  title: "Load & Power Quality Analytics",
                  desc: "AI-driven analytics for power factor, harmonics, load imbalance, and demand forecasting.",
                },
                {
                  icon: Cpu,
                  title: "IoT Gateway Integration",
                  desc: "Seamless data collection through Frinso’s industrial IoT devices and RTUs.",
                },
                {
                  icon: Factory,
                  title: "Industrial EMS Deployment",
                  desc: "Custom EMS for manufacturing, utility, and facility-level energy efficiency projects.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                System Architecture
              </h2>
              <p className="text-gray-600">
                Frinso’s architecture connects IoT-enabled meters, DG & solar sensors,
                and gateways to a centralized cloud. The dashboard integrates energy
                parameters, fuel data, and predictive analytics with automated control
                capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/energy-power-architecture.png"
                alt="System Architecture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20 bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Energy SCADA & Analytics Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Unified real-time visualization of all energy streams — grid, DG, solar,
              and storage — with alerts, historical data, and AI-based recommendations.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/energy-power-dashboard.png"
                alt="Energy Power Dashboard"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "End-to-end visibility across all energy assets",
                "Reduced fuel and energy losses with real-time tracking",
                "Proactive maintenance and fault prediction",
                "Compliance-ready reports for sustainability goals",
                "Integrates with existing BMS, PLC, and SCADA systems",
                "Supports multi-site, multi-source energy ecosystems",
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
