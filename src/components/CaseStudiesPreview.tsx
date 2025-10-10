import Reveal from "./Reveal";

export default function CaseStudiesPreview() {
  const cases = [
    { title: "City Water Utility", result: "30% reduction in NRW leakage" },
    { title: "Industrial EMS", result: "15% drop in monthly energy cost" },
    { title: "Transit Fleet", result: "Real-time fuel & route compliance" },
  ];
  return (
    <section className="bg-gray-400 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl text-gray-700  font-semibold md:text-4xl">Case Studies</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.2}>
              <div className="rounded-2xl text-gray-500 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:rounded-2xl   text-gray-500 border p-10 shadow-sm transition hover:-translate-y-1 hover:scale-110 hover:shadow-lg  hover:shadow-md duration-300">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
