"use client";

import { motion } from "framer-motion";
import { Target, Globe2, Zap, HeartHandshake, Lightbulb } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/vision-bg.jpg"
          alt="Vision and Mission"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#081420]/90"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-sky-400"
          >
            Our Vision & Mission
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-white/85 leading-relaxed"
          >
            Empowering sustainable infrastructure through connected intelligence — bridging technology, environment, and communities.
          </motion.p>
        </motion.div>
      </section>

      {/* VISION SECTION */}
      <section className="bg-[#0b1e32] text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
              Vision
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              To become a global leader in sustainable and connected infrastructure, enabling
              smart cities, industries, and communities with real-time IoT and analytics-driven
              solutions.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Transforming water, energy, and environmental management.",
                "Building technology that empowers data-driven governance.",
                "Creating intelligent, self-sustaining ecosystems.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-white/85"
                >
                  <Target className="text-sky-400 h-5 w-5 mt-1" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-sky-400/20 via-transparent to-transparent blur-3xl" />
            <Image
              src="/vision.jpeg"
              alt="Vision Graphic"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-white/10 object-cover relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#081420] text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            className="order-2 md:order-1 relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-sky-400/25 via-transparent to-transparent blur-3xl" />
            <Image
              src="/mission.png"
              alt="Mission Graphic"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-white/10 object-cover relative z-10"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
              Mission
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              To innovate and deliver integrated IoT and automation solutions that
              enhance efficiency, sustainability, and transparency across infrastructure systems.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Zap, text: "Develop robust IoT ecosystems that minimize resource wastage." },
                { icon: HeartHandshake, text: "Empower public utilities and private enterprises through collaboration." },
                { icon: Lightbulb, text: "Enable real-time visibility and intelligent decision-making." },
                { icon: Globe2, text: "Support India’s transition to smart, sustainable infrastructure." },
              ].map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-white/85"
                >
                  <Icon className="text-sky-400 h-5 w-5 mt-1" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0b1e32] text-center py-20 border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
            Building the Future, Sustainably
          </h2>
          <p className="text-white/85 mb-8">
            Every line of code, every deployed sensor, and every dashboard we create —
            brings us one step closer to a connected and sustainable tomorrow.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
