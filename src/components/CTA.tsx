"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ✅ Validate phone number (must be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    alert("✅ Thank you! We'll schedule your demo shortly.");
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#031625] via-[#0a2540] to-[#1e3a8a] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Right Floating Illustration */}
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
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
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
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-white/80 text-sm">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none w-full"
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80 text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none w-full"
                />
              </div>
            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-white/80 text-sm">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit Phone Number"
                  className={`bg-white/10 border ${
                    error ? "border-red-500" : "border-white/20"
                  } rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none w-full`}
                />
                {error && (
                  <p className="flex items-center gap-2 text-red-400 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-white/80 text-sm">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-white/80 text-sm">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
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
