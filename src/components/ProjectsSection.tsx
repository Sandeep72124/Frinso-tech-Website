"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "💧 Water Management Projects",
      desc: "Smart automation for WTP, STP, Borewells & Distribution — compliant with JJM, AMRUT 2.0, and CGWA norms.",
      href: "/Nav_Project/water",
      img: "/water.png",
    },
    {
      title: "⚡ Energy Management System (EMS)",
      desc: "Comprehensive energy analytics for industries, smart buildings, and water utilities — monitor, optimize, save.",
      href: "/Nav_Project/energy_manage",
      img: "/energy.jpg",
    },
    {
      title: "🌬️ HVAC Monitoring & Automation",
      desc: "IoT-based HVAC monitoring for chillers, AHUs, and cooling systems — predictive maintenance & energy efficiency.",
      href: "/Nav_Project/hvac",
      img: "/hvac.jpg",
    },
    {
      title: "☀️ Solar SCADA & Remote Monitoring",
      desc: "Smart solar dashboards for plant efficiency, inverter control, and energy yield analytics in real time.",
      href: "/Nav_Project/solar",
      img: "/solar.png",
    },
    {
      title: "🏢 Building Management System (BMS)",
      desc: "Unified monitoring of lighting, DGs, HVAC, and utilities for smart buildings and corporate infrastructures.",
      href: "/Nav_Project/building",
      img: "/building.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section
      className="relative py-28 bg-white text-gray-800 overflow-hidden"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-sky-700">
            Our Key Projects & Deployments
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore Frinso’s smart automation projects — integrating IoT, SCADA,
            and analytics across water, energy, HVAC, solar, and building sectors.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow:
                  "0 12px 28px rgba(56,189,248,0.25), 0 4px 10px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-sky-600/10 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-700 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-500 transition"
                >
                  View Project →
                </Link>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-200/30 to-transparent blur-md"></div>
    </section>
  );
}
