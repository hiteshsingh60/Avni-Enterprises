import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

const STATS = [
  { v: "2022", l: "Established in Delhi" },
  { v: "5+", l: "Years of combined leadership experience" },
  { v: "3×24", l: "Towers × floors delivered on a single project" },
  { v: "1", l: "Invoice. One point of accountability." },
];

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} data-testid="about-section" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal><p className="eyebrow">About Avni</p></Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden">
              <motion.img style={{ y, scale: 1.18 }} src="/images/lounge.jpg" alt="Calm executive lounge" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[#1F3A6D]/20 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pl-10 flex flex-col justify-end">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em]">
              The essential support functions, handled with <em className="text-[#F5B34A]">professionalism</em> and calm precision.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-base lg:text-lg text-[#A7ADB8] leading-relaxed max-w-2xl">
              Avni Enterprises delivers comprehensive facility management and administrative support for corporate offices, institutions and commercial establishments. Under our AMC model we take full responsibility for manpower, materials, supervision, quality control and statutory compliance, so your teams can stay focused on their core work.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08} className="bg-[#07090E] p-6 sm:p-8">
                <p data-testid={`stat-value-${i}`} className="font-display text-5xl lg:text-6xl text-[#F3EEE4]">{s.v}</p>
                <p className="mt-3 text-xs sm:text-sm text-[#A7ADB8] leading-snug">{s.l}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-14 grid sm:grid-cols-2 gap-8">
              <div>
                <p className="eyebrow">Mission · I</p>
                <p className="mt-3 text-[#F3EEE4]/90 leading-relaxed">Reliable facility management that enhances operational efficiency for clients across sectors.</p>
              </div>
              <div>
                <p className="eyebrow">Mission · II</p>
                <p className="mt-3 text-[#F3EEE4]/90 leading-relaxed">Effective administrative support, so clients prioritise their core business while day-to-day operations run seamlessly.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
