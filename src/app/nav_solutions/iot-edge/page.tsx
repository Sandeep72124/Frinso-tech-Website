"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Radio,
  Cpu,
  Network,
  Cloud,
  ServerCog,
  Wifi,
  Lock,
  Gauge,
} from "lucide-react";

export default function IoTEdgeSolution() {
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
            IoT Edge & Gateway Devices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Connect, collect, and control data seamlessly with Frinso’s Edge IoT
            Gateways — enabling real-time automation, analytics, and communication
            across any industrial or smart infrastructure network.
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
                Edge Computing for Real-Time Decisions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso IoT Edge Devices bridge field sensors and cloud systems by
                processing data locally, reducing latency, and enabling uninterrupted
                automation — even in remote or low-connectivity environments.  
                Designed for water, energy, industrial, and smart city applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/iot-edge-overview.png"
                alt="IoT Edge Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Device Capabilities */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-8">
              Key Capabilities of Frinso IoT Edge Devices
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Cpu,
                  title: "Edge Processing",
                  desc: "Compute and filter data locally to reduce bandwidth and improve response times.",
                },
                {
                  icon: Radio,
                  title: "Multi-Protocol Communication",
                  desc: "Supports MODBUS, MQTT, LoRa, 4G LTE, and BLE for universal field connectivity.",
                },
                {
                  icon: Network,
                  title: "Interoperable Integration",
                  desc: "Seamless integration with PLCs, SCADA, and third-party IoT dashboards.",
                },
                {
                  icon: Cloud,
                  title: "Hybrid Cloud Sync",
                  desc: "Automatic synchronization with cloud for data logging and visualization.",
                },
                {
                  icon: Lock,
                  title: "Secure Data Transmission",
                  desc: "End-to-end encryption with TLS, VPN, and access control mechanisms.",
                },
                {
                  icon: ServerCog,
                  title: "Plug & Play Configuration",
                  desc: "Pre-configured with Frinso Cloud Dashboard for instant deployment.",
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

        {/* Edge Architecture */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-sky-700 mb-4">
                Edge Device Architecture
              </h2>
              <p className="text-gray-600">
                The IoT Edge architecture integrates field sensors, data acquisition
                modules, and communication interfaces for real-time analytics.
                Frinso Edge gateways operate autonomously, caching data during outages
                and resyncing automatically when networks restore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/iot-edge-architecture.png"
                alt="IoT Edge Architecture"
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
              Edge Monitoring Dashboard
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              The Frinso IoT Dashboard visualizes live data streams, signal strength,
              device health, and field connectivity status in one unified control center.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/iot-edge-dashboard.png"
                alt="IoT Edge Dashboard"
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
                "Real-time field control and automation",
                "Reduced latency and cloud dependency",
                "Enhanced data security at edge",
                "Supports hybrid connectivity (4G/LAN/LoRa)",
                "Low power consumption for remote sites",
                "Seamless integration with SCADA & dashboards",
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
