"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ Product data map
const productData: Record<
  string,
  { title: string; image: string; description: string }
> = {
  "Edge_Device": {
    title: "Frinso V1 IoT Edge Device",
    image: "/product-edge.png",
    description:
      "Battery-based 4G IoT Gateway and Controller for Industrial IoT applications — enabling Industry 4.0 integration with Modbus, LoRa, and MQTT.",
  },
  "prepared-water-meter": {
    title: "Smart Ultrasonic Water Meter",
    image: "/prepared_watermeter.png",
    description:
      "Smart prepaid ultrasonic water meter with AMR/AMI and GSM/LoRa connectivity for JJM and AMRUT 2.0 applications.",
  },
  "electromagnetic-flowmeter": {
    title: "Frinso Electromagnetic Flowmeter",
    image: "/electro.png",
    description:
      "Accurate flow measurement for water and effluent monitoring with telemetry for CPCB/CGWA compliance.",
  },
  "smart-hvac": {
    title: "Smart HVAC Controller",
    image: "/hvac.png",
    description:
      "Energy-efficient HVAC control system with IoT-based remote monitoring and analytics for smart buildings.",
  },
  ultrasonic: {
    title: "Smart Ultrasonic IoT Level Sensor",
    image: "/ultra.jpg",
    description:
      "An intelligent ultrasonic level monitoring device designed for real-time water tank and sump management.",
  },
  "iot-gateway-controller": {
    title: "Frinso IoT Gateway & Controller",
    image: "/iot-gateway-controller.png",
    description:
      "Rugged industrial-grade device for seamless connection of field instruments, sensors, and actuators to the cloud.",
  },
  "air": {
    title: "Air Quality & Noise Monitoring Device",
    image: "/air.png",
    description:
      "Advanced IoT-based system for real-time monitoring of air pollutants and noise levels in urban and industrial environments.",
  },
};

// ✅ Framer Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Page Component
export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = productData[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden"
    >
      {/* Subtle background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none"></div>

      {/* Product Card */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 max-w-3xl w-full text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-sky-300 mb-8"
        >
          {product.title}
        </motion.h1>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-[350px] md:h-[400px] mb-8"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-2xl border border-sky-300/20 shadow-lg"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-gray-200 text-lg leading-relaxed mb-10"
        >
          {product.description}
        </motion.p>

        {/* Back button */}
        <Link
          href="/Nav_Product"
          className="inline-block bg-sky-600 hover:bg-sky-500 text-white rounded-full px-8 py-3 font-medium tracking-wide transition-transform hover:scale-105 shadow-md"
        >
          ← Back to Products
        </Link>
      </motion.div>

      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-300/20 to-transparent blur-md"></div>
    </motion.section>
  );
}
