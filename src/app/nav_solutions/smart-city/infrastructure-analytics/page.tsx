"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  Building,
  Cpu,
  Database,
  Radar,
  Activity,
  Gauge,
  LineChart,
} from "lucide-react";

export default function SmartInfrastructureAnalytics() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-800 to-indigo-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/data-bg.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Smart Infrastructure Analytics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Advanced AI and IoT-driven analytics for asset performance,
              predictive maintenance, and operational efficiency across
              infrastructure networks.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-purple-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            The <b>Frinso Infrastructure Analytics Platform</b> empowers smart
            cities and industries to manage their physical infrastructure
            through data. By integrating IoT sensors, real-time monitoring, and
            AI-based insights, it transforms raw data into actionable decisions.
          </motion.p>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
                  title: "Data-Driven Insights",
                  desc: "Unified dashboards for infrastructure KPIs and sensor data.",
                },
                {
                  icon: <Radar className="w-8 h-8 text-purple-600" />,
                  title: "Predictive Maintenance",
                  desc: "AI models predict faults in pipelines, transformers, or pumps.",
                },
                {
                  icon: <Gauge className="w-8 h-8 text-purple-600" />,
                  title: "Performance Benchmarking",
                  desc: "Compare operational efficiency across multiple assets.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-purple-600" />,
                  title: "Edge-to-Cloud Integration",
                  desc: "Real-time data from IoT gateways securely flows to analytics cloud.",
                },
                {
                  icon: <Database className="w-8 h-8 text-purple-600" />,
                  title: "Big Data Storage",
                  desc: "Centralized scalable storage for historical and live data streams.",
                },
                {
                  icon: <LineChart className="w-8 h-8 text-purple-600" />,
                  title: "Smart Dashboards",
                  desc: "Interactive graphs, trends, and operational health reports.",
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
            className="text-3xl font-semibold text-purple-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/infrastructure-architecture.png"
              alt="Smart Infrastructure Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• IoT sensors deployed across infrastructure assets.</li>
              <li>• Edge devices preprocess and send data to analytics cloud.</li>
              <li>• Centralized dashboard visualizes real-time performance.</li>
              <li>• AI models detect early signs of degradation or inefficiency.</li>
              <li>• Alerts and maintenance schedules are automatically generated.</li>
            </ul>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-16 border-t">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-purple-700 mb-6"
            >
              Analytics Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Real-time visualization of energy, water, and operational metrics
              for multiple facilities. Compare asset health and predict failures
              before they occur.
            </motion.p>

            <div className="flex justify-center">
              <Image
                src="/images/infrastructure-dashboard.png"
                alt="Infrastructure Analytics Dashboard"
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
              className="text-3xl font-semibold text-purple-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "Centralized visibility across all infrastructure assets",
                "Early fault detection with predictive algorithms",
                "Reduced downtime through proactive maintenance",
                "Optimized operational efficiency and cost savings",
                "Historical trend analysis and benchmarking",
                "Seamless integration with SCADA and EMS systems",
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
