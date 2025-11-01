"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const logos = [
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
    { src: "/clients/hyatt.jpg", alt: "HYATT REFENCY" },
    { src: "/clients/AA.jpg", alt: "AA" },
    { src: "/clients/sun.jpg", alt: "SUN Pharma" },
    { src: "/clients/indian.jpg", alt: "Indian Oil" },
    { src: "/clients/britannia.jpg", alt: "BRITANNIA" },
    { src: "/clients/cgwa.jpg", alt: "CGWA" },
    { src: "/clients/jyoti.jpg", alt: "Jyoti Lab" },
    { src: "/clients/hindustan.jpg", alt: "HINDUSTAN " },
    { src: "/clients/godrej.jpg", alt: "Godrej Properties" },
    { src: "/clients/lemon.jpg", alt: "Lemon Tree" },
    { src: "/clients/central.jpg", alt: "Central Ground Water Board" },
    { src: "/clients/pepsico.jpg", alt: "Pepsico" },
    { src: "/clients/godrej1.jpg", alt: "Godrej Agrovet" },
    { src: "/clients/radisson.jpg", alt: "Redisson" },
    { src: "/clients/kirlostar.jpg", alt: "kirlostar" },
    { src: "/clients/irrigation.jpg", alt: "Irrigation" },
    { src: "/clients/volts.jpg", alt: "VOLTS A TATA Enterprise" },
    { src: "/clients/pipari.jpg", alt: "Pipari" },
    { src: "/clients/amrit.jpg", alt: "AMRIT 2.0" },
    { src: "/clients/kec.jpg", alt: "KEC" },
    { src: "/clients/var.jpg", alt: "VERM" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-700">Our Clients & End Users</h2>
        <p className="mt-2 text-gray-600">
          Trusted by industry leaders, government departments, and global enterprises.
        </p>
      </div>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, duration: 0.6 },
          },
        }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 p-4"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={80}
              className="object-contain grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Moving background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-transparent opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
