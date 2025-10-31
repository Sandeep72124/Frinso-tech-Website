"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  Droplets,
  Globe,
  Factory,
  Users,
  Brain,
} from "lucide-react";
import StatsSection from "@/components/StatsSection";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#010b19] via-[#071d38] to-[#113d88] text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative h-[65vh] flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/about_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#031625]/60 to-[#0a2540]/80"></div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">Frinso Technologies</span>
        </motion.h1>

        <motion.p
          className="text-white/90 mt-5 text-lg max-w-2xl relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Connecting Infrastructure • Enabling Sustainability • Empowering Industries
        </motion.p>
      </section>

      {/* ABOUT US FULL DETAILS (Single Section) */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-sky-300 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-gray-200 text-lg leading-relaxed text-justify bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            Frinso Technologies Pvt. Ltd. (Founded by IIT Bombay alumni) is leading the digital transformation of India’s
            infrastructure through intelligent, integrated, and sustainable IoT solutions. Our expertise spans Smart
            Water, Smart Energy, and Smart City ecosystems, with projects covering Smart Irrigation and Agricultural
            Water Systems, 24×7 Drinking Water Supply, Smart Urban Infrastructure, WTP/STP/ETP Automation, and
            regulatory-compliant CGWA/CPCB projects. <br />
            <br />
            Beyond water, Frinso’s innovations empower industries and municipalities with Smart Energy, Smart Solar
            Plants, Smart Retail and Food Outlets, Smart HVAC and AC Controls, Industrial IoT, Smart Factories, Smart
            Building Management, Air Quality and Ambient Monitoring, Smart Lighting, Smart Grids, and Oil & Gas
            Infrastructure. <br />
            <br />
            Leveraging IoT-based systems, SCADA platforms, and AI-powered analytics, Frinso enables organizations to
            remotely monitor, manage, and optimize critical utilities with precision, reliability, and efficiency. <br />
            <br />
            In the Smart Water domain, Frinso has delivered clean drinking water to over 6 million people across 23
            towns and villages through digital metering, SCADA automation, and lift irrigation systems. Our canal
            automation initiatives have conserved 0.5 million hectares of water and boosted farmers’ incomes by over $3
            million, directly supporting Jal Jeevan Mission (JJM) and Pradhan Mantri Krishi Sinchayee Yojana (PMKSY).{" "}
            <br />
            <br />
            Our technology also drives Smart Energy Management, pipeline SCADA systems, AI-based anomaly detection, CCMS
            streetlight automation, and cathodic protection monitoring—delivering measurable energy savings, improved
            asset reliability, and a smarter, more sustainable future. <br />
            <br />
            In the railway sector, Frinso is pioneering safety and automation with Advanced Warning Systems for railway
            personnel working on tracks, and IoT and AI-powered Real-time Water Monitoring Systems for railway
            facilities and assets. <br />
            <br />
            As a Proudly Made in India 🇮🇳 company, Frinso designs and manufactures a comprehensive range of IoT Edge
            Gateways and Field Devices, including smart water meters, flowmeters, water quality sensors and analyzers,
            level and pressure sensors, PLC/SCADA panels, smart AC controllers, energy and floor monitoring systems, and
            ambient monitoring devices. With strong in-house R&D and manufacturing capabilities, Frinso delivers custom
            IoT devices and end-to-end solutions tailored to client needs—Made in India, Built for the World.
          </motion.p>
        </div>
      </section>

      {/* WHY CHOOSE US (Power of Frinso) */}
      <section className="py-20 bg-gradient-to-r from-[#081a31] via-[#0a2540] to-[#164093] border-t border-white/10 relative overflow-hidden">
        <motion.h2
          className="text-4xl font-bold text-center text-sky-300 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌟 The Power of Frinso
        </motion.h2>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Award size={42} className="text-amber-400 group-hover:text-white" />,
              title: "11+ Years of Trust & Innovation",
              desc: "Built to last, backed for life — a decade of reliable IoT and SCADA excellence.",
            },
            {
              icon: <Droplets size={42} className="text-sky-400 group-hover:text-white" />,
              title: "Pioneers of Water Automation",
              desc: "Ensuring 24×7 clean water through smart metering, SCADA, and automation.",
            },
            {
              icon: <Globe size={42} className="text-pink-400 group-hover:text-white" />,
              title: "Proudly Made in India",
              desc: "Atmanirbhar innovation empowering global infrastructure transformation.",
            },
            {
              icon: <Factory size={42} className="text-green-400 group-hover:text-white" />,
              title: "World-Class Infrastructure",
              desc: "Advanced R&D and manufacturing driving future-ready IoT solutions.",
            },
            {
              icon: <Users size={42} className="text-cyan-400 group-hover:text-white" />,
              title: "Global Reach, Local Excellence",
              desc: "Trusted across 9+ countries — local roots, global standards.",
            },
            {
              icon: <Brain size={42} className="text-purple-400 group-hover:text-white" />,
              title: "100+ Engineers & Innovators",
              desc: "A team transforming IoT data into actionable intelligence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/10 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:shadow-[0_0_45px_rgba(56,189,248,0.3)] transition-all"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(56,189,248,0.15)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-sky-200 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <StatsSection/>

      {/* LEADERSHIP SECTION */}
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
              name: "Vihang Kapadia",
              role: "Director and Operation Head",
              img: "/vihang.jpg",
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all"
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
