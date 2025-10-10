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
      {/* Services */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-sky-400 flex items-center gap-2">
    <Cpu className="text-sky-400 w-5 h-5" /> Services
  </h3>
  <ul className="space-y-3 text-gray-300">
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <Cpu size={18} className="text-sky-400" />
      IoT Product Design & Engineering
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <Droplets size={18} className="text-sky-400" />
      Smart Water Management
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <Gauge size={18} className="text-sky-400" />
      Energy & DG Monitoring
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <ThermometerSun size={18} className="text-sky-400" />
      Smart HVAC Automation
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <MonitorSmartphone size={18} className="text-sky-400" />
      IoT Dashboard Development
    </li>
  </ul>
</div>

{/* Solutions */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-sky-400 flex items-center gap-2">
    <Factory className="text-sky-400 w-5 h-5" /> Solutions
  </h3>
  <ul className="space-y-3 text-gray-300">
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <Factory size={18} className="text-sky-400" />
      Industrial IoT
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <Building2 size={18} className="text-sky-400" />
      Smart City & Utilities
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <SignalHigh size={18} className="text-sky-400" />
      Smart Infrastructure
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <BarChart3 size={18} className="text-sky-400" />
      Data Analytics Platform
    </li>
    <li className="flex items-center gap-3 hover:text-sky-400 transition">
      <CloudLightning size={18} className="text-sky-400" />
      Real-time Monitoring
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
