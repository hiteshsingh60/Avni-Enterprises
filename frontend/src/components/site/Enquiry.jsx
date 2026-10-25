import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Loader2, Phone, Mail, Globe, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, SERVICES } from "./data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMPTY = { name: "", company: "", email: "", phone: "", service: "", message: "" };

const ContactList = () => (
  <ul className="mt-12 space-y-5 text-[#F3EEE4]/90">
    {CONTACT.phones.map((p, i) => (
      <li key={p} className="flex items-center gap-4"><Phone size={16} className="text-[#F5B34A]" />
        <a data-testid={`contact-phone-${i}`} href={`tel:${CONTACT.phoneLinks[i]}`} className="hover:text-[#F5B34A] transition-colors">{p}</a></li>
    ))}
    <li className="flex items-center gap-4"><Mail size={16} className="text-[#F5B34A]" />
      <a data-testid="contact-email" href={`mailto:${CONTACT.email}`} className="hover:text-[#F5B34A] transition-colors break-all">{CONTACT.email}</a></li>
    <li className="flex items-center gap-4"><Globe size={16} className="text-[#F5B34A]" /><span>{CONTACT.website}</span></li>
    <li className="flex items-center gap-4"><MapPin size={16} className="text-[#F5B34A]" /><span>{CONTACT.city}</span></li>
  </ul>
);

export const Enquiry = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.message.trim().length < 5) {
      toast.error("Please add your name and a short message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Thank you. Our team will be in touch shortly.");
      setForm(EMPTY);
    } catch (err) {
      const d = err?.response?.data?.detail;
      toast.error(Array.isArray(d) ? "Please check your email address and details." : "Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquire" data-testid="enquiry-section" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal><p className="eyebrow">Enquire</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">Let's make your office <em className="text-[#F5B34A]">effortless.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[#A7ADB8] leading-relaxed max-w-md">Share a few details about your premises and requirements. We'll respond with a tailored AMC proposal.</p>
          </Reveal>
          <Reveal delay={0.15}><ContactList /></Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <form data-testid="enquiry-form" onSubmit={submit} className="border border-white/10 bg-[#0D1119]/70 backdrop-blur-xl p-6 sm:p-10 lg:p-14">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              <input data-testid="enquiry-name-input" className="field" placeholder="Full name *" value={form.name} onChange={set("name")} required />
              <input data-testid="enquiry-company-input" className="field" placeholder="Company / Institution" value={form.company} onChange={set("company")} />
              <input data-testid="enquiry-email-input" type="email" className="field" placeholder="Work email *" value={form.email} onChange={set("email")} required />
              <input data-testid="enquiry-phone-input" className="field" placeholder="Phone" value={form.phone} onChange={set("phone")} />
              <select data-testid="enquiry-service-select" className="field sm:col-span-2" value={form.service} onChange={set("service")}>
                <option value="">Service of interest</option>
                <option value="Complete AMC">Complete AMC (all services)</option>
                {SERVICES.map((s) => <option key={s.key} value={s.title}>{s.title}</option>)}
                <option value="Pristin cleaning products">Pristin cleaning products</option>
              </select>
              <textarea data-testid="enquiry-message-input" rows={4} className="field sm:col-span-2 resize-none" placeholder="Tell us about your premises and requirements *" value={form.message} onChange={set("message")} required />
            </div>
            <button data-testid="enquiry-submit-btn" type="submit" disabled={loading} className="btn-gold mt-10 w-full sm:w-auto px-10 py-5 text-xs uppercase tracking-[0.22em] font-semibold disabled:opacity-70">
              <span className="flex items-center justify-center gap-3">
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                {loading ? "Sending" : "Send enquiry"} {!loading && <ArrowUpRight size={16} />}
              </span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
