"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Briefcase,
  Users2,
  Rocket,
  HeartHandshake,
  Send,
  Building2,
  LineChart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Founder’s Office Assistant",
      dept: "Sales, Operations & Accounts",
      desc: `Support the Founder’s Office in business operations, client communication, 
      and project coordination. Manage company accounts, GST filings, documentation, 
      and assist in business growth initiatives across departments.`,
      location: " Mumbai (Work from Office)",
    },
    {
      title: "Sales & Business Development Executive",
      dept: "IoT Solutions / Smart Infrastructure",
      desc: `Identify new business opportunities, develop and maintain client relationships, 
      and support pre-sales for IoT-based water, energy, and infrastructure projects. 
      Drive proposals, attend client meetings, and achieve monthly sales targets.`,
      location: " Mumbai (Work from Office)",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/career-bg.jpg"
          alt="Careers at Frinso"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#081420]/90" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-sky-400 drop-shadow-lg"
          >
            Join Our Mission
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-white/85 leading-relaxed"
          >
            Be part of the team building connected, sustainable, and intelligent
            infrastructure solutions across India.
          </motion.p>
        </motion.div>
      </section>

      {/* CULTURE SECTION */}
      <section className="bg-[#0b1e32] text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-center text-sky-300 mb-12"
          >
            Life at Frinso
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Users2,
                title: "Collaborative Team",
                desc: "We work across domains — from IoT hardware to cloud software — fostering creativity and growth.",
              },
              {
                icon: Rocket,
                title: "Fast Innovation",
                desc: "Build cutting-edge IoT solutions and scale them to real-world impact across utilities and industries.",
              },
              {
                icon: HeartHandshake,
                title: "Meaningful Work",
                desc: "Every project we build impacts lives — from sustainable water systems to smart energy grids.",
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                desc: "Upskill through mentorship, cross-functional exposure, and hands-on technology ownership.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:bg-sky-400/10 transition"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-sky-300 group-hover:text-sky-400 transition" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/80 text-sm leading-snug">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="bg-[#081420] text-white py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-center text-sky-300 mb-12"
          >
            Open Positions
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-400/40 hover:bg-sky-400/10 transition shadow-lg"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-cyan-300 group-hover:w-full transition-all duration-700" />
                <h3 className="text-xl font-semibold text-sky-300 mb-2">
                  {job.title}
                </h3>
                <p className="text-sky-200/80 text-sm mb-1">{job.dept}</p>
                <p className="text-white/80 mb-4">{job.desc}</p>
                <p className="text-sm text-white/70">📍 {job.location}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <a
              href="/apply"
              className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-500 px-8 py-4 rounded-xl font-medium text-white shadow-lg hover:scale-105 transition"
            >
              <Send className="w-5 h-5" />
              Apply Now – careers@frinsotech.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0b1e32] py-20 border-t border-white/10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-white/85 mb-8">
            If you’re passionate about IoT, energy, and sustainability, we’d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-xl transition shadow-lg hover:scale-105"
          >
            Contact Our HR Team
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
