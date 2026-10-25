import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLIENTS } from "./data";

export const Clients = () => (
  <section id="clients" data-testid="clients-section" className="relative py-24 lg:py-36 bg-[#1F3A6D]/15 border-y border-white/10">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <Reveal>
          <p className="eyebrow">Trusted by</p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl">
            Executed for organisations that <em className="text-[#F5B34A]">don't</em> accept second best.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[#A7ADB8] max-w-sm leading-relaxed">Facility management, housekeeping and administrative support assignments across India.</p>
        </Reveal>
      </div>
      <ul>
        {CLIENTS.map((c, i) => (
          <Reveal as="li" key={c.name} delay={i * 0.08}>
            <div data-testid={`client-row-${i}`} className="group relative border-t border-white/15 last:border-b py-8 lg:py-10 grid grid-cols-12 items-center gap-4 overflow-hidden">
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5B34A] transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-x-100" />
              <span className="relative col-span-2 lg:col-span-1 font-display italic text-xl text-[#F5B34A] group-hover:text-[#1F3A6D] transition-colors duration-500">0{i + 1}</span>
              <span className="relative col-span-10 lg:col-span-7 font-display text-3xl sm:text-5xl lg:text-6xl group-hover:text-[#1F3A6D] transition-colors duration-500">{c.name}</span>
              <span className="relative col-span-6 col-start-3 lg:col-start-auto lg:col-span-2 text-xs uppercase tracking-[0.25em] text-[#A7ADB8] group-hover:text-[#1F3A6D] transition-colors duration-500">{c.sector}</span>
              <span className="relative col-span-4 lg:col-span-2 flex items-center justify-end gap-2 text-sm text-[#A7ADB8] group-hover:text-[#1F3A6D] transition-colors duration-500">
                {c.note} <ArrowUpRight size={16} />
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
