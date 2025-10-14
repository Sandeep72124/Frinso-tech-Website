
export default function PartnersSection() {
  const partners = [
    { name: "AWFIS", logo: "/partners/logo_1.png" },
    { name: "TATA Projects", logo: "/partners/logo_10.png" },
    { name: "Larsen & Toubro", logo: "/partners/logo_2.png" },
    // { name: "Bosch", logo: "/partners/bosch.png" },
    { name: "Kalpa Taru", logo: "/partners/logo_3.png" },
    { name: "KEC International", logo: "/partners/logo_4.png" },
    //{ name: "Indian Railways", logo: "/partners/indian-logo_5.png" },
    // { name: "AMRUT", logo: "/partners/amrut.png" },
    { name: "CGWA", logo: "/partners/cgwa.png" },
    { name: "Adani", logo: "/partners/logo_6.png" },
    { name: "Godrej Agrovet", logo: "/partners/logo_8.png" },
    { name: "IndianOil", logo: "/partners/logo_9.png" },
    // { name: "Jain Irrigation", logo: "/partners/jain.png" },
    // { name: "Jyothy Labs", logo: "/partners/jyothy.png" },
    // { name: "Britannia", logo: "/partners/britannia.png" },
    // { name: "Marico", logo: "/partners/marico.png" },
    // { name: "Parle", logo: "/partners/parle.png" },
    { name: "PepsiCo", logo: "/partners/logo_11.png" },
   // { name: "Reliance", logo: "/partners/reliance.png" },
    //{ name: "Titan", logo: "/partners/titan.png" },
   // { name: "Mahindra", logo: "/partners/mahindra.png" },
    { name: "Sun Pharma", logo: "/partners/logo_12.png" },
    //{ name: "Relaxo", logo: "/partners/relaxo.png" },
   // { name: "Eveready", logo: "/partners/eveready.png" },
    //{ name: "Vedanta", logo: "/partners/vedanta.png" },
    //{ name: "Hyatt Regency", logo: "/partners/hyatt.png" },
    //{ name: "Lemon Tree Hotels", logo: "/partners/lemontree.png" },
    //{ name: "Shapoorji Pallonji", logo: "/partners/shapoorji.png" },
    { name: "Walchandnagar", logo: "/partners/logo_13.png" },
    { name: "Gillanders Arbuthnot", logo: "/partners/logo_14.png" },
  ];

  return (
    <>
   
    <section className="py-25 bg-white relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-700">Our Partners & Clients</h2>
        <p className="mt-2 text-gray-600">
          Trusted by leading government bodies, research institutes, and enterprises.
        </p>
      </div>

     
      <div className="relative overflow-hidden">
        <div className=" py-7 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00c6ff] relative overflow-hidden flex animate-partner-scroll">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-52 h-24 mx-6"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-30  object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Edge fading effect */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
    </>
  );
}
