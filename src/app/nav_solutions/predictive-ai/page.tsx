"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Activity, BrainCircuit, BarChart3, Settings2, AlertTriangle } from "lucide-react";

export default function PredictiveMaintenanceAI() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-r from-sky-700 via-indigo-600 to-cyan-600 text-white">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Predictive Maintenance AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            AI-powered predictive insights for industrial systems, reducing downtime,
            optimizing performance, and extending equipment life through real-time
            IoT data analytics.
          </motion.p>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                AI-Powered Predictive Monitoring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s Predictive Maintenance platform uses machine learning models
                trained on real-time sensor data — vibration, temperature, pressure,
                current, and energy metrics — to forecast potential equipment failures
                before they occur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/predictive-overview.png"
                alt="Predictive Maintenance Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Core AI Capabilities */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Core Capabilities of Frinso Predictive AI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Anomaly Detection",
                  desc: "Detects abnormal sensor readings or patterns in real time using AI-based models.",
                },
                {
                  icon: BrainCircuit,
                  title: "Failure Prediction",
                  desc: "Predicts upcoming mechanical or electrical failures using time-series data.",
                },
                {
                  icon: Cpu,
                  title: "Equipment Health Scoring",
                  desc: "Assigns a live 'Health Index' to each connected asset for quick insights.",
                },
                {
                  icon: BarChart3,
                  title: "Trend Analytics",
                  desc: "Correlates multi-sensor data to identify degradation patterns over time.",
                },
                {
                  icon: Settings2,
                  title: "Root Cause Analysis",
                  desc: "AI highlights probable root causes for failures and suggests maintenance actions.",
                },
                {
                  icon: AlertTriangle,
                  title: "Proactive Alerts",
                  desc: "Automatic SMS, email, and dashboard notifications before critical thresholds.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <item.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
                Predictive AI Architecture
              </h2>
              <p className="text-gray-600">
                The architecture combines IoT gateways, sensor arrays, and AI-powered
                cloud analytics. Edge data is pre-processed for latency reduction, then
                fed into cloud models that continuously retrain based on actual outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/predictive-architecture.png"
                alt="Predictive Maintenance Architecture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Minimized unplanned downtime",
                "Increased equipment lifespan",
                "Optimized maintenance scheduling",
                "Reduced maintenance costs",
                "Enhanced operational efficiency",
                "Real-time fault alerts & analytics",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl backdrop-blur-md transition"
                >
                  <p className="text-blue-100">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">
              Predictive AI Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-10">
              Access real-time dashboards with anomaly charts, live health
              indicators, and trend-based failure prediction graphs across
              assets — all powered by AI and IoT analytics.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/predictive-dashboard.png"
                alt="Predictive Maintenance Dashboard"
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
