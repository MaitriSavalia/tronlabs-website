"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface FormData {
  name: string;
  email: string;
  organization: string;
  type: string;
  message: string;
}

const INQUIRY_TYPES = [
  "Research Partnership",
  "Data Access Request",
  "Investment / Advisor",
  "Career Inquiry",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // Simulate sending (replace with EmailJS or API route)
    try {
      await new Promise((r) => setTimeout(r, 1500));
      // To wire up real email delivery, use emailjs:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY');
      setStatus("sent");
      setForm({ name: "", email: "", organization: "", type: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-transparent border ${
      errors[field] ? "border-red-500/60" : "border-tron-cyan/20"
    } px-4 py-3 text-white text-sm font-body placeholder-tron-text/40 focus:outline-none focus:border-tron-cyan/60 transition-colors duration-200`;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-40 pb-24 px-6 relative cyber-grid">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,245,255,0.08), transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="terminal-text text-xs tracking-widest">// CONTACT</span>
            <h1 className="font-display font-black text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
              Let&apos;s Build
              <br />
              <span className="text-tron-cyan glow-text">Together</span>
            </h1>
            <p className="text-tron-text text-xl max-w-2xl leading-relaxed">
              Whether you&apos;re a researcher, partner, investor, or potential team member — we
              want to hear from you. The physical AI moment is near.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <AnimatedSection>
                <div className="gradient-border p-8 rounded-sm">
                  <div className="terminal-text text-xs mb-6">// SEND_MESSAGE</div>

                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <div className="text-tron-cyan text-5xl mb-4">✓</div>
                      <h3 className="font-display font-bold text-white text-2xl mb-3">
                        Message Sent
                      </h3>
                      <p className="text-tron-text">
                        We&apos;ll get back to you shortly at the email you provided.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-primary mt-8 px-6 py-3 text-sm font-display tracking-widest uppercase"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name *"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={inputClass("name")}
                          />
                          {errors.name && (
                            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address *"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={inputClass("email")}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Organization / Company"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        className={inputClass("organization")}
                      />

                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className={`${inputClass("type")} appearance-none bg-[#050508]`}
                      >
                        <option value="" disabled>
                          Inquiry Type
                        </option>
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-[#050508]">
                            {t}
                          </option>
                        ))}
                      </select>

                      <div>
                        <textarea
                          placeholder="Your Message *"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={6}
                          className={`${inputClass("message")} resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-solid w-full py-4 font-display text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <span className="flex items-center justify-center gap-3">
                            <span className="w-4 h-4 border border-tron-cyan border-t-transparent rounded-full animate-spin" />
                            Transmitting...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </button>

                      {status === "error" && (
                        <p className="text-red-400 text-sm text-center">
                          Something went wrong. Please email us directly.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <AnimatedSection delay={200}>
                <div>
                  <div className="terminal-text text-xs mb-4">// DIRECT_CONTACT</div>
                  <div className="glow-border p-6 rounded-sm">
                    <h3 className="font-display font-bold text-white text-lg mb-2">Priyank</h3>
                    <div className="terminal-text text-xs mb-3">CO-FOUNDER & CEO</div>
                    <a
                      href="mailto:priyank@mytronlabs.com"
                      className="text-tron-cyan text-sm hover:underline block mb-1"
                    >
                      priyank@mytronlabs.com
                    </a>
                    <a
                      href="https://mytronlabs.com"
                      className="text-tron-text text-sm hover:text-tron-cyan transition-colors"
                    >
                      mytronlabs.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div>
                  <div className="terminal-text text-xs mb-4">// RESPONSE_TIME</div>
                  <div className="glow-border p-6 rounded-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="terminal-text text-xs">FOUNDERS_ACTIVE</span>
                    </div>
                    <p className="text-tron-text text-sm">
                      We typically respond within <span className="text-white">24 hours</span>.
                      For urgent matters, email directly.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div>
                  <div className="terminal-text text-xs mb-4">// INQUIRY_TYPES</div>
                  <div className="space-y-2">
                    {INQUIRY_TYPES.map((type, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-tron-text text-sm"
                      >
                        <span className="text-tron-cyan text-xs">›</span>
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <div className="glow-border p-6 rounded-sm border-tron-cyan/20">
                  <div className="terminal-text text-xs mb-3">// STAGE</div>
                  <p className="text-tron-text text-sm">
                    Tron Labs is an <span className="text-white">early-stage company</span> moving
                    fast. We are hands-on, founder-led, and responsive. Expect a real conversation,
                    not a sales funnel.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 px-6 border-t border-tron-cyan/10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="terminal-text text-sm mb-4">
              // THE_CHATGPT_MOMENT_FOR_ROBOTICS_IS_NEAR
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              Are <span className="text-tron-cyan">You</span> Ready?
            </h2>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
