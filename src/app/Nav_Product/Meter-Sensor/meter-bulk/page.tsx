"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MeterBulkPage() {
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
            Bulk Electromagnetic Flowmeter
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Industrial-grade <span className="font-semibold">high-diameter electromagnetic flowmeter</span> 
            engineered for large-scale water distribution, WTP/STP plants, and municipal supply monitoring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/bulk-flowmeter.jpg"
            alt="Bulk Flowmeter"
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
              <li>💧 Designed for large diameter pipelines (DN150 to DN2000).</li>
              <li>📏 High-accuracy measurement for treated and raw water applications.</li>
              <li>⚙️ Full-bore electromagnetic sensing with no obstruction or moving parts.</li>
              <li>📶 Outputs: 4–20 mA, Pulse, MODBUS RTU, RS485, and digital relay.</li>
              <li>🌐 Compatible with Frinso IoT gateways for real-time cloud monitoring.</li>
              <li>🛡️ IP68 field enclosure for buried or flooded installations.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/bulk-meter-dashboard.jpg"
              alt="Bulk Flowmeter Dashboard"
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
                <td className="p-4 font-medium text-gray-700">Pipe Diameter Range</td>
                <td className="p-4">DN150 – DN2000 (Custom on request)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Accuracy</td>
                <td className="p-4">±0.5% of reading</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Flow Velocity Range</td>
                <td className="p-4">0.03 – 10 m/s</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Communication</td>
                <td className="p-4">MODBUS RTU (RS485) / Pulse / 4–20 mA</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Liner Material</td>
                <td className="p-4">PTFE / Rubber / Neoprene (as per medium)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700">Ingress Protection</td>
                <td className="p-4">IP68 (Sensor) / IP65 (Transmitter)</td>
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
          <p>✅ Bulk water distribution and transmission mains.</p>
          <p>✅ WTP / STP inlet and outlet metering for SCADA integration.</p>
          <p>✅ Municipal and industrial water accounting and billing.</p>
          <p>✅ Monitoring and compliance for CGWA and Smart City projects.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/bulk-usecase.jpg"
            alt="Bulk Flowmeter Use Case"
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
          Digitize Bulk Water Measurement with IoT
        </motion.h3>
        <p className="text-white/90 mb-6">
          Monitor every liter in your distribution system with real-time analytics, remote alerts, and 
          predictive insights powered by Frinso SCADA.
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
