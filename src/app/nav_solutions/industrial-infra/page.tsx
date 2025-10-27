"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  Workflow,
  BarChart3,
  Server,
  Gauge,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function IndustrialInfraSolutions() {
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
            Industrial & Infrastructure Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Revolutionizing industrial ecosystems with IoT, SCADA, and AI-based insights
            — enhancing reliability, energy efficiency, and operational intelligence.
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
                Smart Factories and Connected Infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso enables end-to-end digitization of industrial plants, integrating
                sensors, PLCs, and controllers into a unified, real-time dashboard. With
                advanced analytics and AI-driven insights, we help industries optimize
                energy, predict failures, and automate control processes for maximum
                uptime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/industrial-infra-overview.png"
                alt="Industrial Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-gradient-to-r from-cyan-50 to-sky-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Industrial IoT Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Factory,
                  title: "Smart Factory SCADA",
                  desc: "Monitor and control complex production lines with real-time visibility and automated actions.",
                },
                {
                  icon: Gauge,
                  title: "Energy & Utility Optimization",
                  desc: "Integrate power, HVAC, and utility data for predictive load balancing and efficiency.",
                },
                {
                  icon: Workflow,
                  title: "Process Automation",
                  desc: "Seamless connection between PLCs, RTUs, and IoT sensors for adaptive control logic.",
                },
                {
                  icon: BarChart3,
                  title: "Data Analytics & Reporting",
                  desc: "AI-powered analytics for downtime, OEE, and predictive maintenance alerts.",
                },
                {
                  icon: Cpu,
                  title: "Edge Intelligence",
                  desc: "On-premise data processing through Frinso’s industrial IoT gateways for faster decisions.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliability & Compliance",
                  desc: "Ensure operational safety with fault-tolerant systems and environmental compliance reports.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-sky-500 mx-auto mb-3" />
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
                Our industrial IoT architecture bridges sensors, controllers, and edge
                devices with a cloud-driven analytics layer. The solution supports
                Modbus, MQTT, and OPC-UA for interoperability across different industrial
                ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/industrial-infra-architecture.png"
                alt="Industrial Architecture"
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
              Industrial Analytics Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Get a unified dashboard for production performance, energy use, and
              predictive maintenance — tailored for multi-site plants.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/industrial-infra-dashboard.png"
                alt="Industrial Dashboard"
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
                "Centralized visibility of all industrial assets",
                "Reduced downtime with predictive maintenance",
                "Improved OEE and operational transparency",
                "IoT-driven automation and data-driven insights",
                "Seamless SCADA and PLC integration",
                "Compliant with global industrial standards",
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
