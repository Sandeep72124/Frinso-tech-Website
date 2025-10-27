"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sun,
  Gauge,
  Cpu,
  Activity,
  Zap,
  Cloud,
  BarChart3,
  Battery,
} from "lucide-react";

export default function SolarPlantSCADA() {
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
            Solar Plant SCADA System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Empowering solar power generation with real-time IoT data, SCADA control,
            and analytics for optimized efficiency and predictive maintenance.
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
                Intelligent Monitoring & Control
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s Solar Plant SCADA enables seamless integration of solar
                inverters, string combiner boxes, energy meters, and weather sensors.
                With centralized real-time dashboards, operators can visualize generation
                trends, track performance ratios, and detect faults before downtime occurs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/solar-overview.png"
                alt="Solar Plant Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-r from-cyan-50 to-sky-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              SCADA System Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sun,
                  title: "Real-Time Solar Data",
                  desc: "Live monitoring of inverter output, panel performance, and solar radiation.",
                },
                {
                  icon: Gauge,
                  title: "Performance Analytics",
                  desc: "Compare energy generation KPIs and benchmark against expected outputs.",
                },
                {
                  icon: Activity,
                  title: "Fault Detection & Alerts",
                  desc: "Instant alerts for low generation, inverter trip, or sensor failure.",
                },
                {
                  icon: BarChart3,
                  title: "Energy Reporting",
                  desc: "Daily, monthly, and lifetime generation reports with export options.",
                },
                {
                  icon: Battery,
                  title: "Hybrid System Integration",
                  desc: "Monitor battery storage and energy balance in hybrid setups.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Dashboard Access",
                  desc: "Remotely access analytics via Frinso’s secure IoT cloud portal.",
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

        {/* System Architecture */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                End-to-End System Architecture
              </h2>
              <p className="text-gray-600">
                Frinso’s SCADA architecture bridges field-level devices — inverters,
                sensors, weather stations — with centralized servers through IoT gateways.
                This ensures secure communication, redundancy, and full O&M control for
                operators and EPC partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/solar-architecture.png"
                alt="Solar Architecture"
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
              Real-Time Solar SCADA Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              A single pane of glass for monitoring plant performance, environmental
              parameters, and predictive alerts — accessible across desktop and mobile.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/solar-dashboard.png"
                alt="Solar Dashboard"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Benefits of Frinso Solar SCADA
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Maximize solar yield with performance analytics",
                "Reduce downtime through real-time alerts",
                "Optimize maintenance with predictive insights",
                "Centralized control for multi-site plants",
                "Cloud access with secure data management",
                "Compliant with CEA & MNRE guidelines",
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
