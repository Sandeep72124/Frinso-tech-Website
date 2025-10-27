"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Thermometer,
  Lightbulb,
  Wind,
  Activity,
  Gauge,
  Cpu,
  Wifi,
} from "lucide-react";

export default function BMSSolution() {
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
            Building Management System (BMS)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Frinso’s intelligent BMS solutions automate and optimize building utilities —
            ensuring comfort, safety, and energy efficiency through real-time IoT control.
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
                Smart Building Operations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s Building Management System connects HVAC, lighting, power,
                and water utilities into a single intelligent platform. Our IoT-based
                architecture reduces operational costs while improving occupant
                comfort and sustainability across corporate, commercial, and smart
                infrastructure buildings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/bms-overview.png"
                alt="BMS Overview"
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
              BMS Core Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Thermometer,
                  title: "HVAC Automation",
                  desc: "Smart temperature and humidity control with predictive energy management.",
                },
                {
                  icon: Lightbulb,
                  title: "Smart Lighting",
                  desc: "Automated lighting schedules with occupancy and daylight sensors.",
                },
                {
                  icon: Gauge,
                  title: "Energy Monitoring",
                  desc: "Comprehensive real-time monitoring of power, fuel, and water usage.",
                },
                {
                  icon: Wind,
                  title: "Air Quality Management",
                  desc: "Indoor air quality sensors and automatic ventilation adjustment.",
                },
                {
                  icon: Cpu,
                  title: "IoT Edge Control",
                  desc: "Edge-enabled controllers for rapid response and low latency.",
                },
                {
                  icon: Wifi,
                  title: "Centralized SCADA Integration",
                  desc: "Remote visibility and control through unified Frinso SCADA systems.",
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

        {/* Architecture */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                Connected Building Architecture
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The BMS architecture integrates smart sensors, controllers, and gateways
                to manage all building subsystems. From local automation at the edge
                to cloud analytics — Frinso ensures resilience and scalability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/bms-architecture.png"
                alt="BMS Architecture"
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
              Centralized BMS Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Real-time insights on building energy, HVAC, lighting, and air quality —
              accessible anytime via the Frinso BMS Dashboard.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bms-dashboard.png"
                alt="BMS Dashboard"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-8">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Reduced energy and utility costs",
                "Improved occupant comfort and safety",
                "Automated control with IoT integration",
                "Centralized monitoring for all assets",
                "Better maintenance through real-time alerts",
                "Enhanced sustainability and ESG compliance",
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
