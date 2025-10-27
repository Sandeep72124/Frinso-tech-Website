"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MeterEMPage() {
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
            Electromagnetic Water Flowmeter
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A high-precision, IoT-ready electromagnetic flowmeter designed for{" "}
            <span className="font-semibold">municipal water supply, industrial flow measurement,</span> 
            and <span className="font-semibold">process automation.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/em-flowmeter.jpg"
            alt="Electromagnetic Water Flowmeter"
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
            <h2 className="text-3xl font-bold text-sky-700 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>💧 Highly accurate measurement (±0.5%) for conductive liquids.</li>
              <li>📈 Suitable for pipe diameters DN10 to DN1000.</li>
              <li>⚙️ No moving parts – zero pressure loss and long life.</li>
              <li>🔌 Outputs: 4–20 mA, Pulse, MODBUS RTU, and RS485 communication.</li>
              <li>🌐 Seamless integration with Frinso IoT Gateways and SCADA.</li>
              <li>🧠 Inbuilt totalizer, self-diagnostic functions, and tamper detection.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/em-meter-dashboard.jpg"
              alt="Flowmeter Dashboard"
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
                <td className="p-4 font-medium text-gray-700">Flow Range</td>
                <td className="p-4">0.05 – 10 m/s (velocity range)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Accuracy</td>
                <td className="p-4">±0.5% of reading</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Output Signal</td>
                <td className="p-4">4–20 mA, Pulse, RS485 MODBUS RTU</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Power Supply</td>
                <td className="p-4">24 VDC / 230 VAC</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Ingress Protection</td>
                <td className="p-4">IP68 for sensor, IP65 for transmitter</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700">Communication</td>
                <td className="p-4">MODBUS RTU / IoT Gateway ready</td>
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
          <p>✅ Water supply and wastewater treatment plants.</p>
          <p>✅ Industrial process flow measurement and batching.</p>
          <p>✅ Irrigation and smart agriculture systems.</p>
          <p>✅ Integration with SCADA, BMS, and remote monitoring systems.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/em-flowmeter-usecase.jpg"
            alt="Flowmeter Use Case"
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
          Empower Your Flow Measurement with IoT
        </motion.h3>
        <p className="text-white/90 mb-6">
          Integrate electromagnetic meters with Frinso gateways for live flow analytics, 
          alarms, and predictive insights.
        </p>
        <Link
          href="/contact"
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
