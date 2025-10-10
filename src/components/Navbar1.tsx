"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Frinso Tech logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className={`hidden md:flex items-center gap-10 font-medium ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link href="/" className="hover:text-sky-500 transition">
            Home
          </Link>

          {/* Dropdown: COMPANY */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-sky-500 transition">
              Company
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isCompanyOpen ? "rotate-360" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isCompanyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 text-gray-800 overflow-hidden"
                >
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Social Impact", href: "/social" },
                    { name: "Media Wall", href: "/wall" },
                    { name: "Vision & Mission", href: "/vision" },
                    { name: "Team", href: "/team" },
                    { name: "Careers", href: "/careers" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-sky-300 hover:text-sky-700 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/product" className="hover:text-sky-500 transition">
            Product
          </Link>
          <Link href="/solutions" className="hover:text-sky-500 transition">
            Solutions
          </Link>
          <Link href="/projects" className="hover:text-sky-500 transition">
            Projects
          </Link>
          <Link href="/case-studies" className="hover:text-sky-500 transition">
            Case Studies
          </Link>
          <Link href="/contact" className="hover:text-sky-500 transition">
            Contact Us
          </Link>
         <Link
  href="/contact"
  className="rounded-lg border border-sky-500 px-4 py-2 transition hover:bg-sky-500 hover:text-white"
>
  Request Demo
</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-16 left-0 w-full bg-blue-500/20 backdrop-blur-md border-t border-white/10 shadow-lg flex flex-col gap-4 px-6 py-6 font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            {/* COMPANY - Mobile Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 flex flex-col gap-2 mt-2 text-sm"
                  >
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                      About Us
                    </Link>
                    <Link href="/social" onClick={() => setIsOpen(false)}>
                      Social Impact
                    </Link>
                    <Link href="/wall" onClick={() => setIsOpen(false)}>
                      Media Wall
                    </Link>
                    <Link href="/vision" onClick={() => setIsOpen(false)}>
                      Vision & Mission
                    </Link>
                    <Link href="/team" onClick={() => setIsOpen(false)}>
                      Team
                    </Link>
                    <Link href="/careers" onClick={() => setIsOpen(false)}>
                      Careers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/product" onClick={() => setIsOpen(false)}>
              Product
            </Link>
            <Link href="/solutions" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/case-studies" onClick={() => setIsOpen(false)}>
              Case Studies
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-sky-500 px-4 py-2 transition hover:bg-sky-500 hover:text-white"
            >
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
