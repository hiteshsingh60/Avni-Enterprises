import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";

const Card = ({ s, i }) => (
  <motion.article
    data-testid={`service-card-${s.key}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay: (i % 4) * 0.08 }}
    className={`group relative overflow-hidden border border-white/10 hover:border-[#F5B34A]/50 bg-[#0D1119] transition-colors duration-500 min-h-[300px] flex flex-col justify-end p-7 ${s.span}`}
  >
    {s.img && (
      <>
        <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale-[35%] transition-[transform,opacity] duration-[1200ms] group-hover:scale-105 group-hover:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/70 to-[#07090E]/10" />
      </>
    )}
    <span className="absolute top-6 right-7 font-display italic text-[#F5B34A] text-lg">{s.no}</span>
    <div className="relative">
      <h3 className="font-display text-3xl lg:text-4xl leading-tight">{s.title}</h3>
      <span className="block mt-4 h-px w-12 bg-[#F5B34A] transition-[width] duration-700 group-hover:w-24" />
      <ul className="mt-5 space-y-1.5 text-sm text-[#C9CDD4]">
        {s.items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </div>
  </motion.article>
);

export const Services = () => (
  <section id="services" data-testid="services-section" className="relative py-24 lg:py-36 bg-[#0A0D14]">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">What we manage</p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-7xl leading-[1] tracking-[-0.01em]">
            Seven disciplines.<br /><em className="text-[#F5B34A]">One</em> contract.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-[#A7ADB8] text-base lg:text-lg leading-relaxed">
            For leading corporates, educational institutions and real estate organisations, we take complete responsibility for routine support functions and every material they consume.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(300px,auto)] gap-4">
        {SERVICES.map((s, i) => <Card key={s.key} s={s} i={i} />)}
      </div>
    </div>
  </section>
);
