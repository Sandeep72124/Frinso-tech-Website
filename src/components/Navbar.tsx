"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Frinso Tech logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-10 font-medium ${
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

          <Link href="/product" className="px-4 py-2 hover:text-sky-500">Product</Link>
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
