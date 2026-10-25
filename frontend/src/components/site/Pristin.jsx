import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Droplets, Flame, Layers } from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "./data";

const BLUE = "#3B82F6";

const SOLVES = [
  { icon: Sparkles, t: "Stubborn stains", d: "Formulated to lift the marks everyday cleaners leave behind." },
  { icon: Droplets, t: "Hard-water scale & mineral deposits", d: "Cuts through limescale and mineral build-up on taps, tiles and fittings." },
  { icon: Flame, t: "Dirt & grease", d: "Breaks down oily, greasy soiling in kitchens, workshops and floors." },
  { icon: Layers, t: "Difficult residues", d: "Built for the problem surfaces that need real chemistry, not fragrance." },
];

const SPACES = [
  { t: "Homes", img: "/images/pristin-faucet.jpg" },
  { t: "Commercial spaces", img: "/images/lobby.jpg" },
  { t: "Industrial applications", img: "/images/pristin-industrial.jpg" },
];

const Swoosh = () => (
  <svg viewBox="0 0 600 40" className="w-full h-6 sm:h-8" preserveAspectRatio="none" aria-hidden="true">
    <motion.path
      d="M5 34 C 180 8, 420 4, 595 14" fill="none" stroke="#E11D2E" strokeWidth="6" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1] }}
    />
  </svg>
);

const Story = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <div ref={ref} className="mt-16 lg:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
      <Reveal className="lg:col-span-7">
        <div className="relative h-full min-h-[340px] sm:min-h-[460px] overflow-hidden">
          <motion.img style={{ y, scale: 1.2 }} src="/images/pristin-pour.jpg" alt="Blue cleaning formulation being poured" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/30 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#3B82F6]/30" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#93C5FD]">Think of Pristin as having a</p>
            <p data-testid="pristin-phd" className="font-display text-5xl sm:text-7xl leading-none mt-3">PhD <em className="text-[#60A5FA]">in Cleaning.</em></p>
          </div>
        </div>
      </Reveal>
      <div className="lg:col-span-5 flex flex-col justify-center">
        <Reveal>
          <p className="font-display text-2xl sm:text-3xl leading-snug text-[#F3EEE4]">
            Effective cleaning is about more than fragrance, appearance or a temporary feeling of freshness. <em className="text-[#60A5FA]">It is about solving the problem.</em>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-[#B6C2D6] leading-relaxed">
            Our focus is on developing high-performance cleaning solutions for the challenges people and businesses face every day. With a strong focus on formulation, performance and practical results, we are building a comprehensive range of professional cleaning products for homes, commercial spaces and industrial applications.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 border-l-2 border-[#E11D2E] pl-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#93C5FD]">Every product, one objective</p>
            <p className="mt-2 text-[#F3EEE4]">To deliver powerful, reliable and visible cleaning performance.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const Solves = () => (
  <div className="mt-24">
    <Reveal><p className="text-xs uppercase tracking-[0.3em] text-[#93C5FD]">What Pristin products solve</p></Reveal>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3B82F6]/20 border border-[#3B82F6]/20">
      {SOLVES.map((s, i) => (
        <Reveal key={s.t} delay={i * 0.08} className="group bg-[#070F22] p-7 lg:p-8 min-h-[240px] flex flex-col transition-colors duration-500 hover:bg-[#0B1A3A]">
          <div data-testid={`pristin-solve-${i}`} className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <s.icon size={22} style={{ color: BLUE }} className="transition-transform duration-500 group-hover:scale-110" />
              <span className="font-display italic text-[#60A5FA]">0{i + 1}</span>
            </div>
            <h3 className="font-display text-2xl lg:text-[1.7rem] leading-tight mt-auto pt-10">{s.t}</h3>
            <p className="mt-3 text-sm text-[#B6C2D6] leading-relaxed">{s.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const Spaces = () => (
  <div className="mt-24">
    <Reveal><p className="text-xs uppercase tracking-[0.3em] text-[#93C5FD]">A professional range for</p></Reveal>
    <div className="mt-8 grid md:grid-cols-3 gap-4">
      {SPACES.map((s, i) => (
        <Reveal key={s.t} delay={i * 0.08}>
          <div data-testid={`pristin-space-${i}`} className="group relative aspect-[4/5] overflow-hidden">
            <img src={s.img} alt={s.t} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/40 to-[#1D4ED8]/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <h3 className="font-display text-3xl">{s.t}</h3>
              <span className="font-display italic text-[#60A5FA]">0{i + 1}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const Closing = () => (
  <div className="mt-28 lg:mt-36 text-center max-w-4xl mx-auto">
    <Reveal>
      <p className="text-[#B6C2D6] text-base sm:text-lg">Because when it comes to cleaning, looking good is not enough.</p>
      <h3 className="font-display mt-6 text-4xl sm:text-6xl lg:text-7xl leading-[1]">The real difference is <em className="text-[#60A5FA]">in the result.</em></h3>
      <div className="mx-auto mt-4 max-w-md"><Swoosh /></div>
    </Reveal>
    <Reveal delay={0.1}>
      <p data-testid="pristin-tagline" className="mt-10 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#F3EEE4]">Professional Cleaning. Proven Performance.</p>
      <button data-testid="pristin-enquire-btn" onClick={() => scrollToId("enquire")} className="mt-10 inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold bg-[#2563EB] text-white hover:bg-[#F3EEE4] hover:text-[#0B1A3A] transition-colors duration-500">
        Enquire about Pristin products <ArrowUpRight size={16} />
      </button>
    </Reveal>
  </div>
);

export const Pristin = () => (
  <section id="pristin" data-testid="pristin-section" className="relative py-24 lg:py-40 bg-[#050B1A] overflow-hidden">
    <div className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#1D4ED8]/20 blur-[120px]" />
    <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[400px] w-[500px] rounded-full bg-[#E11D2E]/10 blur-[120px]" />
    <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-5">
              <img src="/images/pristin-logo.webp" alt="Pristin" className="h-14 sm:h-16 w-auto drop-shadow-[0_0_18px_rgba(80,140,255,0.3)]" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#93C5FD] border-l border-[#3B82F6]/40 pl-5">A brand of<br />Avni Enterprises</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 data-testid="pristin-title" className="font-display mt-10 text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-[-0.01em]">
              Expertise that <em className="text-[#60A5FA]">delivers</em> results.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-[#B6C2D6] text-base lg:text-lg leading-relaxed">
            Pristin manufactures high-quality household and industrial cleaning and maintenance products, engineered around one idea: real, visible performance.
          </p>
        </Reveal>
      </div>
      <Story />
      <Solves />
      <Spaces />
      <Closing />
    </div>
  </section>
);
