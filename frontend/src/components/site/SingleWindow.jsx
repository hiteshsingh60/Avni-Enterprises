import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  { t: "Manpower recruitment & management", d: "Vetted housekeeping staff, pantry boys, office assistants and supervisors, recruited, trained and managed by us." },
  { t: "Material procurement", d: "Stationery, pantry supplies and housekeeping consumables sourced and replenished before you notice they're low." },
  { t: "Supervision", d: "On-ground supervisors who own the daily schedule, the checklists and the standard." },
  { t: "Quality control", d: "Routine audits across premises, restrooms, pantries and façades to keep service consistent." },
  { t: "Statutory compliance", d: "Every workforce obligation handled on our side of the contract, fully documented." },
];

export const SingleWindow = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="model" ref={ref} data-testid="model-section" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal><p className="eyebrow">The Avni Single Window</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                One fixed monthly charge. <em className="text-[#F5B34A]">Zero</em> fragmented vendors.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[#A7ADB8] leading-relaxed max-w-md">
                Our end-to-end Annual Maintenance Contract brings every support function under a single agreement: cost-effective, reliable and hassle-free.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 relative aspect-[16/10] overflow-hidden border border-white/10">
                <img src="/images/hallway.jpg" alt="Spotless corporate corridor" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07090E]/80 to-transparent" />
                <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.25em] text-[#F3EEE4]/90">Fixed monthly maintenance charge</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 relative lg:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block">
            <motion.div style={{ scaleY: line }} className="origin-top h-full w-full bg-[#F5B34A]" />
          </div>
          <p className="text-sm text-[#A7ADB8] mb-8">What we take full responsibility for</p>
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={0.05} className="group border-t border-white/10 py-10 grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
              <span className="font-display italic text-2xl text-[#F5B34A] w-10">0{i + 1}</span>
              <div>
                <h3 data-testid={`model-step-${i}`} className="font-display text-3xl lg:text-4xl leading-tight transition-transform duration-500 group-hover:translate-x-2">{s.t}</h3>
                <p className="mt-4 text-[#A7ADB8] leading-relaxed max-w-lg">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
