"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function TeamPage() {
  const team = [
    {
      name: "Ashutosh Kumar",
      role: "Founder & CEO",
      image: "/ashutosh.jpg",
      desc: "IIT Bombay alumni and technology leader driving innovation in sustainable and connected infrastructure through Frinso Technologies.",
      linkedin: "https://www.linkedin.com/in/ashutosh-kumar",
      email: "ashutosh@frinsotech.com",
    },
    {
      name: "Viahang Kapadiya",
      role: "CTO – Embedded Systems",
      image: "/vihang.jpg",
      desc: "Expert in embedded electronics and IoT hardware development. Leads Frinso’s product innovation and integration architecture.",
      linkedin: "https://www.linkedin.com/",
      email: "Viahang@frinsotech.com",
    },
    {
      name: "Sandeep Kumar",
      role: "Head – Software Engineering",
      image: "/Sandeep.jpg",
      desc: "Manages Frinso’s end-to-end IoT dashboard development and SCADA integrations with scalable real-time data analytics.",
      linkedin: "https://www.linkedin.com/",
      email: "sandeep.kumar@frinsotech.com",
    },
    {
      name: "Sejal Kashyap",
      role: "VP – Projects & Execution",
      image: "/sejal.jpg",
      desc: "Oversees nationwide IoT deployments ensuring quality, safety, and on-ground integration with client infrastructure.",
      linkedin: "https://www.linkedin.com/",
      email: "sejal.kashyap@frinsotech.com",
    },
    
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/team-bg.jpg"
          alt="Our Team"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#081420]/90"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-sky-400"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-white/85 leading-relaxed"
          >
            A team of innovators, engineers, and visionaries committed to building sustainable
            infrastructure through smart IoT technology.
          </motion.p>
        </motion.div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-[#0b1e32] text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-center text-sky-300 mb-12"
          >
            Leadership Team
          </motion.h2>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
                           shadow-lg hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-500 
                           max-w-sm"
              >
                {/* IMAGE */}
                <div className="relative w-full h-92 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e32]/90 via-[#0b1e32]/20 to-transparent"></div>
                </div>

                {/* DETAILS */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-sky-300 mb-1">{member.name}</h3>
                  <p className="text-sky-200/80 text-sm mb-3">{member.role}</p>
                  <p className="text-white/80 text-sm leading-snug mb-4">{member.desc}</p>

                  {/* SOCIALS */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-sky-600/20 hover:bg-sky-600/40 transition"
                    >
                      <Linkedin className="w-5 h-5 text-sky-300" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-sky-600/20 hover:bg-sky-600/40 transition"
                    >
                      <Mail className="w-5 h-5 text-sky-300" />
                    </a>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-radial from-sky-400/20 via-transparent to-transparent blur-2xl transition duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#081420] text-center py-20 border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4">
            Together, We Build the Future
          </h2>
          <p className="text-white/85 mb-8">
            At Frinso Tech, collaboration and innovation drive everything we do. We’re always looking
            for passionate minds to join our mission.
          </p>
          <a
            href="/Nav_Company/careers"
            className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl transition shadow-lg hover:scale-105"
          >
            Join Our Team
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
