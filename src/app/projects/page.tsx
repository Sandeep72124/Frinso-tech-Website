"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "JJM – Jal Jeevan Mission Projects",
      desc: "Automation of water systems in Himachal, Rajasthan, Odisha & Gujarat — real-time flow, quality, and level monitoring.",
      img: "/projects/jjm.jpg",
    },
    {
      title: "AMRUT 2.0 – Smart City Projects",
      desc: "Smart prepaid water metering in Mira-Bhayandar under Ministry of Housing Affairs, Government of India.",
      img: "/projects/amrut.jpg",
    },
    {
      title: "CGWA / CPCB Monitoring",
      desc: "10,000+ flow and level sensors integrated for groundwater and water body monitoring across India.",
      img: "/projects/cgwa.jpg",
    },
    {
      title: "Corporate Water Management",
      desc: "IoT-enabled automation for DLF, AWFIS, Kalpataru — real-time usage tracking and leak detection.",
      img: "/projects/corporate.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <motion.img
          src="/projects-bg.jpg"
          alt="Projects Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0a2540]/80"></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Key <span className="text-sky-400">Projects & Deployments</span>
        </motion.h1>
        <p className="text-white/90 mt-4 max-w-2xl relative z-10">
          Trusted by governments, smart cities, and enterprises nationwide.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-sky-400/40 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-sky-300">{p.title}</h3>
              <p className="text-gray-200 text-sm mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
