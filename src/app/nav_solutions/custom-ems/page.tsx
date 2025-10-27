"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MonitorSmartphone,
  BarChart3,
  Cpu,
  Cloud,
  ServerCog,
  Database,
  Lock,
  LineChart,
  Settings2,
} from "lucide-react";

export default function CustomEMSSCADASoftware() {
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
            Custom EMS / SCADA Software
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto text-lg text-blue-100"
          >
            Build your complete energy and process automation ecosystem with
            Frinso’s custom-built EMS and SCADA software — scalable, secure, and
            designed for water, solar, energy, and industrial projects.
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
                Unified Software for Intelligent Operations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Frinso’s EMS/SCADA software integrates IoT, energy meters, PLCs, and
                field sensors into one unified dashboard. Monitor energy flow,
                control distributed assets, automate operations, and access real-time
                analytics — all from a web-based, cloud-synced platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/custom-ems-overview.png"
                alt="Custom EMS Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-100 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-10">
              Key Features of Frinso EMS / SCADA
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MonitorSmartphone,
                  title: "Real-Time Visualization",
                  desc: "Live dashboards for monitoring critical parameters and trends across multiple sites.",
                },
                {
                  icon: Cpu,
                  title: "Automated Control Logic",
                  desc: "Remote start/stop, scheduling, and automation sequences integrated via PLC/RTU.",
                },
                {
                  icon: Cloud,
                  title: "Cloud & On-Premise Options",
                  desc: "Flexible deployment — choose between on-site or cloud-hosted solutions.",
                },
                {
                  icon: Lock,
                  title: "Secure Access & Roles",
                  desc: "Multi-level user authentication and data encryption ensure system integrity.",
                },
                {
                  icon: LineChart,
                  title: "Predictive Analytics",
                  desc: "AI-powered insights for performance optimization and preventive maintenance.",
                },
                {
                  icon: BarChart3,
                  title: "Energy Management",
                  desc: "Track power usage, load patterns, and efficiency metrics with real-time alerts.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <feature.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
                EMS / SCADA Architecture
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The architecture integrates multiple data acquisition points,
                including energy meters, PLCs, and edge devices. Data flows through
                IoT gateways into a central analytics layer, visualized through an
                intuitive dashboard and secured with modern protocols.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/custom-ems-architecture.png"
                alt="Custom EMS SCADA Architecture"
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
              Intelligent Dashboard for Data-Driven Control
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 mb-10">
              Access real-time insights across all utilities and systems from one
              dashboard — helping administrators make informed, actionable decisions
              instantly.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/custom-ems-dashboard.png"
                alt="EMS SCADA Dashboard"
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
                "Unified control for multi-site operations",
                "Flexible cloud or on-premise deployment",
                "Predictive alerts for downtime prevention",
                "Customizable reports and data analytics",
                "Integration with existing PLC / RTU systems",
                "24/7 secure remote accessibility",
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
