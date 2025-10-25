"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F1Page() {
  return (
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
            F1 IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Smart IoT Gateway designed for telemetry, RTU, and data logging — seamlessly integrating sensors, flow meters, and analytics dashboards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/f1-device.jpg"
            alt="F1 IoT Gateway"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li>🌐 Supports MODBUS RTU/TCP, MQTT, and HTTP protocols.</li>
              <li>⚙️ Compatible with water, energy, and industrial sensors.</li>
              <li>🔋 Low power consumption — suitable for remote installations.</li>
              <li>📶 2G/4G/NB-IoT connectivity for real-time telemetry.</li>
              <li>📊 Seamless integration with Frinso Real-Time Dashboard.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/f1-dashboard.jpg"
              alt="IoT Dashboard"
              width={500}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-sky-700 mb-8"
          >
            Technical Specifications
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-lg">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Communication</td>
                  <td className="p-4">RS485 / RS232 / Ethernet / 4G LTE</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Protocol</td>
                  <td className="p-4">MODBUS RTU, TCP/IP, MQTT</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">I/O Support</td>
                  <td className="p-4">4 Analog, 4 Digital, 1 Relay Output</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Power Supply</td>
                  <td className="p-4">9–36V DC</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Operating Temp</td>
                  <td className="p-4">-20°C to +70°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-4"
        >
          Ready to Deploy Smart IoT?
        </motion.h3>
        <p className="text-gray-600 mb-6">
          Connect your systems today with Frinso’s intelligent IoT & AI platforms.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-sky-600 text-white px-6 py-3 font-medium hover:bg-sky-500 hover:scale-105 transition"
        >
          Request Demo
        </Link>
      </section>
    </main>
  );
}
