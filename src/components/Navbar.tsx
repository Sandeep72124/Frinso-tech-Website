"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown,ChevronRight,Cpu, MonitorSmartphone, Activity, ServerCog, Building, Globe2, Newspaper, Target, Users2, Briefcase} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  type SubItem = {
  name: string;
  href: string;
};

type MenuCategory = {
  title: string;
  href?: string;
  icon?: React.ElementType; 
  sub?: SubItem[];
};

  const productMenu = [
    {
      title: "IoT Gateway / Modems / RTU / Telemetry / Data Loggers",
      icon: Cpu,
      sub: [
        { name: "F1: IoT Edge Gateway/RTU/Telemetry ", href: "/Nav_Product/IOT_Gatway/f1" },
        { name: " F1: Telemetry for CGWA ", href: "/Nav_Product/IOT_Gatway/f1_cgwa" },
        { name: "F1: IoT Edge Gateway with 4.20 mA", href: "/Nav_Product/IOT_Gatway/f_4-20_ma" },
        { name: "F5: 4G+LAN IoT Gateway", href: "/Nav_Product/IOT_Gatway/f5" },
        { name: "F6: IOT Gateway for PLC/Solar Inverter/Machine/High Speed data", href: "/Nav_Product/IOT_Gatway/f6_plc" },
        { name: "F8: Solar Pump Remote Monitoring System (RMS)",href:"/Nav_Product/IOT_Gatway/f8"},
        { name: "F9:Frinso LoRaWAN Gateway",href:"/Nav_Product/IOT_Gatway/f9"},
        { name: " F10: Battery Based IoT Gateway", href: "/Nav_Product/IOT_Gatway/f10_battery_based" },
        { name: "F10: Battery Based IoT Gateway with Plus Output for Pluses based Water Meter", href: "/Nav_Product/IOT_Gatway/f10_pulse" },
       
      ],
    },
    {
      title: "Real Time IoT Dashboard",
      icon: MonitorSmartphone,
      sub: [
        { name: "SCADA for Jal Jeevan Mission / AMRUT 2.0 / WTP / STP / ETP Project", href: "/Nav_Product/IOT_Dashboard/scada-jjm" },
        { name: "SCADA for Solar Plant", href: "/Nav_Product/IOT_Dashboard/scada-solar" },
        { name: "SCADA for Smart Grid", href: "/Nav_Product/IOT_Dashboard/scada-grid" },
        { name: "Real-Time Dashboard for Water Management", href: "/Nav_Product/IOT_Dashboard/dashboard-water" },
        { name: "Real-Time Dashboard for Energy Management", href: "/Nav_Product/IOT_Dashboard/dashboard-energy" },
      ],},
    // },{
    // title:"SCADA Automation"
   
    // sub:[
    //    {name:},
   
    // ]
    // },
    {
      title: "Meters / Sensors / Analyzers",
      icon: Activity,
      sub: [
        { name: "Electromagnetic Water Flowmeter", href: "/Nav_Product/Meter-Sensor/meter-em" },
        { name: "Ultrasonic Water Flowmeter", href: "/Nav_Product/Meter-Sensor/meter-ultra" },
        { name: "Bulk Flowmeter", href: "/Nav_Product/Meter-Sensor/meter-bulk" },
        { name: "Pulse-Based Mechanical Water Meter", href: "/Nav_Product/Meter-Sensor/meter-mech" },
        { name: "Battery-Based Ultrasonic Water Meter", href: "/Nav_Product/Meter-Sensor/meter-battery" },
      ],
    },
    {
      title: "Industry-Based Custom Hardware / Software",
       icon: ServerCog,
      sub: [
        { name: "Industrial IoT Systems", href: "/Nav_Product/Custom-Hardware-Software/industrial-iot" },
        { name: "Custom EMS/SCADA Software", href: "/Nav_Product/Custom-Hardware-Software/custom-ems" },
        { name: "Predictive Maintenance AI Tools", href: "/Nav_Product/Custom-Hardware-Software/predictive-ai" },
      ],
    },
  ];

  const solutionMenu = [
    {
      title: "💧 Water Solutions",
      sub: [
        { name: "Smart Flow Water Management", href: "/nav_solutions/water/smart-flow" },
        { name: "Smart Level Management", href: "/nav_solutions/water/smart-level" },
        { name: "Smart Water Quality Analyzer", href: "/nav_solutions/water/smart-quality" },
        { name: "CGWA Solution", href: "/nav_solutions/water/cgwa-solution" },
        { name: "Railway Water Monitoring", href: "/nav_solutions/water/railway" },
        { name: "Intake Well Cum Pump House", href: "/nav_solutions/water/intake-pump-house" },
        { name: "WTP Monitoring", href: "/nav_solutions/water/wtp-monitoring" },
        { name: "Clear Water Sump Cum Pump House", href: "/nav_solutions/water/clear-water-sump" },
        { name: "OHSR / OHMBR Monitoring", href: "/nav_solutions/water/ohsr-monitoring" },
      ],
    },
    {
      title: "🌬️ HVAC Solutions",
      sub: [
        { name: "Smart HVAC Automation", href: "/nav_solutions/hvac/smart-hvac-automation" },
        { name: "Industrial HVAC Energy Management", href: "/nav_solutions/hvac/industrial-energy-management" },
      ],
    },
    {
      title: "🏙️ Smart City Solutions",
      sub: [
        { name: "Smart Water Network SCADA", href: "/nav_solutions/smart-city/smart-water-network" },
        { name: "Smart STP / Sewage Management", href: "/nav_solutions/smart-city/smart-stp-management" },
        { name: "Solid Waste Management IoT", href: "/nav_solutions/smart-city/solid-waste-management" },
        { name: "Smart Energy Management", href: "/nav_solutions/smart-city/smart-energy" },
        { name: "Environmental Monitoring", href: "/nav_solutions/smart-city/environment-monitoring" },
        { name: "Smart Infrastructure Analytics", href: "/nav_solutions/smart-city/infrastructure-analytics" },
        { name: "Smart Asset Tracking", href: "/nav_solutions/smart-city/asset-tracking" },
      ],
    },
    { title: "⚡ Energy & Power Solutions", href: "/nav_solutions/energy-power" },
    { title: "🏭 Industrial & Infrastructure", href: "/nav_solutions/industrial-infra" },
    { title: "🏗️ Building Management System (BMS)", href: "/nav_solutions/bms" },
    { title: "☀️ Solar Plant SCADA", href: "/nav_solutions/solar-scada" },
    { title: "🔋 DG Monitoring & Fuel Management", href: "/nav_solutions/dg-monitoring" },
    { title: "🔌 Smart Energy Management System (EMS)", href: "/nav_solutions/ems" },
    { title: "🌾 Environmental Compliance & OLEMS", href: "/nav_solutions/environmental-compliance" },
    { title: "🧠 Predictive Maintenance AI", href: "/nav_solutions/predictive-ai" },
    { title: "📡 IoT Edge / Gateway Devices", href: "/nav_solutions/iot-edge" },
    { title: "🧩 Custom EMS / SCADA Software", href: "/nav_solutions/custom-ems" },
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
  onMouseEnter={() => {
    clearTimeout((window as any).companyHoverTimeout);
    setCompanyOpen(true);
  }}
  onMouseLeave={() => {
    (window as any).companyHoverTimeout = setTimeout(() => {
      setCompanyOpen(false);
    }, 200);
  }}
>
  <button
    className="flex items-center gap-1 px-4 py-2 hover:text-sky-500 transition"
    aria-haspopup="menu"
    aria-expanded={companyOpen}
  >
    Company
    <ChevronDown
      size={16}
      className={`transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
    />
  </button>

  <AnimatePresence>
    {companyOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: -20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute left-0 mt-3 w-64 rounded-xl bg-white text-gray-800 shadow-2xl border border-gray-200 z-50 overflow-hidden"
        role="menu"
        onMouseEnter={() => clearTimeout((window as any).companyHoverTimeout)}
        onMouseLeave={() => {
          (window as any).companyHoverTimeout = setTimeout(() => {
            setCompanyOpen(false);
          }, 200);
        }}
      >
        {[
          { label: "About Us", href: "/Nav_Company/about", icon: "🏢" },
          { label: "Social Impact", href: "/Nav_Company/social", icon: "🌍" },
         
          { label: "Vision & Mission", href: "/Nav_Company/vision", icon: "🎯" },
          
          { label: "Careers", href: "/Nav_Company/careers", icon: "💼" },
        ].map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 px-5 py-3 hover:bg-sky-50 hover:text-sky-600 transition-all"
              role="menuitem"
              onClick={() => setCompanyOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>


{/* ---------------- PRODUCT DROPDOWN ---------------- */}
<div
  className="relative group"
  onMouseEnter={() => {
    clearTimeout((window as any).productHoverTimeout);
    setProductOpen(true);
  }}
  onMouseLeave={() => {
    (window as any).productHoverTimeout = setTimeout(() => {
      setProductOpen(false);
      setHoveredCategory(null);
    }, 400);
  }}
>
  <button
    className="flex items-center gap-1 hover:text-sky-500 transition font-medium"
    aria-haspopup="menu"
    aria-expanded={productOpen}
  >
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
        initial={{ opacity: 0, x: -40 }} // Slide from left
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35, type: "spring", stiffness: 180, damping: 16 }}
        className="absolute top-full left-0 mt-3 bg-white text-gray-800 rounded-2xl shadow-2xl p-3 
                   w-[420px] border border-gray-200 z-50 grid gap-1"
        onMouseEnter={() => clearTimeout((window as any).productHoverTimeout)}
        onMouseLeave={() => {
          (window as any).productHoverTimeout = setTimeout(() => {
            setProductOpen(false);
            setHoveredCategory(null);
          }, 400);
        }}
      >
        {productMenu.map((cat, i) => (
          <div
            key={`${cat.title}-${i}`}
            className="relative group/item"
            onMouseEnter={() => {
              clearTimeout((window as any).hoverTimeout);
              if (cat.sub.length > 0) setHoveredCategory(cat.title);
            }}
            onMouseLeave={() => {
              (window as any).hoverTimeout = setTimeout(() => {
                setHoveredCategory(null);
              }, 250);
            }}
          >
            {/* ---- Main Category ---- */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-sky-50 cursor-pointer transition">
              <span className="font-medium text-[15px] flex items-center gap-2">
                {/* 🧠 Icon section */}
                {i === 0 && <Cpu className="w-4 h-4 text-sky-500" />} {/* IoT Gateway */}
                {i === 1 && <MonitorSmartphone className="w-4 h-4 text-sky-500" />} {/* Dashboard */}
                {i === 2 && <Activity className="w-4 h-4 text-sky-500" />} {/* Meters */}
                {i === 3 && <ServerCog className="w-4 h-4 text-sky-500" />} {/* Custom HW/SW */}
                {cat.title}
              </span>
              {cat.sub.length > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-sky-500" />
              )}
            </div>

            {/* ---- Submenu ---- */}
            {cat.sub.length > 0 && hoveredCategory === cat.title && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
                className="absolute top-0 left-full ml-2 bg-white rounded-xl shadow-xl border border-gray-200 
                           w-[300px] p-2 flex flex-col gap-1 z-50"
                onMouseEnter={() => clearTimeout((window as any).hoverTimeout)}
                onMouseLeave={() => {
                  (window as any).hoverTimeout = setTimeout(() => {
                    setHoveredCategory(null);
                  }, 250);
                }}
              >
                {cat.sub.map((item, idx) => (
                  <Link
                    key={`${cat.title}-${idx}`}
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-sky-500 hover:bg-sky-50 
                               px-3 py-1.5 rounded-md transition"
                    onClick={() => {
                      setProductOpen(false);
                      setHoveredCategory(null);
                    }}
                  >
                    {item.name}
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
{/* ---------------- END PRODUCT DROPDOWN ---------------- */}


{/* ---------------- SOLUTIONS DROPDOWN ---------------- */}
<div
  className="relative group"
  onMouseEnter={() => {
    clearTimeout((window as any).solutionHoverTimeout);
    setSolutionOpen(true);
  }}
  onMouseLeave={() => {
    (window as any).solutionHoverTimeout = setTimeout(() => {
      setSolutionOpen(false);
      setHoveredCategory(null);
    }, 400); // buffer for submenu hover
  }}
>
  <button
    className="flex items-center gap-1 hover:text-sky-500 transition font-medium"
    aria-haspopup="menu"
    aria-expanded={solutionOpen}
  >
    Solutions
    <ChevronDown
      className={`w-4 h-4 transition-transform ${
        solutionOpen ? "rotate-180 text-sky-400" : ""
      }`}
    />
  </button>

  <AnimatePresence>
    {solutionOpen && (
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 180, damping: 18 }}
        className="absolute top-full left-0 mt-3 bg-white text-gray-800 rounded-2xl shadow-2xl 
                   p-3 w-[350px] border border-gray-200 z-50 grid gap-1"
        onMouseEnter={() => clearTimeout((window as any).solutionHoverTimeout)}
        onMouseLeave={() => {
          (window as any).solutionHoverTimeout = setTimeout(() => {
            setSolutionOpen(false);
            setHoveredCategory(null);
          }, 400);
        }}
      >
        {solutionMenu.map((cat: any, i: number) => (
          <div
            key={`${cat.title}-${i}`}
            className="relative group/item"
            onMouseEnter={() => {
              clearTimeout((window as any).submenuHoverTimeout);
              if (cat.sub) setHoveredCategory(cat.title);
            }}
            onMouseLeave={() => {
              (window as any).submenuHoverTimeout = setTimeout(() => {
                setHoveredCategory(null);
              }, 300);
            }}
          >
            {/* ---- Category with Submenu ---- */}
            {cat.sub ? (
              <div
                className="flex items-center justify-between px-3 py-1.5 
                            rounded-md hover:bg-sky-50 cursor-pointer transition"
              >
                <span className="font-medium text-[15px] flex items-center gap-2">
                  {/* Safe icon rendering — works even if icon undefined */}
                  {cat.icon && typeof cat.icon === "function" && (
                    <cat.icon className="w-4 h-4 text-sky-500" />
                  )}
                  {cat.title}
                </span>

                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-sky-500" />
              </div>
            ) : (
              <Link
                href={cat.href ?? "#"}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[15px] 
                           hover:bg-sky-50 hover:text-sky-600 font-medium transition"
                onClick={() => setSolutionOpen(false)}
              >
                {cat.icon && typeof cat.icon === "function" && (
                  <cat.icon className="w-4 h-4 text-sky-500" />
                )}
                {cat.title}
              </Link>
            )}

            {/* ---- Submenu ---- */}
            {cat.sub && hoveredCategory === cat.title && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.25, type: "spring", stiffness: 220, damping: 20 }}
                className="absolute top-0 left-full ml-2 bg-white rounded-xl shadow-xl border 
                           border-gray-200 w-[300px] p-2 flex flex-col gap-1 z-50"
                onMouseEnter={() => clearTimeout((window as any).submenuHoverTimeout)}
                onMouseLeave={() => {
                  (window as any).submenuHoverTimeout = setTimeout(() => {
                    setHoveredCategory(null);
                  }, 300);
                }}
              >
                {cat.sub.map((item: any, idx: number) => (
                  <Link
                    key={`${cat.title}-${idx}`}
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-sky-500 hover:bg-sky-50 
                               px-3 py-1.5 rounded-md transition"
                    onClick={() => setSolutionOpen(false)}
                  >
                    {item.name}
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
{/* ---------------- END SOLUTIONS DROPDOWN ---------------- */}

      {/* Project Dropdown */}
<div
  className="relative"
  onMouseEnter={() => {
    clearTimeout((window as any).projectHoverTimeout);
    setProjectOpen(true);
  }}
  onMouseLeave={() => {
    (window as any).projectHoverTimeout = setTimeout(() => {
      setProjectOpen(false);
    }, 200);
  }}
>
  <button
    className="flex items-center gap-1 px-4 py-2 hover:text-sky-500 transition"
    aria-haspopup="menu"
    aria-expanded={projectOpen}
  >
    Project
    <ChevronDown
      size={16}
      className={`transition-transform duration-200 ${projectOpen ? "rotate-180" : ""}`}
    />
  </button>

  <AnimatePresence>
    {projectOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: -15 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: -15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute left-0 mt-3 w-72 rounded-xl bg-white text-gray-800 shadow-2xl border border-gray-200 z-50 overflow-hidden"
        role="menu"
        onMouseEnter={() => clearTimeout((window as any).projectHoverTimeout)}
        onMouseLeave={() => {
          (window as any).projectHoverTimeout = setTimeout(() => {
            setProjectOpen(false);
          }, 200);
        }}
      >
        {[
          { label: "Water", href: "/Nav_Project/water", icon: "💧" },
          { label: "Energy Management System", href: "/Nav_Project/energy_manage", icon: "⚡" },
          { label: "HVAC", href: "/Nav_Project/HVAC", icon: "🌬️" },
          { label: "Solar", href: "/Nav_Project/solar", icon: "☀️" },
          { label: "Building Management System", href: "/Nav_Project/building", icon: "🏢" },
        ].map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 px-5 py-3 hover:bg-sky-50 hover:text-sky-600 transition-all"
              role="menuitem"
              onClick={() => setProjectOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>
          <Link href="/case-studies" className="px-4 py-2 hover:text-sky-500">Case Studies</Link>
          <Link href="/contact" className="px-4 py-2 hover:text-sky-500">Contact Us</Link>

          {/* Dynamic Button (Login on home, Request Demo elsewhere) */}
          {isHomePage ? (
            <a
              href="https://frinso.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-sky-500 px-4 py-2 transition hover:bg-sky-500 hover:text-white"
            >
              Login
            </a>
          ) : (
            <Link
              href="/demo"
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

      {/* ---------------- MOBILE MENU ---------------- */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className={`md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl flex flex-col items-start gap-4 px-6 py-6 font-medium text-gray-800 z-[1000]`}
    >
      {/* --- Home --- */}
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="w-full px-2 py-2 hover:text-sky-600"
      >
        Home
      </Link>

      {/* --- Company Dropdown --- */}
      <details className="w-full group">
        <summary className="cursor-pointer px-2 py-2 hover:text-sky-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Building className="w-4 h-4 text-sky-500" /> Company
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm border-l border-gray-200 pl-3">
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/social" onClick={() => setIsOpen(false)}>Social Impact</Link>
          <Link href="/wall" onClick={() => setIsOpen(false)}>Media Wall</Link>
          <Link href="/vision" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
          <Link href="/team" onClick={() => setIsOpen(false)}>Our Team</Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
        </div>
      </details>

      {/* --- Product Dropdown --- */}
      <details className="w-full group">
        <summary className="cursor-pointer px-2 py-2 hover:text-sky-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-500" /> Product
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="ml-4 mt-2 flex flex-col gap-3 text-sm border-l border-gray-200 pl-3">
          {productMenu.map((cat, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer py-1 hover:text-sky-600 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[14px] font-medium">
                  {i === 0 && <Cpu className="w-4 h-4 text-sky-500" />}
                  {i === 1 && <MonitorSmartphone className="w-4 h-4 text-sky-500" />}
                  {i === 2 && <Activity className="w-4 h-4 text-sky-500" />}
                  {i === 3 && <ServerCog className="w-4 h-4 text-sky-500" />}
                  {cat.title}
                </span>
                {cat.sub.length > 0 && (
                  <ChevronDown className="w-3 h-3 text-gray-500 group-open:rotate-180 transition-transform" />
                )}
              </summary>
              <div className="ml-3 mt-2 flex flex-col gap-2 text-[13px] border-l border-gray-100 pl-2">
                {cat.sub.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-sky-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </details>

      {/* --- Solutions Dropdown --- */}
      <details className="w-full group">
        <summary className="cursor-pointer px-2 py-2 hover:text-sky-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-sky-500" /> Solutions
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="ml-4 mt-2 flex flex-col gap-3 text-sm border-l border-gray-200 pl-3">
          {solutionMenu.map((cat, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer py-1 hover:text-sky-600 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[14px] font-medium">
                  {cat.title}
                </span>
                {cat.sub && (
                  <ChevronDown className="w-3 h-3 text-gray-500 group-open:rotate-180 transition-transform" />
                )}
              </summary>

              {cat.sub && (
                <div className="ml-3 mt-2 flex flex-col gap-2 text-[13px] border-l border-gray-100 pl-2">
                  {cat.sub.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-sky-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </details>
          ))}
        </div>
      </details>

      {/* --- Project Dropdown --- */}
      <details className="w-full group">
        <summary className="cursor-pointer px-2 py-2 hover:text-sky-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-sky-500" /> Project
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm border-l border-gray-200 pl-3">
          <Link href="/Nav_Project/water" onClick={() => setIsOpen(false)}>💧 Water</Link>
          <Link href="/Nav_Project/energy_manage" onClick={() => setIsOpen(false)}>⚡ Energy Management System</Link>
          <Link href="/Nav_Project/hvac" onClick={() => setIsOpen(false)}>🌬️ HVAC</Link>
          <Link href="/Nav_Project/solar" onClick={() => setIsOpen(false)}>☀️ Solar</Link>
          <Link href="/Nav_Project/building" onClick={() => setIsOpen(false)}>🏢 Building Management System</Link>
        </div>
      </details>

      {/* --- Case Studies & Contact --- */}
      <Link href="/case-studies" onClick={() => setIsOpen(false)} className="px-2 py-2 hover:text-sky-600">Case Studies</Link>
      <Link href="/contact" onClick={() => setIsOpen(false)} className="px-2 py-2 hover:text-sky-600">Contact Us</Link>

   {/* --- CTA Button --- */}
{isHomePage ? (
  <a
    href="https://frinso.co.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 w-full text-center rounded-lg border border-sky-500 py-2 hover:bg-sky-500 hover:text-white transition"
  >
    Login
  </a>
) : (
  <Link
    href="/demo"
    className="mt-3 w-full text-center rounded-lg bg-sky-500 text-white py-2 hover:bg-sky-600 transition"
  >
    Request Demo
  </Link>
)}

    </motion.div>
  )}
</AnimatePresence>
{/* ---------------- END MOBILE MENU ---------------- */}

    </nav>
    

  );
}
