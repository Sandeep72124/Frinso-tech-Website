"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PredictiveAIMaintenancePage() {
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
            Predictive Maintenance AI Tools
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            AI-driven analytics platform that{" "}
            <span className="font-semibold">predicts equipment failures, optimizes maintenance schedules,</span>{" "}
            and ensures operational uptime using real-time IoT sensor data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/predictive-ai-overview.jpg"
            alt="Predictive Maintenance Overview"
            width={800}
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
              Key AI Features
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🧠 Machine learning algorithms detect anomalies in sensor data.</li>
              <li>📊 Predicts equipment failures before they happen — reducing downtime.</li>
              <li>⚙️ Integrates with vibration, temperature, current, and flow sensors.</li>
              <li>📡 Works with Frinso IoT Gateways (F1, F6, F10) for real-time analytics.</li>
              <li>📈 AI dashboards for asset performance and condition tracking.</li>
              <li>🛠️ Auto-generate maintenance alerts and service schedules.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/predictive-ai-dashboard.jpg"
              alt="Predictive Maintenance Dashboard"
              width={520}
              height={350}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-8"
        >
          How It Works
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-gray-700 px-6">
          {[
            { title: "1️⃣ Data Collection", desc: "Sensors collect real-time vibration, temperature, and current data." },
            { title: "2️⃣ Data Processing", desc: "IoT gateways preprocess and transmit data to the AI engine." },
            { title: "3️⃣ AI Prediction", desc: "ML algorithms identify early signs of degradation or faults." },
            { title: "4️⃣ Action & Insights", desc: "System generates alerts and visual reports for preventive action." },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-sky-700 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Image
            src="/images/predictive-ai-architecture.jpg"
            alt="Predictive Maintenance AI Architecture"
            width={850}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-sky-700 mb-6"
        >
          Benefits of Predictive Maintenance
        </motion.h3>
        <div className="max-w-4xl mx-auto text-gray-600 space-y-3">
          <p>✅ Reduce unplanned downtime by up to 40%.</p>
          <p>✅ Extend equipment lifespan through data-driven insights.</p>
          <p>✅ Save maintenance costs by scheduling only when needed.</p>
          <p>✅ Improve worker safety with predictive fault detection.</p>
          <p>✅ Integrate seamlessly with Frinso EMS and SCADA systems.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/predictive-ai-usecase.jpg"
            alt="Predictive Maintenance Use Case"
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
          Bring Intelligence to Maintenance Operations
        </motion.h3>
        <p className="text-white/90 mb-6">
          Integrate Frinso’s AI-driven predictive tools with your IoT and SCADA setup to prevent failures before they happen.
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
