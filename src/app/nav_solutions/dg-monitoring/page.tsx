"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Fuel,
  Activity,
  Gauge,
  Cpu,
  Server,
  Zap,
  BarChart3,
  Bell,
} from "lucide-react";

export default function DGMonitoring() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            DG Monitoring & Fuel Management System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            IoT-powered real-time monitoring of Diesel Generators with precise fuel tracking,
            runtime analytics, and alert mechanisms for operational efficiency.
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
                Intelligent DG Monitoring Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s DG Monitoring solution integrates sensors, IoT gateways, and SCADA dashboards
                to deliver a complete overview of generator health, runtime, and fuel consumption.
                The system minimizes manual intervention, ensures efficient operation, and prevents fuel pilferage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/dg-overview.png"
                alt="DG Monitoring Overview"
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
              Key Features of Frinso DG Monitoring
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Gauge,
                  title: "Real-Time Engine Parameters",
                  desc: "Live data from engine sensors including RPM, temperature, voltage, and current.",
                },
                {
                  icon: Fuel,
                  title: "Fuel Level & Consumption",
                  desc: "Monitor tank levels, refueling events, and detect anomalies like leakage or theft.",
                },
                {
                  icon: Activity,
                  title: "Load & Runtime Analytics",
                  desc: "Track load variation, engine runtime, and efficiency trends for performance optimization.",
                },
                {
                  icon: Bell,
                  title: "Alerts & Notifications",
                  desc: "Instant SMS/email alerts for fuel drop, low oil pressure, or over-temperature events.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Reports",
                  desc: "Automated reporting for energy output, fuel usage, and maintenance KPIs.",
                },
                {
                  icon: Server,
                  title: "Centralized IoT Cloud Dashboard",
                  desc: "Monitor multiple DG sets remotely with unified visualization and data control.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
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
                IoT & SCADA Architecture
              </h2>
              <p className="text-gray-600">
                The system architecture integrates the DG controller, IoT gateway, and fuel sensors
                with cloud SCADA. All parameters—engine health, fuel usage, alarms—are transmitted
                via 4G/LTE or LoRaWAN to the Frinso IoT platform for analytics and remote O&M.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/dg-architecture.png"
                alt="DG Architecture"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-20 bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Real-Time DG SCADA Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Visualize DG data across multiple locations with intuitive dashboards that provide
              operational insights, trends, and event tracking in real time.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/dg-dashboard.png"
                alt="DG Dashboard"
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
              Key Benefits of DG Monitoring & Fuel Management
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Reduce fuel theft and wastage with precise tracking",
                "Improve uptime with predictive maintenance alerts",
                "Monitor DG remotely across sites in one dashboard",
                "Automated reports for audit and compliance",
                "Enhance efficiency through performance analytics",
                "Seamless integration with Frinso SCADA platform",
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
