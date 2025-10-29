"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper, Trophy, Star, Camera, Youtube, Globe2 } from "lucide-react";

// ✅ Framer Motion Variants (TypeScript safe)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function MediaWallPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/media-bg.jpg"
          alt="Frinso Tech Media Wall"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#081420]/90" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-sky-400"
          >
            Media Wall & Achievements
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-white/85 leading-relaxed"
          >
            Explore how Frinso Tech is shaping the world of IoT and sustainable
            smart infrastructure — featured in top media, awards, and technology forums.
          </motion.p>
        </motion.div>
      </section>

      {/* MEDIA HIGHLIGHTS */}
      <section className="bg-[#0b1e32] py-20 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-sky-300 text-center mb-16"
          >
            Featured In
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Newspaper,
                title: "ET Tech Innovators 2024",
                desc: "Recognized among top emerging IoT firms revolutionizing water & energy monitoring.",
                img: "/media/ettech.png",
                link: "https://www.hdfccapital.com/techinnovators/",
              },
              {
                icon: Trophy,
                title: "Smart City Expo, New Delhi",
                desc: "Showcased smart water & DG monitoring solutions — featured by national media.",
                img: "/media/expo.png",
                link: "#",
              },
              {
                icon: Star,
                title: "IIT Bombay Alumni Recognition",
                desc: "Celebrated for sustainable innovation & tech-led public infrastructure solutions.",
                img: "/media/iitb.png",
                link: "#",
              },
              {
                icon: Camera,
                title: "Press & Publications",
                desc: "Covered by multiple digital publications highlighting our IoT implementations.",
                img: "/media/press.png",
                link: "#",
              },
              {
                icon: Youtube,
                title: "Media Talks & Interviews",
                desc: "Insightful discussions on India’s IoT transformation through digital infrastructure.",
                img: "/media/interview.png",
                link: "#",
              },
              {
                icon: Globe2,
                title: "Global Partnerships",
                desc: "Expanding smart city collaborations across SE Asia & Middle East.",
                img: "/media/global.png",
                link: "#",
              },
            ].map(({ icon: Icon, title, desc, img, link }, i) => (
              <motion.a
                href={link}
                key={i}
                variants={fadeUp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-sky-400/10 hover:border-sky-400/40 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e32]/90 via-[#0b1e32]/50 to-transparent"></div>
                <div className="absolute bottom-0 p-5">
                  <Icon className="h-6 w-6 text-sky-300 mb-2" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-white/85 text-sm">{desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#081420] py-20 text-white text-center border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl font-semibold text-sky-300 mb-4">
            Let’s Collaborate
          </h2>
          <p className="text-white/80 mb-8">
            Want to feature Frinso Tech or explore partnership opportunities?
            Reach out to our communications team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
