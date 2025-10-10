"use client";

import { motion } from "framer-motion";
import { Home, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Thank you for contacting Frinso! We'll get back to you soon.");
  };

  return (
    <main className="min-h-screen flex flex-col text-gray-900 bg-white">
      <Navbar />

      {/* ✅ HERO SECTION FIXED */}
      {/* Hero Section */}
<section
  className="relative w-full h-[45vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
  style={{
    backgroundImage: "url('/contact.png')",
    backgroundSize: "cover",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* 🔹 Blurred background overlay */}
  <div className="absolute inset-0 backdrop-blur-[3px] bg-black/40"></div>

  {/* Title + Breadcrumb */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10"
  >
    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
    <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
      <Home className="w-4 h-4" />
      <Link href="/" className="hover:text-sky-400 transition text-lg">
        Home
      </Link>
      <span className="text-lg">›</span>
      <span className="text-lg text-white/90">Contact Us</span>
    </div>
  </motion.div>
</section>


      {/* ✅ CONTACT FORM & INFO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT FORM */}
          <motion.div
            className="flex-1 w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-200"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Fill out the form below or contact us
              directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-sky-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-sky-400 outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-sky-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold py-3 rounded-lg hover:from-sky-400 hover:to-cyan-300 transition-all duration-300 shadow-md hover:shadow-sky-300/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-start gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-3 hover:text-sky-500 transition cursor-pointer">
                <MapPin className="text-sky-500 w-10 h-10 mt-1" />
                <span>
                  <strong>Frinso Technologies Pvt. Ltd.</strong>
                  <br />
                  C-211, Floral Deck Plaza, Central M.I.D.C Road, Near Seepz,
                  Andheri (East), Mumbai 400093, India
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-sky-500 transition cursor-pointer">
                <Mail className="text-sky-500 w-10 h-10" />
                <a href="mailto:services@frinsotech.com">
                  services@frinsotech.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-sky-500 transition cursor-pointer">
                <Phone className="text-sky-500 w-10 h-10" />
                <a href="tel:+919969800285">+91 9969800285</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
