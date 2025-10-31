"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Cpu,
  Droplets,
  Zap,
  Gauge,
  Activity,
} from "lucide-react";

// ✅ TypeScript Interfaces
interface Stat {
  id: string;
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  color: string;
}

interface AnimatedCardProps {
  stat: Stat;
  index: number;
}

// ✅ Main Section
export default function StatsSection() {
  const stats: Stat[] = [
    {
      id: "01",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      number: 50,
      label: "Contracts Across India",
      suffix: "+",
      color: "from-sky-500 to-blue-400",
    },
    {
      id: "02",
      icon: <Cpu className="w-6 h-6 text-white" />,
      number: 50000,
      label: "New Devices Added Every Year",
      suffix: "+",
      color: "from-blue-500 to-sky-400",
    },
    {
      id: "03",
      icon: <Activity className="w-6 h-6 text-white" />,
      number: 40,
      label: "Million Sensor Data Points Monitored",
      suffix: "M+",
      color: "from-cyan-500 to-teal-400",
    },
    {
      id: "04",
      icon: <Zap className="w-6 h-6 text-white" />,
      number: 10,
      label: "Years of Innovation & Excellence",
      suffix: "+",
      color: "from-yellow-500 to-orange-400",
    },
    {
      id: "05",
      icon: <Droplets className="w-6 h-6 text-white" />,
      number: 100,
      label: "Water Infra Monitored",
      suffix: "+",
      color: "from-sky-400 to-blue-400",
    },
    {
      id: "06",
      icon: <Gauge className="w-6 h-6 text-white" />,
      number: 10,
      label: "Million+ kWh Energy Saved",
      suffix: "M+",
      color: "from-green-400 to-teal-400",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-12">
          10+ Years of Deep Domain Experience in Water Automation
        </h2>

        {/* ✅ Split into 2 equal rows (3 cards each) */}
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {stats.map((stat, i) => (
            <AnimatedCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Animated Stat Card Component
function AnimatedCard({ stat, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  const setRefs = (node: HTMLDivElement | null) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const stepTime = Math.max(10, Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      ref={setRefs}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
      className="relative bg-white border border-gray-200 shadow-md rounded-3xl px-8 py-10 
                 text-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.2)]"
    >
      {/* Floating Icon */}
      <div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} 
                    flex items-center justify-center shadow-md`}
      >
        {stat.icon}
      </div>

      {/* Stat Number */}
      <h3 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        {count}
        {stat.suffix}
      </h3>

      {/* Label */}
      <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>

      {/* ID Badge */}
      <span className="absolute top-3 right-3 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
        {stat.id}
      </span>
    </motion.div>
  );
}
