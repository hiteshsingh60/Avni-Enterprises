import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { scrollToId } from "./data";
import { INTRO_DELAY } from "./Intro";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "model", label: "AMC Model" },
  { id: "clients", label: "Clients" },
  { id: "pristin", label: "Pristin" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: INTRO_DELAY + 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 border-b ${scrolled ? "bg-[#07090E]/80 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"}`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <button data-testid="nav-logo" onClick={() => go("top")} aria-label="Back to top"><Logo /></button>
        <nav className="hidden lg:flex items-center gap-10">
          {LINKS.map((l) => (
            <button key={l.id} data-testid={`nav-link-${l.id}`} onClick={() => go(l.id)} className="group relative text-sm text-[#F3EEE4]/80 hover:text-[#F3EEE4] transition-colors">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#F5B34A] transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          ))}
          <button data-testid="nav-enquire-btn" onClick={() => go("enquire")} className="btn-gold px-6 py-3 text-xs uppercase tracking-[0.22em] font-semibold">
            <span className="flex items-center gap-2">Enquire <ArrowUpRight size={14} /></span>
          </button>
        </nav>
        <button data-testid="nav-mobile-toggle" className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#07090E] border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {[...LINKS, { id: "enquire", label: "Enquire" }].map((l) => (
                <button key={l.id} data-testid={`nav-mobile-link-${l.id}`} onClick={() => go(l.id)} className="text-left font-display text-3xl">
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
