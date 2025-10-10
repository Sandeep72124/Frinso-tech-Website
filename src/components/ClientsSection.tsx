export default function ClientsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-700">Our Clients & End Users</h2>
        <p className="mt-2 text-gray-600">
          Trusted by industry leaders, government departments, and global enterprises.
        </p>
      </div>

      {/* Static centered image */}
      <div className="flex justify-center items-center">
        <img
          src="/clients/end-users.png"
          alt="Frinso Client List"
          className="max-w-6xl w-full h-auto rounded-xl shadow-md hover:shadow-lg transition"
        />
      </div>
    </section>
  );
}
