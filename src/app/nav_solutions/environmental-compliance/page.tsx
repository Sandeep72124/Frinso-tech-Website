"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Leaf,
  Droplets,
  Cloud,
  Factory,
  Gauge,
  BarChart3,
  Recycle,
} from "lucide-react";

export default function EnvironmentalCompliance() {
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
            Environmental Compliance & OLEMS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            IoT-powered Online Environmental Monitoring System for CPCB, SPCB,
            and CGWA compliance. Real-time data reporting for air, water, and
            effluent parameters with integrated analytics.
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
                Real-Time Environmental Monitoring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Frinso OLEMS platform provides real-time environmental
                parameter monitoring for air, water, and effluent systems. It
                enables automatic data transfer to regulatory servers and
                supports historical trend analysis, ensuring proactive compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/environmental-overview.png"
                alt="Environmental Compliance Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Key Monitoring Parameters */}
        <section className="py-20 bg-gradient-to-r from-cyan-50 to-green-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Parameters Monitored by OLEMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Water Quality Monitoring",
                  desc: "Monitor pH, turbidity, TDS, COD, BOD, and flow rate in real time.",
                },
                {
                  icon: Cloud,
                  title: "Air Quality Monitoring",
                  desc: "Track particulate matter (PM10, PM2.5), CO2, SO2, NOx, and O3 levels.",
                },
                {
                  icon: Factory,
                  title: "Effluent & Emission Monitoring",
                  desc: "Ensure industrial discharge compliance with CPCB norms.",
                },
                {
                  icon: Gauge,
                  title: "Pressure & Flow Control",
                  desc: "Integrate digital flowmeters and pressure transmitters with IoT gateways.",
                },
                {
                  icon: Recycle,
                  title: "Wastewater Reuse Analytics",
                  desc: "Measure and analyze treated water quality and recycling ratios.",
                },
                {
                  icon: BarChart3,
                  title: "Compliance Reporting",
                  desc: "Automated CPCB data push, alerts, and daily reporting logs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <item.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
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
                OLEMS Architecture
              </h2>
              <p className="text-gray-600">
                The OLEMS architecture integrates industrial analyzers, PLCs,
                and IoT gateways that collect real-time environmental data from
                multiple locations. Data is securely transmitted to the Frinso
                cloud, visualized via dashboards, and automatically pushed to
                CPCB/SPCB servers as per guidelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/environmental-architecture.png"
                alt="OLEMS Architecture"
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
            <h2 className="text-3xl font-bold mb-6">OLEMS Dashboard</h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Centralized real-time dashboard for live pollutant readings,
              compliance logs, and anomaly alerts. Visualize environmental
              data with intuitive widgets, historical trends, and automated
              daily push reports to CPCB/SPCB servers.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/environmental-dashboard.png"
                alt="OLEMS Dashboard"
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
              Benefits of Frinso OLEMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Automated CPCB/SPCB data transmission",
                "Reduced manual reporting effort",
                "Real-time compliance tracking",
                "Multi-site data aggregation & control",
                "Custom analytics & alert notifications",
                "Improved transparency & audit readiness",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
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
