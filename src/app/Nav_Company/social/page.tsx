"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Droplets,
  Leaf,
  Globe2,
  Recycle,
  Users,
  Factory,
  ShieldCheck,
  Sparkles,
  Sun,
  Tractor,
  HeartHandshake,
} from "lucide-react";
import StatsSection2 from "@/components/StatsSection2";

// ✅ Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function SocialImpactPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/social-impact-bg.jpg"
          alt="Frinso Social Impact"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#081420]/90"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-sky-400 drop-shadow-lg"
          >
            🌱 Frinso Social Impact
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl text-white/85 leading-relaxed"
          >
            Driving Sustainable Growth. Empowering Communities. Building India’s Digital Future.
          </motion.p>
        </motion.div>
      </section>
      <StatsSection2/>

      {/* INTRO SECTION */}
      <section className="bg-[#0b1e32] py-30 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            At <span className="text-sky-400 font-semibold">Frinso Technologies Pvt. Ltd.</span>, our purpose goes beyond technology — we are committed to creating social, environmental, and economic impact through intelligent infrastructure solutions. Every project we deliver contributes to a smarter, cleaner, and more equitable India.
          </motion.p>
        </div>
      </section>

      {/* IMPACT SECTIONS */}
      <section className="bg-gradient-to-b from-[#0b1e32] to-[#081420] py-24 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Droplets,
                color: "text-blue-400",
                title: "Water for Every Home",
                desc: "Through Smart Water and Irrigation Automation Systems, Frinso has enabled clean and reliable drinking water for over 6 million people across 23 towns and villages. Our SCADA systems, digital water meters, and lift irrigation solutions ensure 24×7 supply and improved public health outcomes.",
              },
              {
                icon: Tractor,
                color: "text-green-400",
                title: "Empowering Farmers and Rural India",
                desc: "Frinso’s canal automation and smart irrigation systems have optimized water distribution, saving 0.5 million hectares of water and increasing farmers’ income by $3 million. Supporting Jal Jeevan Mission (JJM) and PMKSY, we drive rural empowerment and agricultural resilience.",
              },
              {
                icon: Sun,
                color: "text-yellow-400",
                title: "Sustainable Energy and Smart Cities",
                desc: "Through Smart Energy, Solar, and Smart City solutions, Frinso is helping reduce energy waste by 30%, enabling Net-Zero goals with AI-powered IoT edge platforms for cities and industries.",
              },
              {
                icon: ShieldCheck,
                color: "text-red-400",
                title: "Safety and Empowerment in Railways",
                desc: "Frinso’s IoT-enabled warning and monitoring systems protect railway workers, conserve resources, and enhance decision-making through data-driven insights across India’s largest public networks.",
              },
              {
                icon: Factory,
                color: "text-amber-400",
                title: "Proudly Made in India, Built for the World",
                desc: "Frinso’s indigenous IoT products and platforms strengthen Atmanirbhar Bharat — fostering local manufacturing, skill development, and global-ready innovation.",
              },
              {
                icon: HeartHandshake,
                color: "text-pink-400",
                title: "Community Collaboration",
                desc: "Partnering with NGOs and CSR programs to deliver measurable social, environmental, and economic impact in urban and rural areas alike.",
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                variants={zoomIn}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all group shadow-lg backdrop-blur-sm"
              >
                <Icon className={`h-10 w-10 mb-4 ${color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-2 text-sky-200">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-[#081420] py-20 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-sky-300 mb-12"
          >
            💫 Our Impact in Numbers
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: "6+ Million", label: "People Served with Clean Water" },
              { num: "0.5 Million", label: "Hectares of Water Saved" },
              { num: "$3 Million", label: "Added to Farmers’ Income" },
              { num: "23", label: "Smart Water & Irrigation Projects" },
              { num: "9", label: "Countries with Frinso Deployments" },
              { num: "100+", label: "Engineers Driving Social Innovation" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-105 transition-transform"
              >
                <div className="text-4xl font-bold text-sky-400">{stat.num}</div>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="bg-[#0b1e32] py-16 text-center text-white border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <Sparkles className="mx-auto mb-4 h-10 w-10 text-sky-300" />
          <p className="text-xl italic text-white/80">
            “Every drop saved, every watt optimized, every life improved — that’s the true impact of digital transformation.”
          </p>
          <p className="mt-4 font-semibold text-sky-400">– The Frinso Promise</p>
        </motion.div>
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
            Join Us in Making an Impact
          </h2>
          <p className="text-white/80 mb-8">
            Partner with us on CSR, water conservation, or clean energy projects.  
            Together, let’s build technology that transforms lives and sustains the planet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white shadow hover:scale-105 hover:bg-sky-500 transition"
          >
            Get Involved
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
