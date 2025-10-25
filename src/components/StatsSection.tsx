"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Building2, Activity, Cpu } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: "01",
      icon: <Users className="w-8 h-8 text-white" />,
      number: 5700,
      label: "Customers",
      color: "from-sky-500 to-cyan-400",
      suffix: "+",
    },
    {
      id: "02",
      icon: <Building2 className="w-8 h-8 text-white" />,
      number: 255,
      label: "Dealers",
      color: "from-indigo-500 to-sky-400",
      suffix: "+",
    },
    {
      id: "03",
      icon: <Activity className="w-8 h-8 text-white" />,
      number: 28,
      label: "Govt Projects",
      color: "from-cyan-500 to-teal-400",
      suffix: "+",
    },
    {
      id: "04",
      icon: <Cpu className="w-8 h-8 text-white" />,
      number: 600,
      label: "Products",
      color: "from-blue-500 to-sky-400",
      suffix: "+",
    },
  ];

  return (
    <section className="relative z-[20]">
      {/* Floating Cards Container */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 -bottom-[80px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({ stat, index }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  // Merge both refs
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      ref={setRefs}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
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
          {count}
          {stat.suffix}
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
  );
}
