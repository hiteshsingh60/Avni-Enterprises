import { Logo } from "./Logo";
import { CONTACT, scrollToId } from "./data";

const Brands = () => (
  <div data-testid="footer-brands" className="mt-20">
    <div className="flex items-center gap-5 mb-8">
      <p className="eyebrow">Our brands</p>
      <span className="hairline flex-1" />
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0 py-6">
      <div className="group flex flex-col items-center sm:flex-1">
        <img src="/images/logo-light.png" alt="Avni Enterprises" className="h-14 sm:h-16 w-auto opacity-90 transition-[transform,opacity] duration-700 group-hover:opacity-100 group-hover:scale-105" />
        <span className="mt-5 text-[0.65rem] uppercase tracking-[0.3em] text-[#A7ADB8]">Facility management</span>
      </div>
      <span className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-[#F5B34A]/60 to-transparent" />
      <span className="sm:hidden h-px w-24 bg-gradient-to-r from-transparent via-[#F5B34A]/60 to-transparent" />
      <div data-testid="brand-pristin" className="group flex flex-col items-center sm:flex-1">
        <img src="/images/pristin-logo.webp" alt="Pristin" className="h-20 sm:h-24 w-auto opacity-90 drop-shadow-[0_0_18px_rgba(80,140,255,0.25)] transition-[transform,opacity] duration-700 group-hover:opacity-100 group-hover:scale-105" />
        <span className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#A7ADB8]">A brand of Avni Enterprises</span>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <footer data-testid="site-footer" className="relative border-t border-white/10 pt-20 pb-10 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <Logo testId="footer-logo" className="h-12" />
          <p className="mt-6 text-sm text-[#A7ADB8] leading-relaxed max-w-xs">Facility management and administrative support for corporate offices, institutions and commercial establishments.</p>
        </div>
        <div className="text-sm space-y-3">
          <p className="eyebrow mb-5">Explore</p>
          {[["about", "About"], ["services", "Services"], ["model", "AMC Model"], ["clients", "Clients"], ["enquire", "Enquire"]].map(([id, l]) => (
            <button key={id} data-testid={`footer-link-${id}`} onClick={() => scrollToId(id)} className="block text-[#F3EEE4]/80 hover:text-[#F5B34A] transition-colors">{l}</button>
          ))}
        </div>
        <div className="text-sm space-y-3 text-[#F3EEE4]/80">
          <p className="eyebrow mb-5">Contact</p>
          {CONTACT.phones.map((p, i) => <a key={p} href={`tel:${CONTACT.phoneLinks[i]}`} className="block hover:text-[#F5B34A] transition-colors">{p}</a>)}
          <a href={`mailto:${CONTACT.email}`} className="block hover:text-[#F5B34A] transition-colors break-all">{CONTACT.email}</a>
          <p>{CONTACT.city}</p>
        </div>
      </div>
      <Brands />
      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#A7ADB8] sm:pr-20">
        <p>© {new Date().getFullYear()} Avni Enterprises. All rights reserved.</p>
        <p>{CONTACT.website}</p>
      </div>
    </div>
  </footer>
);
