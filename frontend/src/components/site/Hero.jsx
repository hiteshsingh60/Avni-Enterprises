import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { MaskLines } from "./Reveal";
import { scrollToId } from "./data";
import { INTRO_DELAY as D } from "./Intro";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 80, damping: 20 });
  const spotX = useMotionValue(70);
  const spotY = useMotionValue(40);
  const spot = useTransform([spotX, spotY], ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(245,179,74,0.13), transparent 60%)`);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5); my.set(py - 0.5);
    spotX.set(px * 100); spotY.set(py * 100);
  };

  return (
    <section id="top" ref={ref} onMouseMove={onMove} data-testid="hero-section" className="relative min-h-[100svh] pt-28 lg:pt-0 flex items-center overflow-hidden">
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(31,58,109,0.45),transparent_60%)]" />

      <div className="relative max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div style={{ y: textY }} className="lg:col-span-7 relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.3, duration: 1 }} className="eyebrow flex items-center gap-4">
            <span className="h-px w-10 bg-[#F5B34A]" /> Est. 2022 · Delhi
          </motion.p>
          <h1 data-testid="hero-title" className="font-display font-normal mt-8 text-[3.1rem] leading-[0.95] sm:text-7xl lg:text-[6.6rem] tracking-[-0.02em]">
            <MaskLines delay={D + 0.3} lines={["Spaces that", "run themselves,", <em key="e" className="text-[#F5B34A] not-italic font-display italic">quietly.</em>]} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.9, duration: 0.9 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-[#A7ADB8] leading-relaxed"
          >
            Housekeeping, pantry, stationery, consumables and skilled manpower, delivered as one Annual Maintenance Contract for a fixed monthly charge. You run the business. We run everything around it.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 1.05, duration: 0.9 }} className="mt-10 flex flex-wrap items-center gap-6">
            <button data-testid="hero-cta-enquire" onClick={() => scrollToId("enquire")} className="btn-gold px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold">
              <span className="flex items-center gap-3">Request an AMC proposal <ArrowUpRight size={16} /></span>
            </button>
            <button data-testid="hero-cta-model" onClick={() => scrollToId("model")} className="group flex items-center gap-3 text-sm text-[#F3EEE4]/85 hover:text-[#F5B34A] transition-colors">
              <span className="grid place-items-center h-11 w-11 rounded-full border border-white/20 group-hover:border-[#F5B34A] transition-colors"><ArrowDownRight size={16} /></span>
              The single-window model
            </button>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5 relative [perspective:1200px]">
          <motion.div
            style={{ rotateX: rx, rotateY: ry }}
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.5, delay: D + 0.1, ease: [0.7, 0, 0.2, 1] }}
            className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-[520px] ml-auto overflow-hidden"
          >
            <motion.img
              data-testid="hero-image"
              src="/images/hero.jpg"
              alt="Glass office tower at dusk with warm lit floors"
              style={{ y: imgY, scale: 1.15 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#F5B34A]/25" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: D + 1.3, duration: 0.9 }}
            className="absolute -bottom-6 left-0 lg:-left-10 bg-[#0D1119]/90 backdrop-blur-xl border border-[#F5B34A]/25 px-6 py-5 max-w-[260px]"
          >
            <p className="font-display text-4xl text-[#F5B34A] italic">One</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A7ADB8] mt-1">fixed monthly charge, every service included</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#A7ADB8]">
        Scroll
        <motion.span className="block h-10 w-px bg-[#F5B34A] origin-top" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity }} />
      </div>
    </section>
  );
};
