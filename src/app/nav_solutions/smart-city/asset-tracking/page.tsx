"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Cpu, Satellite, BarChart3, Cloud } from "lucide-react";

export default function SmartAssetTracking() {
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
            Smart Asset Tracking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Real-time tracking and management of assets using IoT-enabled sensors,
            geolocation, and predictive analytics for improved operational visibility.
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
                Real-Time Asset Monitoring
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s Smart Asset Tracking solution enables live monitoring of
                critical assets, machinery, and infrastructure. Using IoT sensors
                and GPS technology, it ensures asset safety, utilization efficiency,
                and maintenance prediction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/smart-asset-tracking-overview.png"
                alt="Asset Tracking Overview"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "GPS-Based Real-Time Location",
                  desc: "Monitor live geolocation of assets and equipment in the field.",
                },
                {
                  icon: Cpu,
                  title: "IoT Sensor Integration",
                  desc: "Sensors for vibration, temperature, and power data monitoring.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Analytics",
                  desc: "Comprehensive insights into asset efficiency and uptime.",
                },
                {
                  icon: Satellite,
                  title: "Cloud Connectivity",
                  desc: "Seamless cloud synchronization with dashboards and alerts.",
                },
                {
                  icon: Cloud,
                  title: "AI Predictive Insights",
                  desc: "Preventive maintenance alerts using machine learning models.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
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
                System Architecture
              </h2>
              <p className="text-gray-600">
                The system uses IoT edge devices connected to sensors, GPS modules,
                and cloud platforms. Real-time asset data is visualized through
                Frinso’s Smart City Dashboard, integrated with alert management and
                AI modules.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/smart-asset-architecture.png"
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
            <h2 className="text-3xl font-bold mb-6">Real-Time Dashboard</h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Centralized cloud dashboard displaying live data, asset tracking maps,
              performance analytics, and predictive alerts — accessible across web and mobile.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/smart-asset-dashboard.png"
                alt="Asset Tracking Dashboard"
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
                "Improved visibility of assets and equipment",
                "Reduced operational costs with preventive alerts",
                "Enhanced decision-making via data analytics",
                "Reduced downtime and theft risk",
                "Streamlined asset maintenance scheduling",
                "Seamless integration with Smart City Infrastructure",
              ].map((b, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-sky-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-700">{b}</p>
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
