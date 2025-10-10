"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "JJM – Jal Jeevan Mission Projects",
      desc: "Automation of state water systems in Himachal, Rajasthan, Odisha & Gujarat with real-time water quality and flow monitoring.",
    },
    {
      title: "AMRUT 2.0 – Smart City Projects",
      desc: "Smart prepaid water meter deployment in Mira-Bhayandar under Ministry of Housing Affairs, GOI.",
    },
    {
      title: "CGWA/CPCB Monitoring",
      desc: "10,000+ flow and level sensors integrated for borewell and water body monitoring across India.",
    },
    {
      title: "Corporate Water Management",
      desc: "IoT-enabled systems for AWFIS, DLF, Kalpataru — real-time usage tracking, leak detection, and automation.",
    },
  ];

  return (
    <section
      className="relative py-32 overflow-hidden text-gray-900"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-sky-50/60 to-white/80 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 relative z-10">
        {/* Left side - Floating image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/hand.png" 
            alt="Frinso Smart Project Visualization"
            className="h-[500px] lg:h-[600px] object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            animate={{ x: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-sky-400/25 via-transparent to-transparent blur-3xl"></div>
        </motion.div>

        {/* Right side - Project cards */}
        <motion.div
          className="flex-1 grid md:grid-cols-1 gap-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-sky-700 mb-8 text-left">
            Key Projects & Deployments
          </h2>

          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="relative p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b from-sky-400 to-cyan-400 rounded-l-xl"></div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 ml-4">
                {p.title}
              </h3>
              <p className="text-gray-600 ml-4">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
