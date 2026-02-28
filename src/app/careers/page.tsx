import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function CareersPage() {
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
            <span className="terminal-text text-xs tracking-widest">// CAREERS</span>
            <h1 className="font-display font-black text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
              Build the Future
              <br />
              <span className="text-tron-cyan glow-text">With Us</span>
            </h1>
            <p className="text-tron-text text-xl max-w-2xl leading-relaxed">
              We are a small, ambitious team on a mission to build the data infrastructure for
              the next intelligence revolution. If that excites you, we want to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY TRON LABS ─── */}
      <section className="py-24 px-6 border-t border-tron-cyan/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// WHY_JOIN</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                Why Tron Labs
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⟡",
                title: "Frontier Mission",
                desc: "Work on one of the most important infrastructure challenges in AI. The physical AI moment will define the next decade.",
              },
              {
                icon: "◈",
                title: "Research Autonomy",
                desc: "We give engineers and researchers the autonomy to explore, experiment, and push boundaries with access to our unique datasets.",
              },
              {
                icon: "⊞",
                title: "Equity & Ownership",
                desc: "Early team members receive meaningful equity. We are building something that could matter enormously and you will own a piece of it.",
              },
              {
                icon: "⌖",
                title: "High Impact",
                desc: "Every person on the team has direct impact. No layers, no bureaucracy, just meaningful work on hard problems.",
              },
              {
                icon: "◎",
                title: "Early Stage Advantage",
                desc: "Join at the ground floor of a company building critical infrastructure for the next wave of AI. Shape the culture and direction.",
              },
              {
                icon: "⟴",
                title: "Move Fast",
                desc: "Startup speed with research-grade rigor. We make decisions quickly and trust our team to execute.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glow-border p-6 rounded-sm h-full group hover:bg-tron-cyan/[0.02] transition-all duration-300">
                  <div className="text-tron-cyan text-2xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-tron-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NO OPEN ROLES YET — GENERAL APPLICATION ─── */}
      <section className="py-24 px-6 hex-pattern border-t border-tron-cyan/10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="gradient-border p-10 rounded-sm text-center">
              <div className="terminal-text text-xs mb-4">// HIRING_STATUS</div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="terminal-text text-xs text-yellow-400">NO OPEN ROLES LISTED YET</span>
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                We Are Building the Team
              </h2>
              <p className="text-tron-text text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We don&apos;t have formal job listings yet, but we are always interested in
                exceptional people. If you are passionate about Physical AI, robotics data, or
                embodied intelligence, tell us about yourself. The right person creates their
                own opportunity here.
              </p>
              <p className="text-tron-text text-sm mb-8">
                Areas we care deeply about:{" "}
                <span className="text-white">machine learning</span>,{" "}
                <span className="text-white">computer vision</span>,{" "}
                <span className="text-white">data infrastructure</span>,{" "}
                <span className="text-white">robotics</span>,{" "}
                <span className="text-white">annotation systems</span>.
              </p>
              <Link
                href="/contact"
                className="btn-solid inline-block px-12 py-5 font-display text-sm tracking-widest uppercase"
              >
                Introduce Yourself
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06), transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Think You Belong Here?
            </h2>
            <p className="text-tron-text text-lg mb-10">
              Drop us a message. Tell us what you are working on and why you care about
              physical AI. We read every message personally.
            </p>
            <Link
              href="/contact"
              className="btn-solid inline-block px-12 py-5 font-display text-sm tracking-widest uppercase"
            >
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
