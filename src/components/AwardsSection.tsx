"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      icon: <Trophy className="text-amber-400 w-8 h-8" />,
      title: "UNIDO Industrial IoT Innovation Award",
      year: "2021",
      desc: "Recognized for sustainable IoT infrastructure and smart water automation solutions under UNIDO-GEF Global Cleantech Programme.",
    },
    {
      icon: <Star className="text-sky-400 w-8 h-8" />,
      title: "Startup India Recognition",
      year: "2020",
      desc: "Officially recognized by DPIIT, Government of India for innovation in Industrial IoT and digital transformation technologies.",
    },
    {
      icon: <Award className="text-cyan-400 w-8 h-8" />,
      title: "IoT Excellence Award – Smart Utilities",
      year: "2022",
      desc: "Awarded for innovative water automation and SCADA deployment under Jal Jeevan Mission and Smart City programs.",
    },
    {
      icon: <Medal className="text-emerald-400 w-8 h-8" />,
      title: "Best Sustainable Tech Startup",
      year: "2023",
      desc: "Recognized by CII and MSME forums for enabling energy-efficient and environmentally compliant automation solutions.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#071524] via-[#0b1e32] to-[#071524] text-white overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Awards & Recognition
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Celebrating our journey of innovation and excellence in Industrial IoT, automation, and smart infrastructure.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {awards.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition"
            >
              {/* Icon Circle */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-400/20">
                {a.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">{a.title}</h3>
              <p className="text-sky-300 text-sm font-medium mb-3">{a.year}</p>
              <p className="text-white/80 text-sm leading-relaxed">{a.desc}</p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-sky-400 to-cyan-300 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
