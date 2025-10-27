"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Leaf,
  Cloud,
  Gauge,
  Droplets,
  Activity,
  ShieldCheck,
  Cpu,
  AlertTriangle,
} from "lucide-react";

export default function EnvironmentalMonitoring() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-700 to-emerald-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/eco-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Environmental Monitoring & Compliance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Real-time monitoring of air, water, and effluent quality to ensure
              compliance with CPCB and SPCB environmental norms.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-green-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            The <b>Frinso Environmental Monitoring Platform</b> enables
            industries and smart cities to track ambient air quality, emission
            levels, and wastewater discharge in real-time. It integrates sensors
            with <b>IoT edge gateways</b> and provides secure cloud dashboards
            compliant with <b>CPCB/OLEMS</b> and <b>SPCB</b> regulations.
          </motion.p>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-green-700 mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-8 h-8 text-green-600" />,
                  title: "Air Quality Monitoring",
                  desc: "Track PM2.5, PM10, SO₂, NOx, and CO in real-time.",
                },
                {
                  icon: <Droplets className="w-8 h-8 text-green-600" />,
                  title: "Effluent & Water Quality",
                  desc: "Monitor pH, DO, COD, BOD, and TSS levels continuously.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-green-600" />,
                  title: "CPCB/OLEMS Integration",
                  desc: "Seamless API-based connectivity for real-time regulatory reporting.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-green-600" />,
                  title: "IoT Edge Data Collection",
                  desc: "Edge devices preprocess and transmit data securely over 4G/LTE.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                  title: "Compliance Alerts",
                  desc: "Instant alerts when thresholds exceed environmental norms.",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-green-600" />,
                  title: "Predictive Insights",
                  desc: "AI-based trend analysis to predict potential violations.",
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
            className="text-3xl font-semibold text-green-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/environment-architecture.png"
              alt="Environmental Monitoring Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT-enabled analyzers collect air and effluent data.</li>
              <li>• Edge gateway transmits readings to central cloud.</li>
              <li>• Real-time dashboards visualize environmental metrics.</li>
              <li>• CPCB/OLEMS API integration ensures live data sync.</li>
              <li>• Automated reporting ensures regulatory compliance.</li>
            </ul>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="bg-gradient-to-br from-green-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-green-700 mb-6"
            >
              Real-Time Compliance Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Visualize and analyze air and water quality across multiple
              facilities. Generate automated compliance reports and trend
              analytics.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/environment-dashboard.png"
                alt="Environmental Dashboard"
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
              className="text-3xl font-semibold text-green-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "Continuous air and water quality monitoring",
                "Compliant with CPCB / OLEMS guidelines",
                "Early detection of pollution level breaches",
                "Centralized dashboard for all plants",
                "Custom alerts for environmental parameters",
                "Supports smart city and industrial EMS frameworks",
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
