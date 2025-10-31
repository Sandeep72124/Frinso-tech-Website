import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import {
  Cpu,
  Droplets,
  Gauge,
  ThermometerSun,
  MonitorSmartphone,
  Factory,
  Building2,
  BarChart3,
  SignalHigh,
  CloudLightning,
  Zap,
  Cloud,
} from "lucide-react";
import {

  Server,
  BrainCircuit,
  BellRing,
  Waves,
 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.png"
          alt="Frinso Tech footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-16">
        
        {/* Company Info */}
        <div>
          <img src="/logo.svg" alt="Frinso Tech" className="h-14 mb-4" />
          <p className="text-gray-300 leading-relaxed">
            Frinso Tech provides IoT devices and connected infrastructure solutions 
            for Smart Water, Energy, HVAC, DG, and Smart City applications.
          </p>
          <div className="flex gap-4 mt-6">
           
            <a href="https://x.com/Frinso5341" className="p-2 bg-sky-600 hover:bg-sky-500 rounded-full"><Twitter size={18} /></a>
            <a href="https://www.instagram.com/frinso5341/" className="p-2 bg-sky-600 hover:bg-sky-500 rounded-full"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/company/102343882/admin/dashboard/" className="p-2 bg-sky-600 hover:bg-sky-500 rounded-full"><Linkedin size={18} /></a>
          </div>
        </div>

    {/* Services */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-sky-400 flex items-center gap-2">
    <Cpu className="text-sky-400 w-5 h-5" /> Services
  </h3>
  <ul className="space-y-3 text-gray-300">
    {/* Existing Services (Kept as-is) */}
     {/* ✅ Newly Added Services */}
    <li>
      <a
        href="/nav_solutions/scada"
        className="flex items-center gap-3 group transition"
      >
        <Server size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          SCADA System Integration
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/ai-realtime-water"
        className="flex items-center gap-3 group transition"
      >
        <BrainCircuit size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          IoT & AI-Powered Real-Time Water Monitoring
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/railway-warning-system"
        className="flex items-center gap-3 group transition"
      >
        <BellRing size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Advance Warning System for Railway Staff
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/level-monitoring"
        className="flex items-center gap-3 group transition"
      >
        <Waves size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Smart Level Monitoring (Ultrasonic/Radar/Hydrostatic)
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/energy/smart-energy"
        className="flex items-center gap-3 group transition"
      >
        <Zap size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Smart Energy Management
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/infrastructure/automation"
        className="flex items-center gap-3 group transition"
      >
        <Factory size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Infrastructure Automation & Control
        </span>
      </a>
    </li>
    <li>
      <a
        href="/Nav_Product/IOT_Gatway/f1"
        className="flex items-center gap-3 group transition"
      >
        <Cpu size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          IoT Product Design & Engineering
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/water/smart-flow"
        className="flex items-center gap-3 group transition"
      >
        <Droplets size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Smart Water Management
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/energy-power"
        className="flex items-center gap-3 group transition"
      >
        <Gauge size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Energy & DG Monitoring
        </span>
      </a>
    </li>

    <li>
      <a
        href="/nav_solutions/hvac/smart-hvac-automation"
        className="flex items-center gap-3 group transition"
      >
        <ThermometerSun size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          Smart HVAC Automation
        </span>
      </a>
    </li>

    <li>
      <a
        href="/Nav_Product/IOT_Dashboard/scada-jjm"
        className="flex items-center gap-3 group transition"
      >
        <MonitorSmartphone size={18} className="text-sky-400 group-hover:animate-pulse" />
        <span className="group-hover:text-sky-400 transition">
          IoT Dashboard Development
        </span>
      </a>
    </li>

   
  </ul>
</div>


{/* Solutions */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-sky-400 flex items-center gap-2">
    <Factory className="text-sky-400 w-5 h-5" /> Solutions
  </h3>
  <ul className="space-y-3 text-gray-300">

    {/* Water Solutions */}
    <li>
      <a
        href="/nav_solutions/water/smart-flow"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Droplets size={18} className="text-sky-400" />
        Smart Water Management
      </a>
    </li>

    {/* Energy & Power */}
    <li>
      <a
        href="/nav_solutions/ems"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Zap size={18} className="text-sky-400" />
        Energy & Power Solutions
      </a>
    </li>

    {/* HVAC */}
    <li>
      <a
        href="/nav_solutions/hvac/smart-hvac-automation"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <ThermometerSun size={18} className="text-sky-400" />
        HVAC Automation
      </a>
    </li>

    {/* Smart City */}
    <li>
      <a
        href="/nav_solutions/smart-city/smart-water-network"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Building2 size={18} className="text-sky-400" />
        Smart City Solutions
      </a>
    </li>

    {/* DG Monitoring */}
    <li>
      <a
        href="/nav_solutions/dg-monitoring"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Factory size={18} className="text-sky-400" />
        DG Monitoring & Fuel Management
      </a>
    </li>

    {/* Smart Energy Management */}
    <li>
      <a
        href="/nav_solutions/ems"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <BarChart3 size={18} className="text-sky-400" />
        Smart Energy Management System
      </a>
    </li>

    {/* Environmental & Compliance */}
    <li>
      <a
        href="/nav_solutions/environmental-compliance"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <CloudLightning size={18} className="text-sky-400" />
        Environmental Compliance & OLEMS
      </a>
    </li>

    {/* Predictive AI */}
    <li>
      <a
        href="/nav_solutions/predictive-ai"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Cpu size={18} className="text-sky-400" />
        Predictive Maintenance AI
      </a>
    </li>

    {/* IoT Edge */}
    <li>
      <a
        href="/nav_solutions/iot-edge"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <SignalHigh size={18} className="text-sky-400" />
        IoT Edge / Gateway Devices
      </a>
    </li>

    {/* Custom EMS */}
    <li>
      <a
        href="/nav_solutions/custom-ems"
        className="flex items-center gap-3 hover:text-sky-400 transition"
      >
        <Cloud size={18} className="text-sky-400" />
        Custom EMS / SCADA Software
      </a>
    </li>
  </ul>
</div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-400">Contact Us</h3>
         <ul className="space-y-4 text-gray-300">
  {/* Location */}
  <li className="flex gap-3 items-start">
    <a
      href="https://tinyurl.com/Frinso-Tech"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-400 hover:text-sky-500 transition"
    >
      <MapPin className="mt-1 cursor-pointer" size={22} />
    </a>
    <span>
      <strong>Frinso Technologies Pvt. Ltd.</strong>
      <br />
      C-211, Floral Deck Plaza, Central M.I.D.C Road, Near Seepz,
      Andheri (East), Mumbai 400093, India
    </span>
  </li>

  {/* Email */}
  <li className="flex gap-3 items-start">
    <a
      href="mailto:services@frinsotech.com"
      className="text-sky-400 hover:text-sky-500 transition"
    >
      <Mail className="mt-1 cursor-pointer" size={22} />
    </a>
    <span>
      <a
        href="mailto:services@frinsotech.com"
        className="hover:text-sky-400 transition"
      >
        services@frinsotech.com
      </a>
    </span>
  </li>

  {/* Phone */}
  <li className="flex gap-3 items-start">
    <a
      href="tel:+919969800285"
      className="text-sky-400 hover:text-sky-500 transition"
    >
      <Phone className="mt-1 cursor-pointer" size={22} />
    </a>
    <span>
      <a href="tel:+919969800285" className="hover:text-sky-400 transition">
        +91 99698 00285
      </a>
    </span>
  </li>
</ul>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20 text-center py-4 text-gray-400 text-sm backdrop-blur-sm bg-black/50">
        <p>
          © {new Date().getFullYear()} Frinso Technologies Pvt. Ltd. | All Rights Reserved
        </p>
        <div className="flex justify-center gap-6 mt-2 text-sky-400 text-xs">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Disclaimer</a>
          <a href="#">Legal Notice</a>
        </div>
      </div>
    </footer>
  );
}
