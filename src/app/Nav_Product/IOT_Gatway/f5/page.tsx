"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function F5Page() {
  return (
    <>
    <Navbar/>
    <main className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-sky-700">
            F5 Multiprotocol IoT Gateway
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Compact, DIN-rail/field-mountable gateway for fast integration of{" "}
            <span className="font-semibold">MODBUS devices, pulses, and analog I/O</span>—built for
            water, energy, DG and building automation projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/f5-device.jpg" // add your image later
            alt="F5 IoT Gateway"
            width={640}
            height={420}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🌐 MODBUS RTU/TCP, MQTT, HTTPs — plug-and-play with meters & PLCs.</li>
              <li>🔌 I/O mix: 4×DI (pulse up to 5 kHz), 2×DO (relay), 4×AI (4–20 mA / 0–10 V).</li>
              <li>📶 Connectivity: RS485/RS232, Ethernet, 4G/LTE, optional Wi-Fi/BLE.</li>
              <li>🧠 Edge logic, local buffering & store-and-forward to cloud/SCADA.</li>
              <li>🛰️ Optional GPS for mobile assets and run-hour logging for DG sets.</li>
              <li>🛡️ Industrial build: surge protection, watchdog, OTA updates.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/f5-dashboard.jpg" // add your image later
              alt="F5 Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
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
                  <td className="p-4 font-medium text-gray-700">CPU & Memory</td>
                  <td className="p-4">ARM-based edge controller, 256MB RAM, 8GB Flash</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Interfaces</td>
                  <td className="p-4">RS485, RS232, Ethernet 10/100, USB (service)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">I/O</td>
                  <td className="p-4">4×DI (pulse), 2×DO (relay 30V/1A), 4×AI (4–20 mA / 0–10V)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Wireless</td>
                  <td className="p-4">4G/LTE Cat-1, NB-IoT (opt.), Wi-Fi/BLE (opt.)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Protocols</td>
                  <td className="p-4">MODBUS RTU/TCP, MQTT, HTTPs, NTP, TLS 1.2</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">Power</td>
                  <td className="p-4">9–36 VDC, <span className="whitespace-nowrap">≤3 W</span>, reverse-polarity protected</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Enclosure</td>
                  <td className="p-4">DIN-rail / IP65 field box, −20°C to +70°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Built for Water, Energy & DG Monitoring
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Connect flow/energy meters, DG controllers, pump panels and PLCs to real-time
          dashboards with alerts, reports and automation rules.
        </p>
        <div className="flex justify-center">
          <Image
            src="/f5-usecase.jpg" // add your image later
            alt="F5 Use Cases"
            width={800}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Deploy F5 for Fast, Reliable Integrations
        </motion.h3>
        <p className="text-white/90 mb-6">
          Get your devices online with secure cloud connectivity and edge intelligence.
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
