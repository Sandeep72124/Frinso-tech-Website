"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Frinso! We'll get back to you soon.");
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Right Floating Illustration (Flipped Side) */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/demo.jpg"
            alt="Schedule Demo Illustration"
            className="max-h-[450px] w-auto object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* glowing light behind the image */}
          <div className="absolute inset-0 bg-gradient-radial from-sky-400/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </motion.div>

        {/* Left Form Section */}
        <motion.div
          className="flex-1 w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 lg:p-10 border border-white/10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="text-sm bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full">
              💬 Get in Touch
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-6">Schedule Your Free Demo</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-400 text-gray-900 font-semibold py-3 rounded-lg hover:from-sky-300 hover:to-cyan-300 transition-all duration-300 shadow-md hover:shadow-sky-300/50"
            >
              Submit Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
