"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();

  // ✅ Typed navigation function
  const goToProjectPage = (slug: string) => {
    router.push(`/Nav_Project/${slug}`);
  };

  const projects = [
     {
      title: "🚰 24×7 Drinking Water Supply Projects",
      desc: "Real-time flow, pressure, and level automation ensuring uninterrupted water supply under Jal Jeevan Mission & AMRUT 2.0 initiatives.",
      slug: "drinking_water_24x7",
      img: "/water24.png",
    },
    
    {
      title: "🚜 Smart Irrigation & Agricultural Water Systems",
      desc: "IoT-enabled irrigation automation for optimizing water use, conserving energy, and improving agricultural productivity in rural and urban areas.",
      slug: "smart_irrigation",
      img: "/smart_irrigation.png",
    },
    
    {
      title: "🏗️ Smart Urban Infrastructure",
      desc: "End-to-end IoT automation for municipal infrastructure — smart drainage, pipeline SCADA, and streetlight management systems.",
      slug: "urban_infrastructure",
      img: "/urban_infra.jpg",
    },
     {
      title: "⚙️ WTP/STP/ETP Automation",
      desc: "Advanced PLC/SCADA-based automation for water and wastewater treatment plants with real-time monitoring and remote control.",
      slug: "wtp_stp_etp",
      img: "/wtp_stp_etp.jpg",
    },
     {
      title: "🚉 Railway Water Monitoring Projects",
      desc: "IoT-enabled railway water management for automated tank refilling, leak detection, and real-time SCADA integration across depots and stations.",
      slug: "railway",
      img: "/rail.jpg",
    },
    {
      title: "📜 Regulatory-Compliant CGWA/CPCB Projects",
      desc: "Automated reporting systems and water abstraction monitoring ensuring compliance with CGWA and CPCB standards.",
      slug: "cgwa_cpcb",
      img: "/cgwa_cpcb.jpg",
    },
    {
      title: "🏪 Smart Retail & Food Outlets",
      desc: "Real-time monitoring of refrigeration, energy, and environmental parameters for retail chains and food businesses.",
      slug: "retail_food",
      img: "/smart_retail.jpg",
    }, 
    {
      title: "🏙️ Smart City Ecosystems",
      desc: "Integrated IoT and SCADA-based infrastructure enabling efficient water, energy, lighting, and waste management in Smart Cities across India.",
      slug: "smart_city",
      img: "/smart_city.jpg",
    }, 
   
    {
      title: "🌫️ Air Quality & Ambient Monitoring",
      desc: "IoT sensors and AI-based analytics for air quality and ambient environment monitoring — real-time AQI dashboards.",
      slug: "air_quality",
      img: "/air_quality.jpg",
    },
    {
      title: "💡 Smart Lighting & Streetlight Automation",
      desc: "Smart CCMS streetlight control and real-time fault detection for cities, campuses, and industrial zones.",
      slug: "smart_lighting",
      img: "/smart_lighting.png",
    },
    {
      title: "⚡ Smart Grids & Energy Automation",
      desc: "IoT and SCADA-powered smart grid management — enabling energy balancing, fault detection, and predictive maintenance.",
      slug: "smart_grids",
      img: "/smart_grid.jpg",
    },
    {
      title: "💧 Water Management Projects",
      desc: "Smart automation for WTP, STP, Borewells & Distribution — compliant with JJM, AMRUT 2.0, and CGWA norms.",
      slug: "water",
      img: "/water.png",
    },
    {
      title: "⚡ Energy Management System (EMS)",
      desc: "Comprehensive energy analytics for industries, smart buildings, and water utilities — monitor, optimize, save.",
      slug: "energy_manage",
      img: "/energy.jpg",
    },
    {
      title: "🌬️ HVAC Monitoring & Automation",
      desc: "IoT-based HVAC monitoring for chillers, AHUs, and cooling systems — predictive maintenance & energy efficiency.",
      slug: "hvac",
      img: "/hvac.jpg",
    },
    {
      title: "☀️ Solar SCADA & Remote Monitoring",
      desc: "Smart solar dashboards for plant efficiency, inverter control, and energy yield analytics in real time.",
      slug: "solar",
      img: "/solar.png",
    },
    {
      title: "🏢 Building Management System (BMS)",
      desc: "Unified monitoring of lighting, DGs, HVAC, and utilities for smart buildings and corporate infrastructures.",
      slug: "building",
      img: "/building.jpg",
    },
   
  ];

  // ✅ Framer motion variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const container: Variants = {
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
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
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

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow:
                  "0 1px 28px rgba(56,189,248,0.25), 0 4px 10px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => goToProjectPage(p.slug)} // ✅ Navigation works by click
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

              {/* Text Content */}
              <div className="p-1">
                <h3 className="text-xl font-semibold text-sky-700 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-500 transition">
                  View Project →
                </div>
              </div>

              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-200/30 to-transparent blur-md"></div>
    </section>
  );
}
