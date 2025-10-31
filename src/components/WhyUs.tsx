"use client";

import { motion } from "framer-motion";
import {
  Award,
  Droplets,
  Factory,
  Globe2,
  Users,
  Cpu,
} from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <Award className="w-7 h-7 text-yellow-400" />,
      bg: "from-yellow-400/30 to-orange-600/30",
      title: "11+ Years of Trust & Innovation",
      desc: "With over a decade of field-proven expertise and hundreds of installations still operational, Frinso ensures long-term reliability and unmatched service.",
    },
    {
      icon: <Droplets className="w-7 h-7 text-sky-400" />,
      bg: "from-sky-400/30 to-blue-600/30",
      title: "Pioneers of Water Automation in India",
      desc: "Frinso leads India’s water automation revolution — enabling clean, uninterrupted water 24×7 with intelligent monitoring, control, and sustainability.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-emerald-400" />,
      bg: "from-emerald-400/30 to-green-600/30",
      title: "Proudly Made in India",
      desc: "Every Frinso product is conceived, designed, and built in India — combining local innovation with world-class engineering for global infrastructure.",
    },
    {
      icon: <Factory className="w-7 h-7 text-purple-400" />,
      bg: "from-purple-500/30 to-indigo-700/30",
      title: "World-Class Infrastructure",
      desc: "With advanced R&D and manufacturing facilities, Frinso delivers precision-engineered IoT, SCADA, and AI-based automation systems.",
    },
    {
      icon: <Globe2 className="w-7 h-7 text-pink-400" />,
      bg: "from-pink-500/30 to-rose-700/30",
      title: "Global Reach, Local Excellence",
      desc: "Trusted across 9 countries, Frinso’s 'Made in India' IoT technologies meet international performance standards.",
    },
    {
      icon: <Users className="w-7 h-7 text-cyan-400" />,
      bg: "from-cyan-400/30 to-sky-700/30",
      title: "100+ Engineering & Software Experts",
      desc: "A dedicated team of 100+ engineers and developers transforming data into intelligence with IoT gateways, SCADA, and analytics solutions.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0a192f] via-[#1c2940] to-[#102542] overflow-hidden text-gray-100">
      {/* Floating Lights */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [1, 0.8, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center lg:items-start justify-between gap-14 z-10">
        {/* HEADER SECTION */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Reveal>
            <h2 className="text-4xl font-bold text-cyan-300 mb-4">Why Choose Us</h2>
            <p className="text-gray-200 mb-10 leading-relaxed max-w-2xl">
              <span className="font-semibold text-white">Made in India 🇮🇳. Built for the World.</span><br />
              Enabling digital transformation through innovation, intelligence, and impact.
            </p>
          </Reveal>
        </motion.div>

        {/* HIGHLIGHT CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {highlights.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
              className={`relative group rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg bg-white/10 hover:bg-white/20 transition-all duration-500 overflow-hidden`}
            >
              {/* Glow Border Animation */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${p.bg} blur-xl`}
              ></div>

              <div className="relative z-10 flex flex-col items-start gap-4">
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center shadow-inner`}>
                  {p.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 text-center mt-14 w-full max-w-4xl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-cyan-400/30 transition"
          >
            <h4 className="text-3xl font-bold text-cyan-300">11+</h4>
            <p className="text-gray-300 text-sm">Years of Expertise</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-cyan-400/30 transition"
          >
            <h4 className="text-3xl font-bold text-cyan-300">6M+</h4>
            <p className="text-gray-300 text-sm">People Served</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-cyan-400/30 transition"
          >
            <h4 className="text-3xl font-bold text-cyan-300">9</h4>
            <p className="text-gray-300 text-sm">Countries Reached</p>
          </motion.div>
        </div>

        {/* CTA BUTTON */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12"
        >
          <Link
            href="/Nav_Company/about"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-7 py-3 text-white font-semibold shadow-xl hover:shadow-cyan-400/40 transition-all"
          >
            Learn More About Us
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>

        {/* Tagline */}
        <p className="mt-10 text-gray-400 text-center italic text-sm">
          “Frinso — Building India’s Digital Infrastructure with Smart IoT Solutions.<br />
          Proudly Made in India, Built for the World.”
        </p>
      </div>
    </section>
  );
}
