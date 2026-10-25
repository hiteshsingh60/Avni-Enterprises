const WORDS = ["Housekeeping", "Pantry Management", "Office Stationery", "Consumables", "Skilled Manpower", "Guest House Management", "Post-Construction Cleaning"];

export const Marquee = () => {
  const row = [...WORDS, ...WORDS];
  return (
    <section data-testid="services-marquee" className="marquee-wrap relative border-y border-white/10 py-8 lg:py-10 overflow-hidden mt-16 lg:mt-0">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} className="flex items-center font-display italic text-4xl sm:text-5xl lg:text-7xl whitespace-nowrap px-8">
            <span className={i % 2 ? "text-outline" : "text-[#F3EEE4]"}>{w}</span>
            <span className="ml-16 inline-block h-3 w-3 rotate-45 bg-[#F5B34A]" />
          </span>
        ))}
      </div>
    </section>
  );
};
