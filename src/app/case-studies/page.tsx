"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Droplets, Gauge, Zap, Factory, Building2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CaseStudiesPreview() {
  const cases = [
    {
      icon: <Droplets className="text-sky-400 w-6 h-6" />,
      title: "Smart Water Utility – Jal Jeevan Mission",
      result: "30% reduction in NRW & 99.5% uptime achieved",
      desc: "Deployed IoT-based flow and level monitoring across multiple DMAs with real-time dashboards, CGWA-compliant auto reporting, and AI-based leakage alerts. Integrated with WTP, STP, and OHSR automation systems.",
      location: "Himachal Pradesh, Rajasthan, Odisha",
      href: "/case-studies/water-utility",
      image: "/case/water_case.jpg",
    },
    {
      icon: <Gauge className="text-sky-400 w-6 h-6" />,
      title: "Industrial EMS Deployment – Automotive Sector",
      result: "15% reduction in monthly energy bills",
      desc: "End-to-end EMS solution integrating energy meters, DG sets, and HVAC systems into a unified SCADA dashboard. Achieved power factor improvement and peak load optimization through automated alerts and reports.",
      location: "Pune, Maharashtra",
      href: "/case-studies/ems-industrial",
      image: "/case/ems_case.jpg",
    },
    {
      icon: <Zap className="text-sky-400 w-6 h-6" />,
      title: "Smart DG Monitoring – Corporate Tower",
      result: "Fuel theft reduced by 90% with real-time visibility",
      desc: "IoT-based fuel sensors, DG runtime tracking, and SMS/email alerts implemented for multi-tower infrastructure. Cloud dashboard enabled predictive maintenance and daily consumption insights.",
      location: "Gurgaon, Haryana",
      href: "/case-studies/dg-monitoring",
      image: "/case/dg_case.jpg",
    },
    {
      icon: <Factory className="text-sky-400 w-6 h-6" />,
      title: "Smart STP Monitoring – Industrial Estate",
      result: "Achieved CPCB compliance automation",
      desc: "Real-time monitoring of DO, pH, turbidity, and flow with automated data submission to the CPCB portal. Included remote SCADA control and maintenance scheduling using Frinso Cloud AI module.",
      location: "Vadodara, Gujarat",
      href: "/case-studies/stp-monitoring",
      image: "/case/stp_case.jpg",
    },
    {
      icon: <Building2 className="text-sky-400 w-6 h-6" />,
      title: "Smart Building BMS Integration",
      result: "40% reduction in manual monitoring costs",
      desc: "Combined lighting, HVAC, water, and DG data streams into a single dashboard for real-time decision-making. Implemented predictive alerts and energy benchmarking across corporate campuses.",
      location: "Mumbai, Maharashtra",
      href: "/case-studies/bms",
      image: "/case/bms_case.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
    <Navbar/>
    <section className="relative py-24 bg-[#071827] text-white overflow-hidden">
      {/* Animated gradient & grid background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.15,
          }}
        />
        <div className="absolute -inset-[20%] animate-[spin_25s_linear_infinite] rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.1), rgba(2,132,199,0.15), transparent 40%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-sky-300"
        >
          Case Studies & Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Explore how Frinso Tech has empowered utilities, industries, and smart cities with 
          connected IoT and SCADA solutions — improving efficiency, compliance, and sustainability.
        </motion.p>
      </div>

      {/* Case Study Cards */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.2 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-sky-500/30 hover:scale-[1.03] transition-all"
          >
            {/* Background Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {c.icon}
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
              <p className="text-sm text-white/80 mb-3">{c.desc}</p>
              <p className="text-sm text-sky-400 font-medium">{c.result}</p>
              <p className="text-xs text-gray-400 mt-1">{c.location}</p>

              {/* CTA */}
              <Link
                href={c.href}
                className="mt-4 inline-flex items-center gap-2 text-sky-400 text-sm font-medium hover:text-sky-300 transition"
              >
                <FileText size={16} />
                Read Full Case Study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-500/10 to-transparent blur-3xl"></div>
    </section>
    <Footer/>
    </>
  );
}
