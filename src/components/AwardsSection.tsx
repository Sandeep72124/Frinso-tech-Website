"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      icon: <Trophy className="text-amber-400 w-8 h-8" />,
      title: "UNIDO Industrial IoT Innovation Award",
      year: "2021",
      img: "/awards/unido.jpg",
    },
    {
      icon: <Star className="text-sky-400 w-8 h-8" />,
      title: "Top 34 Global Innovations – Japan Govt",
      year: "2019",
      img: "/awards/japan.jpg",
    },
    {
      icon: <Award className="text-purple-400 w-8 h-8" />,
      title: "Top 15 Global Innovations – GMIS Russia",
      year: "2019",
      img: "/awards/russia.jpg",
    },
    {
      icon: <Medal className="text-cyan-400 w-8 h-8" />,
      title: "Global Entrepreneur Programme – DIT UK",
      year: "2023",
      img: "/awards/uk.jpg",
    },
    {
      icon: <Trophy className="text-indigo-400 w-8 h-8" />,
      title: "Smart Prepaid Water Meter – AMRUT 2.0 Awardee",
      year: "2024",
      img: "/awards/amrut.jpg",
    },
    {
      icon: <Star className="text-yellow-400 w-8 h-8" />,
      title: "NASSCOM Smart Energy Management Award",
      year: "2021",
      img: "/awards/nasscom.jpg",
    },
  ];

  return (
    <section
  className="relative py-5 text-gray-900 overflow-hidden"
  style={{
    backgroundImage: "url('/bg2.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

  <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Center timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)]"></div>
<h2 className="text-4xl font-bold text-left text-sky-700 mb-16">
      Awards & Recognition
    </h2>
        <div className="space-y-16 relative z-10">
          {awards.map((award, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Connector line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className={`absolute top-1/2 h-[2px] bg-sky-400 ${
                    isLeft
                      ? "right-[calc(50%-2px)] w-16 origin-right"
                      : "left-[calc(50%-2px)] w-16 origin-left"
                  }`}
                ></motion.div>

                {/* Timeline dot */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg bg-sky-500 animate-pulse ${
                    isLeft
                      ? "right-[calc(50%-0.75rem)]"
                      : "left-[calc(50%-0.75rem)]"
                  }`}
                ></div>

                {/* Floating card with image */}
                <motion.div
                  className="w-full sm:w-[45%] bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 border border-white/40 hover:shadow-sky-300 transition-all"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.8 + Math.random() * 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Image at top */}
                  <div className="mb-4 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={award.img}
                      alt={award.title}
                      className="w-full h-36 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex items-center gap-3 mb-2">
                    {award.icon}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {award.title}
                    </h3>
                  </div>
                  <p className="text-sky-600 font-medium">{award.year}</p>
                </motion.div>
              </motion.div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
}
