"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown,ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const productMenu = [
    {
      title: "IoT Gateway / Modems / RTU / Telemetry / Data Loggers",
      sub: [
        "F1",
        "F1: CGWA",
        "F1: 4-20 mA",
        "F6 - PLC",
        "F10 Battery Based",
        "F10 Pulse and Battery Based",
        "F5",
      ],
    },
    {
      title: "Real Time IoT Dashboard / SCADA",
      sub: [
        "SCADA for JAL JEEVAN MISSION / AMRUT 2.0 / WTP / STP / ETP Project",
        "SCADA for Solar Plant",
        "SCADA for Smart Grid",
        "Real-Time Dashboard for Water Management",
        "Real-Time Dashboard for Energy Management",
      ],
    },
    {
      title: "Meters / Sensors / Analyzers",
      sub: [
        "Electromagnetic Water Flowmeter",
        "Ultrasonic Water Flowmeter",
        "Bulk Flowmeter",
        "Pulse-Based Mechanical Water Meter",
        "Battery-Based Ultrasonic Water Meter",
      ],
    },
    {
      title: "Industry-Based Custom Hardware / Software",
      sub: [],
    },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Frinso Tech logo" className="h-12 w-auto " />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-5 font-medium ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <Link href="/" className="px-4 py-2 hover:text-sky-500">Home</Link>

          {/* Company Dropdown (desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 hover:text-sky-500"
              aria-haspopup="menu"
              aria-expanded={companyOpen}
            >
              Company
              <ChevronDown
                size={16}
                className={`transition-transform ${companyOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 rounded-xl bg-white text-gray-800 shadow-xl border border-gray-200 overflow-hidden"
                  role="menu"
                >
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Social Impact", href: "/social" },
                    { label: "Media Wall", href: "/wall" },
                    { label: "Vision & Mission", href: "/vision" },
                    { label: "Our Team", href: "/team" },
                    { label: "Careers", href: "/careers" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => {
              setProductOpen(false);
              setHoveredCategory(null);
            }}
          >
            <button className="flex items-center gap-1 hover:text-sky-500 transition">
              Product
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  productOpen ? "rotate-180 text-sky-400" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-xl shadow-2xl p-4 min-w-[320px] grid gap-2 border border-gray-200"
                >
                  {productMenu.map((cat, i) => (
                    <div
                      key={i}
                      className="relative group/item"
                      onMouseEnter={() => setHoveredCategory(cat.title)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-sky-50 cursor-pointer">
                        <span className="font-medium">{cat.title}</span>
                        {cat.sub.length > 0 && (
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-sky-500" />
                        )}
                      </div>

                      {/* Submenu */}
                      {cat.sub.length > 0 && hoveredCategory === cat.title && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-0 left-full ml-2 bg-white rounded-xl shadow-xl border border-gray-200 w-[300px] p-3 flex flex-col gap-2 z-50"
                        >
                          {cat.sub.map((item, idx) => (
                            <Link
                              key={idx}
                              href="#"
                              className="text-sm text-gray-700 hover:text-sky-500 hover:bg-sky-50 px-3 py-2 rounded-lg transition"
                            >
                              {item}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions" className="px-4 py-2 hover:text-sky-500">Solutions</Link>
          <Link href="/projects" className="px-4 py-2 hover:text-sky-500">Projects</Link>
          <Link href="/case-studies" className="px-4 py-2 hover:text-sky-500">Case Studies</Link>
          <Link href="/contact" className="px-4 py-2 hover:text-sky-500">Contact Us</Link>

          {/* Dynamic Button (Login on home, Request Demo elsewhere) */}
          {isHomePage ? (
            <a
              href="https://frinso.io/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-sky-500 px-4 py-2 transition hover:bg-sky-500 hover:text-white"
            >
              Login
            </a>
          ) : (
            <Link
              href="/contact"
              className="rounded-lg bg-sky-500 text-white px-4 py-2 transition hover:bg-sky-600 hover:scale-105"
            >
              Request Demo
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden absolute top-16 left-0 w-full bg-blue-500/20 backdrop-blur-md border-t border-white/10 shadow-lg flex flex-col items-start gap-4 px-6 py-6 font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Company (mobile collapsible) */}
            <details className="w-full">
              <summary className="cursor-pointer hover:text-sky-400">Company</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link href="/social" onClick={() => setIsOpen(false)}>Social Impact</Link>
                <Link href="/wall" onClick={() => setIsOpen(false)}>Media Wall</Link>
                <Link href="/vision" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
                <Link href="/team" onClick={() => setIsOpen(false)}>Our Team</Link>
                <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
              </div>
            </details>

            <Link href="/product" onClick={() => setIsOpen(false)}>Product</Link>
            <Link href="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

            {/* Dynamic Button (mobile) */}
            {isHomePage ? (
              <a
                href="https://frinso.io/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-sky-500 px-4 py-2 transition hover:bg-sky-500 hover:text-white"
              >
                Login
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-sky-500 text-white px-4 py-2 transition hover:bg-sky-600 hover:scale-105"
              >
                Request Demo
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
