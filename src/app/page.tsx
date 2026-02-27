"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ParticleField from "@/components/ParticleField";
import AnimatedSection from "@/components/AnimatedSection";

const TYPED_STRINGS = [
  "Physical AI data infrastructure.",
  "Petabyte-scale egocentric datasets.",
  "The future of embodied intelligence.",
  "Powering general-purpose robotics.",
];

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    const delay = deleting ? 40 : charIndex === current.length ? 2000 : 70;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setStringIndex((s) => (s + 1) % TYPED_STRINGS.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, charIndex, deleting, stringIndex]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cyber-grid">
        <ParticleField />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-tron-cyan/30 px-4 py-2 mb-8 text-xs font-mono text-tron-cyan/80 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-tron-cyan animate-pulse" />
            Physical AI · Egocentric Data · Embodied Intelligence
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[0.9]"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #a0c8e0 40%, #00f5ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The ChatGPT Moment
            <br />
            <span className="text-tron-cyan glow-text">for Robotics</span>
            <br />
            is Near.
          </h1>

          {/* Typewriter */}
          <div className="h-8 mb-10">
            <p className="terminal-text text-lg md:text-xl text-tron-cyan/80">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-tron-text text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We are building the data backbone for Physical AI — large-scale, structured,
            real-world egocentric datasets that will power the next generation of intelligent
            machines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-solid px-8 py-4 font-display text-sm tracking-widest uppercase"
            >
              Reach Out to Founders
            </Link>
            <Link
              href="/solution"
              className="btn-primary px-8 py-4 font-display text-sm tracking-widest uppercase"
            >
              Explore Our Work →
            </Link>
          </div>
        </div>

      </section>

      {/* ─── PILLARS ─── */}
      <section className="py-24 px-6 border-y border-tron-cyan/10 relative overflow-hidden">
        <div className="data-line absolute top-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "◎", label: "Egocentric Data", desc: "First-person video, audio & sensor capture at scale" },
                { icon: "⟡", label: "Physical AI", desc: "Powering embodied intelligence and real-world robotics" },
                { icon: "⊞", label: "Research-Grade", desc: "Structured annotations built for frontier AI teams" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="text-center group">
                    <div className="text-tron-cyan text-3xl mb-3">{item.icon}</div>
                    <div className="font-display font-bold text-white text-lg mb-1">{item.label}</div>
                    <div className="text-tron-text text-sm">{item.desc}</div>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-tron-cyan/30 to-transparent group-hover:via-tron-cyan/60 transition-all duration-500" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section className="py-32 px-6 hex-pattern">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// MISSION</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-white">
                We Believe the Next Intelligence{" "}
                <span className="text-tron-cyan glow-text">Revolution is Physical</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="gradient-border p-8 md:p-12 rounded-sm">
              <p className="text-tron-text text-lg md:text-xl leading-relaxed text-center">
                Just as internet-scale text enabled large language models, real-world egocentric
                data will unlock{" "}
                <span className="text-white">general-purpose robotics</span>,{" "}
                <span className="text-white">autonomous systems</span>, and{" "}
                <span className="text-white">intelligent wearables</span>. Our goal is to become
                the foundational data layer powering this transition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="terminal-text text-xs tracking-widest">// THE PROBLEM → SOLUTION</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-white">
                AI Models Are Blind to the{" "}
                <span className="text-tron-cyan">Physical World</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <AnimatedSection delay={100}>
              <div className="glow-border p-8 rounded-sm h-full relative overflow-hidden group">
                <div className="scan-line absolute inset-0 pointer-events-none" />
                <div className="text-red-400/60 font-mono text-xs tracking-widest mb-4">
                  ⚠ PROBLEM_IDENTIFIED
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-6">
                  The Missing Data Layer
                </h3>
                <ul className="space-y-4">
                  {[
                    "AI models understand text & images but fail at real-world task execution",
                    "Contextual reasoning in physical environments is largely unsolved",
                    "Long-horizon physical manipulation lacks training data at scale",
                    "No structured egocentric data pipeline exists for embodied AI",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-tron-text text-sm">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection delay={200}>
              <div className="glow-border p-8 rounded-sm h-full relative overflow-hidden group">
                <div className="text-tron-cyan font-mono text-xs tracking-widest mb-4">
                  ✓ OUR_SOLUTION
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-6">
                  The Data Backbone for Physical AI
                </h3>
                <ul className="space-y-4">
                  {[
                    "First-person (egocentric) video capture at petabyte scale",
                    "Audio, sensor data streams & hand-object interaction recordings",
                    "Structured task-level annotations for embodied intelligence",
                    "Secure storage and delivery infrastructure for global research teams",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-tron-text text-sm">
                      <span className="text-tron-cyan mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── DATA PIPELINE VISUAL ─── */}
      <section className="py-32 px-6 border-t border-tron-cyan/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="terminal-text text-xs tracking-widest">// DATA PIPELINE</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-white">
                From Real World to{" "}
                <span className="text-tron-cyan">AI-Ready Data</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tron-cyan/30 to-transparent" />

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Capture", desc: "Egocentric video & sensor streams", icon: "◎" },
                { step: "02", title: "Process", desc: "Multi-modal data alignment", icon: "⟡" },
                { step: "03", title: "Annotate", desc: "Task-level structured labeling", icon: "⌖" },
                { step: "04", title: "Index", desc: "Petabyte-scale data pipelines", icon: "⊞" },
                { step: "05", title: "Deliver", desc: "Secure global distribution", icon: "⟴" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 120}>
                  <div className="relative text-center group">
                    <div
                      className="w-20 h-20 mx-auto mb-4 border border-tron-cyan/30 flex items-center justify-center text-2xl text-tron-cyan group-hover:border-tron-cyan group-hover:bg-tron-cyan/5 transition-all duration-300"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                      {item.icon}
                    </div>
                    <div className="terminal-text text-xs mb-1">{item.step}</div>
                    <div className="font-display font-bold text-white mb-1">{item.title}</div>
                    <div className="text-tron-text text-xs">{item.desc}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,245,255,0.08), transparent)",
          }}
        />
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-display font-black text-5xl md:text-6xl glow-text text-tron-cyan mb-6">
              Are You Ready?
            </h2>
            <p className="text-tron-text text-lg mb-10">
              The ChatGPT moment for robotics is near. Join us in building the infrastructure
              that will power the next wave of intelligent machines.
            </p>
            <Link
              href="/contact"
              className="btn-solid inline-block px-12 py-5 font-display text-base tracking-widest uppercase"
            >
              Reach Out to Founders
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
