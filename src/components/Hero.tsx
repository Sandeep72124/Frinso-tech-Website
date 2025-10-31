"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
export default function Hero() {
  const videos = [
   {
  src: "/video/jjm.mp4",
  title: "Smart SCADA Automation for 24×7 Water Supply – Jal Jeevan Mission",
  desc: "End-to-end automation and monitoring solution covering WTP, ESR, and Distribution Networks under JJM.",
  cta: "/Nav_Project/water",
},

    {
      src: "/video/water.mp4",
      title: "Smart Water Management",
      desc: "Real-time monitoring for WTP, STP, and borewells with CGWA, CPCB, and JJM compliance-ready dashboards.",
      cta: "/contact",
    },
    {
  src: "/video/solar.mp4",
  title: "Smart SCADA & Remote Monitoring for Solar Power Plants",
  desc: "Comprehensive SCADA solution for solar PV plants enabling real-time inverter, string, and weather station data acquisition.",
  cta: "/Nav_Project/solar",
}
,
    {
      src: "/video/city.mp4",
      title: "Smart City Infrastructure",
      desc: "IoT-powered management for utilities, water, and energy systems in urban environments — ensuring efficiency and sustainability.",
      cta: "/contact",
    },
  
      {
  src: "/video/retail.mp4",
  title: "Smart Retail & Commercial Spaces",
  desc: "Enhance store efficiency, monitor energy and environment in real time, and improve customer experience with IoT-driven insights. From malls to showrooms — Frinso enables connected, sustainable retail operations.",
  cta: "/contact",
},
    {
      src: "/video/energy.mp4",
      title: "Smart Energy Management",
      desc: "Reduce T&D losses and track consumption with AI-based analytics and automated alerts.",
      cta: "/contact",
    },
    {
      src: "/video/hvac.mp4",
      title: "Smart HVAC Automation",
      desc: "Intelligent control and optimization of chillers, compressors, and air systems for energy-efficient buildings.",
      cta: "/contact",
    },
  

    {
      src: "/video/fleet.mp4",
      title: "Fleet & DG Monitoring",
      desc: "Monitor diesel usage, detect theft, and automate performance tracking across fleets and DG systems.",
      cta: "/contact",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ⏱ Auto-slide every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="relative h-190 w-full overflow-hidden">
      {/* Animated Video Transition */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videos[current].src}
          src={videos[current].src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          
        />
        
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 text-white max-w-7xl mx-auto">
        <Reveal>
          
          <motion.h1
            key={videos[current].title}
            className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {videos[current].title}
          </motion.h1>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.p
            key={videos[current].desc}
            className="mt-6 max-w-2xl text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {videos[current].desc}
          </motion.p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
            >
              Request Demo
            </Link>
            <Link
              href="/Nav_Project/water"
              className="rounded-xl border border-white/70 px-6 py-3 font-medium text-white hover:bg-white hover:text-sky-700 hover:scale-105 transition"
            >
              Watch Video
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        
        <ChevronRight size={28} className="text-white" />
      </button>

      
   
        
     
     
    </section>
   
  );
}
