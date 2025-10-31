"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MeterMechanicalPage() {
  return (
    <>
    <Navbar/>
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-sky-700">
            Pulse-Based Mechanical Water Meter
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Smart mechanical water meter equipped with{" "}
            <span className="font-semibold">pulse output and IoT compatibility</span> for
            real-time consumption tracking, perfect for{" "}
            <span className="font-semibold">residential, ESR, and JJM applications.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/mech-watermeter.jpg"
            alt="Pulse-Based Mechanical Water Meter"
            width={700}
            height={450}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>💧 Multi-jet / Woltman type mechanical meter with pulse output.</li>
              <li>🔌 1 pulse per liter or configurable resolution for IoT data loggers.</li>
              <li>⚙️ Compatible with Frinso F1, F10, and battery-based gateways.</li>
              <li>📊 Suitable for domestic, commercial, and bulk water connections.</li>
              <li>🌐 Integrates seamlessly with SCADA and JJM-compliant dashboards.</li>
              <li>🛡️ Rugged brass or composite body with anti-tamper seal design.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/mech-dashboard.jpg"
              alt="Pulse Water Meter Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-8"
        >
          Technical Specifications
        </motion.h2>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Type</td>
                <td className="p-4">Multi-jet / Woltman Mechanical</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Sizes Available</td>
                <td className="p-4">DN15 – DN300</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Accuracy</td>
                <td className="p-4">Class B / Class C as per ISO 4064 / IS 779</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Output</td>
                <td className="p-4">Pulse Output (1 pulse/L or as configured)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Material</td>
                <td className="p-4">Brass / Composite Polymer</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700">Protection</td>
                <td className="p-4">IP68 with Anti-Tamper Seal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Applications
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Functional Household Tap Connection (FHTC) water metering.</p>
          <p>✅ ESR and distribution zone inlet/outlet metering.</p>
          <p>✅ Industrial water audit and consumption tracking.</p>
          <p>✅ Integration with JJM, AMRUT 2.0, and Smart City dashboards.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/mech-usecase.jpg"
            alt="Mechanical Water Meter Use Case"
            width={850}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Make Mechanical Meters Smart
        </motion.h3>
        <p className="text-white/90 mb-6">
          Enable real-time pulse data capture and cloud-based water analytics with Frinso IoT integration.
        </p>
        <Link
          href="/demo"
          className="inline-block rounded-lg bg-white text-sky-700 px-6 py-3 font-medium hover:bg-sky-100 hover:scale-105 transition"
        >
          Request Demo
        </Link>
      </section>
    </main>
    <Footer/>
    </>
  );
}
