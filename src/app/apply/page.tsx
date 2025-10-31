"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ApplyNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    // ✅ Phone validation (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    alert("✅ Thank you! Your application has been submitted successfully.");
    // TODO: integrate with backend or email API
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#081420]/90" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-sky-400"
          >
            Apply Now
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 text-lg text-white/85"
          >
            Submit your application to join Frinso Technologies Pvt. Ltd.
          </motion.p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#0b1e32] text-white py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-sky-300 mb-8 text-center"
          >
            Application Form
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl space-y-6"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-white/80">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#081420] text-white border border-white/10 focus:border-sky-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-white/80">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#081420] text-white border border-white/10 focus:border-sky-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-white/80">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter 10-digit mobile number"
                className={`w-full px-4 py-3 rounded-xl bg-[#081420] text-white border ${
                  error ? "border-red-500" : "border-white/10"
                } focus:border-sky-400 focus:outline-none`}
              />
              {error && (
                <p className="flex items-center gap-2 text-red-400 text-sm mt-1">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              )}
            </div>

            {/* Position */}
            <div>
              <label className="block mb-2 text-white/80">
                Position Applying For <span className="text-red-500">*</span>
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#081420] text-white border border-white/10 focus:border-sky-400 focus:outline-none"
              >
                <option value="">Select Position</option>
                <option>Founder’s Office Assistant</option>
                <option>Sales & Business Development Executive</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-white/80">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#081420] text-white border border-white/10 focus:border-sky-400 focus:outline-none resize-none"
                placeholder="Tell us briefly why you're a great fit..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block mb-2 text-white/80 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-400" /> Resume Upload{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="block w-full text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white py-3 rounded-xl font-semibold transition"
            >
              <Send className="w-5 h-5" />
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
}
