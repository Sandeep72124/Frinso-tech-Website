"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, LogIn, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://frinso.io/";
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fbff] to-[#e8f4ff] text-gray-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <section
        className="relative w-full h-[40vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/login-bg.png')",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.8)",
        }}
      >
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031625]/90 to-[#0a2540]/80 pointer-events-none"></div>

        {/* Title + Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold mb-5">Login</h1>

          <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
            <Home className="w-8 h-8" />
            <Link href="/" className="text-2xl hover:text-sky-400 transition">
              Home
            </Link>
            <span className="text-2xl">›</span>
            <span className="text-2xl text-white/90">Login</span>
          </div>
        </motion.div>
      </section>

      {/* Login Form Section */}
      <section className="relative flex items-center justify-center py-20 px-6 bg-gradient-to-br from-[#0a2540] via-[#0b3a6f] to-[#38bdf8] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/login-bg.png')] bg-cover bg-center opacity-10 blur-sm pointer-events-none"></div>

        <motion.div
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo or Icon */}
          <div className="flex flex-col items-center mb-8">
            <motion.img
              src="/logo.svg"
              alt="Frinso Logo"
              className="w-50 h-50 mb-4 drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <h2 className="text-3xl font-bold text-center text-sky-300">
              Welcome Back
            </h2>
            <p className="text-white/70 text-center text-sm mt-1">
              Login to access your dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@frinso.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <button
                type="button"
                className="absolute right-4 top-10 text-gray-400 hover:text-sky-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-400 text-gray-900 font-semibold py-3 rounded-lg shadow-md hover:shadow-sky-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <LogIn size={18} />
                Login
              </div>
            </motion.button>
          </form>

          {/* Forgot Password / Signup Links */}
          <div className="flex justify-between mt-6 text-sm text-white/70">
            <a href="#" className="hover:text-sky-300 transition">
              Forgot Password?
            </a>
            <a href="/signup" className="hover:text-sky-300 transition">
              Create Account
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
