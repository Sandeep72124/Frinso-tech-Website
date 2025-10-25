import Image from "next/image";
import Link from "next/link";

const productData = {
  "Edge_Device": {
    title: "Frinso V1 IoT Edge Device",
    image: "/product-edge.png",
    description:
      "Battery-based 4G IoT Gateway and Controller for Industrial IoT applications — enabling Industry 4.0 integration with Modbus, LoRa, and MQTT.",
  },
  "prepared water meter": {
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
  "ultrasonic": {
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
      "Rugged industrial-grade device for seamless connection of field instruments, sensors, and actuators to the cloud.",
  },

};

export default function ProductPage({ params }) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link href="/" className="text-sky-400 underline mt-4 block">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-sky-300 mb-6">{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg mb-8"
        />
        <p className="text-gray-200 text-lg leading-relaxed mb-8">
          {product.description}
        </p>
        <Link
          href="/"
          className="inline-block bg-sky-500/20 hover:bg-sky-500/40 text-sky-300 rounded-full px-6 py-2 transition"
        >
          ← Back to Products
        </Link>
      </div>
    </section>
    
  );
}
