"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      icon: <Trophy className="text-amber-400 w-8 h-8" />,
      title: "UNIDO Industrial IoT Innovation Award",
      year: "2021",
    },
    {
      icon: <Star className="text-sky-400 w-8 h-8" />,
      title: "Top 34 Global Innovations – Japan Govt",
      year: "2019",
    },
    {
      icon: <Award className="text-purple-400 w-8 h-8" />,
      title: "Top 15 Global Innovations – GMIS Russia",
      year: "2019",
    },
    {
      icon: <Medal className="text-cyan-400 w-8 h-8" />,
      title: "Global Entrepreneur Programme – DIT UK",
      year: "2023",
    },
    {
      icon: <Trophy className="text-indigo-400 w-8 h-8" />,
      title: "Smart Prepaid Water Meter – AMRUT 2.0 Awardee",
      year: "2024",
    },
    {
      icon: <Star className="text-yellow-400 w-8 h-8" />,
      title: "NASSCOM Smart Energy Management Award",
      year: "2021",
    },
  ];

  return (
    <section
      className="relative py-20 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <motion.div
          className="flex flex-col gap-6 justify-center items-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <motion.img
              src="/award.jpg"
              alt="Award Image 1"
              className="rounded-2xl shadow-lg w-full sm:w-1/2 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.img
              src="/award2.jpg"
              alt="Award Image 2"
              className="rounded-2xl shadow-lg w-full sm:w-1/2 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </motion.div>

        {/* Right side - Awards */}
        <div className="relative">
          <motion.h2
            className="text-4xl font-bold text-sky-700 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Awards & Recognition
          </motion.h2>

          <div className="relative pl-6 border-l-4 border-sky-400 space-y-8">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-5 border border-white/40 hover:shadow-sky-300 transition-all"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-1">
                  {award.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {award.title}
                  </h3>
                </div>
                <p className="text-sky-600 font-medium">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
