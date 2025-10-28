"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Cloud, Zap, Leaf, Globe, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white overflow-hidden"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        
        <div className="absolute inset-0  bg-gradient-to-b from-black/40 to-[#0a2540]/80"
        style={{
    backgroundImage: "url('/about_bg.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter:"blur(8px)",
  }}
></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-sky-400">Frinso Technologies</span>
        </motion.h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl relative z-10">
          Connecting Infrastructure • Enabling Sustainability • Empowering Industries
        </p>
      </section>

      {/* Company Overview */}
      <section className="relative py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-sky-300 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Who We Are
          </motion.h2>
          <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed text-lg">
            <span className="font-semibold text-sky-300">Frinso Technologies Pvt. Ltd.</span>,
            founded by IIT Bombay alumni, specializes in sustainable, intelligent, and
            connected infrastructure. Our IoT solutions bridge the gap between physical
            assets and digital intelligence — enabling Smart Cities, Water Utilities,
            Energy Systems, and Industrial Automation with real-time insights and control.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: <Cpu size={40} />, title: "IoT Edge Innovation" },
              { icon: <Cloud size={40} />, title: "Cloud Intelligence" },
              { icon: <Zap size={40} />, title: "Automation & Analytics" },
              { icon: <Leaf size={40} />, title: "Sustainable Future" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl hover:bg-sky-900/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sky-300 mb-3">{item.icon}</div>
                <h4 className="font-semibold">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-[#0a2540] via-[#08263f] to-[#12458f] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-sky-300 mb-4">Our Vision</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              To build a connected and sustainable world through data-driven IoT
              infrastructure — empowering industries, cities, and utilities to make
              intelligent decisions for a greener tomorrow.
            </p>
            <h2 className="text-4xl font-bold text-sky-300 mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              To design and deploy scalable IoT systems that enable monitoring,
              automation, and optimization — turning data into real-time action
              across water, energy, and environmental domains.
            </p>
          </motion.div>

          {/* Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <motion.img
              src="/vision.jpeg"
              alt="Frinso Vision"
              className="max-h-[450px] object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-sky-300 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Impact
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "10,000+", desc: "Sensors & devices deployed" },
              { title: "25+", desc: "Smart City & AMRUT projects" },
              { title: "11", desc: "Products approved in PHED / JJM" },
              { title: "15+", desc: "Government & Enterprise Clients" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-8 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold text-sky-300 mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-t from-[#0a2540] via-[#0a2e60] to-[#1e3a8a] text-center">
        <motion.h2
          className="text-4xl font-bold text-sky-300 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Meet Our Leadership
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            {
              name: "Ashutosh Kumar",
              role: "Founder & CEO (IIT Bombay Alumni)",
              img: "/Ashutosh.jpg",
            },
            {
              name: "Vihang kapadia",
              role: "Head of Operations",
              img: "/vihang.jpg",
            },
           
          ].map((m, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow hover:scale-105 transition-all"
              whileHover={{ y: -5 }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-40 h-40 mx-auto rounded-full object-cover border-2 border-sky-400 mb-4"
              />
              <h3 className="text-xl font-semibold text-sky-300">{m.name}</h3>
              <p className="text-gray-200 mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
