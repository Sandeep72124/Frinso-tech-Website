"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Gauge, Wifi, Database, Bell, Cloud, Building2 } from "lucide-react";

export default function CGWASolution() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-700 to-blue-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/waterflow-pattern.svg')] bg-cover opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              CGWA Compliance IoT Solution
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              A turnkey IoT-based platform to automate data logging, reporting, and compliance for groundwater extraction as per CGWA norms.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-sky-700 mb-6 text-center"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            The <b>Frinso CGWA IoT Solution</b> provides automated online monitoring of groundwater abstraction,
            recharge, and discharge as per <b>Central Ground Water Authority</b> guidelines. It integrates
            <b> flow meters, piezometers, and DG controllers</b> through IoT telemetry units to deliver
            24×7 visibility, auto-reporting, and compliance uploads to the <b>CGWA server portal</b>.
          </motion.p>
        </section>

        {/* Key Components */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-sky-700 mb-10">
              Key Components
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Gauge className="w-8 h-8 text-sky-600" />,
                  title: "Digital Flow Meter",
                  desc: "Measures total water extraction with high precision and sends live flow data to the cloud.",
                },
                {
                  icon: <Database className="w-8 h-8 text-sky-600" />,
                  title: "Piezometer Sensor",
                  desc: "Monitors groundwater level variations and auto-logs depth data for CGWA reporting.",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-600" />,
                  title: "IoT Data Logger",
                  desc: "Frinso F1/F10 telemetry unit collects and transmits real-time sensor data over 4G.",
                },
                {
                  icon: <Wifi className="w-8 h-8 text-sky-600" />,
                  title: "Cloud Dashboard",
                  desc: "Centralized view of all borewells, flow data, and DG status on a single dashboard.",
                },
                {
                  icon: <Bell className="w-8 h-8 text-sky-600" />,
                  title: "Auto Alerts & Reports",
                  desc: "Automatic SMS/Email alerts for limit breaches and CGWA auto-upload reports.",
                },
                {
                  icon: <Building2 className="w-8 h-8 text-sky-600" />,
                  title: "DG Set Integration",
                  desc: "Monitors DG operation to ensure abstraction tracking even during power outages.",
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

        {/* Architecture Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-sky-700 mb-6 text-center"
          >
            System Architecture
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/images/cgwa-architecture.png"
              alt="CGWA Solution Architecture"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
            <ul className="space-y-3 text-gray-600 max-w-md">
              <li>• Flowmeter and piezometer connected to IoT data logger.</li>
              <li>• Data transmitted via 4G LTE to Frinso Cloud.</li>
              <li>• Real-time dashboard for site-wise monitoring.</li>
              <li>• Auto-upload to CGWA Server through API gateway.</li>
              <li>• Monthly & annual reports auto-generated.</li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-br from-sky-50 to-white py-16">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-sky-700 mb-6"
            >
              Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                "Automated CGWA compliance without manual intervention",
                "Eliminates human error in data reporting",
                "24×7 monitoring with alarms for excess abstraction",
                "Integrated DG & borewell tracking",
                "Completely CGWA format compliant dashboard",
                "API ready for direct data push to CGWA portal",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white rounded-xl border hover:shadow-md"
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
