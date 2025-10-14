"use client";

import { motion } from "framer-motion";
import { Users, Building2, Activity, Cpu } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: "01",
      icon: <Users className="w-8 h-8 text-white" />,
      number: "5700+",
      label: "Customers",
      color: "from-sky-500 to-cyan-400",
    },
    {
      id: "02",
      icon: <Building2 className="w-8 h-8 text-white" />,
      number: "255+",
      label: "Dealers",
      color: "from-indigo-500 to-sky-400",
    },
    {
      id: "03",
      icon: <Activity className="w-8 h-8 text-white" />,
      number: "28+",
      label: "Govt Projects",
      color: "from-cyan-500 to-teal-400",
    },
    {
      id: "04",
      icon: <Cpu className="w-8 h-8 text-white" />,
      number: "600+",
      label: "Products",
      color: "from-blue-500 to-sky-400",
    },
  ];

  return (
    <section className="relative z-[20]">
      {/* Floating Cards Container */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 -bottom-[80px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/90 backdrop-blur-md border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.1)] rounded-3xl p-8 text-center transform transition-all duration-500 hover:shadow-[0_12px_35px_rgba(56,189,248,0.3)]"
            >
              {/* Glowing Icon */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg shadow-sky-300/40 animate-pulse`}
              >
                {stat.icon}
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="mt-2 text-gray-600 tracking-wide uppercase text-sm">
                  {stat.label}
                </p>
              </div>

              {/* Small Badge */}
              <span className="absolute top-3 right-3 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                {stat.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
