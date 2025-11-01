"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const logos: { src: string; alt: string }[] = [
    { src: "/clients/tata-projects.jpg", alt: "Tata Projects" },
    { src: "/clients/larsen-toubro.jpg", alt: "Larsen & Toubro" },
    { src: "/clients/bosch.jpg", alt: "Bosch" },
    { src: "/clients/tech-mahindra.jpg", alt: "Tech Mahindra" },
    { src: "/clients/awfis.jpg", alt: "Awfis" },
    { src: "/clients/kalpataru.jpg", alt: "Kalpataru" },
    { src: "/clients/indian-railways.jpg", alt: "Indian Railways" },
    { src: "/clients/atal-mission.jpg", alt: "Atal Mission" },
    { src: "/clients/jal-jeevan.jpg", alt: "Jal Jeevan Mission" },
    { src: "/clients/adani.jpg", alt: "Adani" },
    { src: "/clients/marico.jpg", alt: "Marico" },
    { src: "/clients/parle.jpg", alt: "Parle" },
    { src: "/clients/reliance.jpg", alt: "Reliance" },
    { src: "/clients/titan.jpg", alt: "Titan" },
    { src: "/clients/vedanta.jpg", alt: "Vedanta" },
    { src: "/clients/mahindra.jpg", alt: "Mahindra" },
    { src: "/clients/eveready.jpg", alt: "Eveready" },
    { src: "/clients/relaxo.jpg", alt: "Relaxo" },
    { src: "/clients/shapoorji.jpg", alt: "Shapoorji Pallonji" },
    { src: "/clients/hyatt.jpg", alt: "HYATT Regency" },
    { src: "/clients/sun.jpg", alt: "Sun Pharma" },
    { src: "/clients/indian.jpg", alt: "Indian Oil" },
    { src: "/clients/britannia.jpg", alt: "Britannia" },
    { src: "/clients/cgwa.jpg", alt: "CGWA" },
    { src: "/clients/jyoti.jpg", alt: "Jyoti Lab" },
    { src: "/clients/hindustan.jpg", alt: "Hindustan Unilever" },
    { src: "/clients/godrej.jpg", alt: "Godrej Properties" },
    { src: "/clients/lemon.jpg", alt: "Lemon Tree Hotels" },
    { src: "/clients/pepsico.jpg", alt: "Pepsico" },
    { src: "/clients/godrej1.jpg", alt: "Godrej Agrovet" },
    { src: "/clients/radisson.jpg", alt: "Radisson Blu" },
    { src: "/clients/kirlostar.jpg", alt: "Kirloskar" },
    { src: "/clients/irrigation.jpg", alt: "Jain Irrigation" },
    { src: "/clients/volts.jpg", alt: "Voltas" },
    { src: "/clients/amrit.jpg", alt: "AMRUT 2.0" },
    { src: "/clients/kec.jpg", alt: "KEC" },
  ];

  const logoVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50 to-sky-100 relative overflow-hidden">
      {/* Background moving glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-200/40 via-white to-sky-100/60 opacity-40 blur-2xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Title Section */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl font-extrabold text-sky-700 tracking-tight">
          Our Clients & End Users
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Trusted by leading industries, government bodies, and enterprises across India.
        </p>
        <div className="mx-auto mt-4 h-1 w-24 bg-sky-500 rounded-full"></div>
      </div>

      {/* Animated Logo Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 md:px-16">
        {logos.map((logo: { src: string; alt: string }, i: number) => (
          <motion.div
            key={i}
            custom={i}
            variants={logoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-transparent to-sky-200 opacity-0 group-hover:opacity-60 transition duration-700 blur-md"></div>

            {/* Logo Image */}
            <Image
              src={logo.src}
              alt={logo.alt}
              width={130}
              height={90}
              className="object-contain relative z-10 transition-transform duration-700 group-hover:scale-125"
            />

            {/* Shimmer Shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
