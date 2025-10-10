"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Target, Leaf } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section
  className="relative py-32 text-gray-900 overflow-hidden"
  style={{
    backgroundImage: "url('/mission.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Content – Vision & Mission */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Vision */}
          <motion.div
            className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-sky-100 hover:shadow-sky-200/60 transition relative overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-sky-100 rounded-xl text-sky-600">
                <Eye size={36} />
              </div>
              <h2 className="text-3xl font-bold text-sky-700">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              To build a{" "}
              <span className="text-sky-600 font-semibold">
                connected, intelligent, and sustainable world
              </span>{" "}
              through real-time IoT and automation — enabling smarter utilities,
              cities, and industries powered by data.
            </p>

            {/* Floating decorative icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 text-sky-200"
            >
              <Target size={60} />
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-sky-100 hover:shadow-sky-200/60 transition relative overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-sky-100 rounded-xl text-sky-600">
                <Rocket size={36} />
              </div>
              <h2 className="text-3xl font-bold text-sky-700">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower organizations with{" "}
              <span className="text-sky-600 font-semibold">
                intelligent IoT-based automation
              </span>{" "}
              that optimizes energy, water, and infrastructure resources while
              ensuring sustainability and efficiency.
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 text-sky-200"
            >
              <Leaf size={60} />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Floating Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/vision.jpeg" 
            alt="Frinso Vision & Mission"
            className="h-[300px] lg:h-[380px] object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-sky-300/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Soft gradient bottom reflection */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-200/20 to-transparent blur-md"></div>
    </section>
  );
}
