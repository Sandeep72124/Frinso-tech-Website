export default function SolutionsSection() {
  const items = [
    {
      title: "Smart Water Management",
      desc: "Monitor and optimize STP, WTP, and borewell operations with IoT integration.",
      icon: "💧",
      img: "/water.png",
    },
    {
      title: "Smart Energy Management",
      desc: "Track energy usage, detect inefficiencies, and reduce T&D losses through analytics.",
      icon: "⚡",
      img: "/energy.jpg",
    },
    {
      title: "Smart HVAC Monitoring",
      desc: "Monitor chillers, compressors, and sensors for predictive maintenance.",
      icon: "❄️",
      img: "/hvac.jpg",
    },
    {
      title: "Smart DG Monitoring",
      desc: "Monitor fuel usage, detect theft, and optimize generator performance.",
      icon: "⛽",
      img: "/dg.jpg",
    },
    {
      title: "Smart Rail Water Monitoring",
      desc: "IoT-enabled water management for trains — ensuring efficient refilling and tracking.",
      icon: "🚉",
      img: "/rail.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#031625] via-[#0a2540] to-[#1e3a8a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl font-bold text-sky-300 mb-12">Our Smart Solutions</h2>

      {/* Water ripple background animation */}
      <div className="absolute inset-0  opacity-10 mix-blend-soft-light bg-cover bg-center animate-slowPulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 relative z-10">
        {/* Left side - solution cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group backdrop-blur-sm"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/70 via-[#1e3a8a]/30 to-transparent group-hover:opacity-90 transition-all duration-700"></div>

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-5xl mb-3 drop-shadow-lg">{item.icon}</div>
                <h3 className="text-lg font-semibold tracking-wide mb-1">{item.title}</h3>
                <p className="text-gray-200 text-sm leading-snug">{item.desc}</p>
              </div>

              {/* Ripple-like blue line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-sky-400 to-cyan-300 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Right side - floating 3D human */}
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src="/human-3d.jpg"
            alt="Frinso Tech 3D Human"
            className="h-[650px] lg:h-[750px] object-contain animate-float drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          />
          {/* glowing reflection behind human */}
          <div className="absolute inset-0 bg-gradient-radial from-sky-400/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Soft water reflection at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-300/20 to-transparent blur-md"></div>
      </div>
    </section>
  );
}
