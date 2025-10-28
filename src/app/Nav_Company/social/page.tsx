"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeartHandshake, Leaf, Globe2, Droplets, Recycle, Users } from "lucide-react";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function SocialImpactPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/social-impact-bg.jpg"
          alt="Frinso Social Impact"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#081420]/90"></div>

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
            Empowering Change, Sustainably
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-white/85 leading-relaxed"
          >
            Frinso Technologies is committed to building a sustainable, inclusive,
            and connected world — where technology drives environmental and social good.
          </motion.p>
        </motion.div>
      </section>

      {/* IMPACT METRICS */}
      <section className="bg-[#0b1e32] py-20 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-sky-300 mb-12"
          >
            Our Positive Footprint
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: "150+", label: "Rural Villages Digitally Connected" },
              { num: "30%", label: "Water Wastage Reduced" },
              { num: "20+", label: "CSR Partnerships & NGO Collaborations" },
              { num: "100%", label: "Renewable-Energy Powered Facilities" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="text-4xl font-bold text-sky-400">{stat.num}</div>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INITIATIVES SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#0b1e32] to-[#081420] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-sky-300 text-center mb-16"
          >
            Initiatives for a Better Tomorrow
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Droplets,
                title: "Smart Water for All",
                desc: "IoT-based water management systems deployed in villages to ensure equitable access to clean water.",
              },
              {
                icon: Leaf,
                title: "Green Infrastructure",
                desc: "Low-power devices, solar-based telemetry, and environment-friendly production practices.",
              },
              {
                icon: Globe2,
                title: "Digital Inclusion",
                desc: "Training and capacity-building for local operators to adopt smart water and energy management systems.",
              },
              {
                icon: Recycle,
                title: "Circular Economy",
                desc: "Encouraging reuse and recycling through data-driven insights on industrial water and energy use.",
              },
              {
                icon: HeartHandshake,
                title: "Community Collaboration",
                desc: "Partnering with NGOs and CSR programs to deliver measurable impact in urban and rural areas.",
              },
              {
                icon: Users,
                title: "Education & Awareness",
                desc: "Workshops and training programs to promote sustainable habits and technical skill development.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all group"
              >
                <Icon className="h-8 w-8 mb-4 text-sky-300 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/80 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0a192f] py-20 text-white text-center border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl font-semibold text-sky-300 mb-4">
            Join Us in Making an Impact
          </h2>
          <p className="text-white/80 mb-8">
            Partner with us on CSR, water conservation, or clean energy projects.
            Let’s build technology that transforms lives and sustains the planet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
          >
            Get Involved
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
