import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const partnerTypes = [
  {
    type: "Research Institutions",
    icon: "◎",
    desc: "We partner with AI research labs and universities to provide the data infrastructure for frontier embodied AI research.",
    benefits: [
      "Access to egocentric datasets",
      "Custom data collection pipelines",
      "Co-authorship opportunities",
      "Priority access to new data modalities",
    ],
  },
  {
    type: "Robotics Companies",
    icon: "⟡",
    desc: "Robotics companies use our data to train and validate manipulation policies, navigation systems, and task planning models.",
    benefits: [
      "Task-specific training data",
      "Sim-to-real transfer datasets",
      "Benchmarking data packages",
      "Custom annotation workflows",
    ],
  },
  {
    type: "Enterprise AI Teams",
    icon: "⊞",
    desc: "Enterprise teams building wearable AI, AR/VR systems, and autonomous agents need contextual, real-world training data to move forward.",
    benefits: [
      "Domain-specific data curation",
      "Secure enterprise delivery",
      "Compliance-ready datasets",
      "Scalable pipeline access",
    ],
  },
  {
    type: "Investors & Advisors",
    icon: "◈",
    desc: "We welcome strategic investors and advisors who understand the long-term importance of the physical AI data layer.",
    benefits: [
      "Early access to research",
      "Strategic advisory roles",
      "Direct founder access",
      "Ground-floor opportunity",
    ],
  },
];

export default function PartnersPage() {
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
            <span className="terminal-text text-xs tracking-widest">// PARTNERS</span>
            <h1 className="font-display font-black text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
              Build With Us
            </h1>
            <p className="text-tron-text text-xl max-w-2xl leading-relaxed">
              We are actively looking for early partners like researchers, builders, and investors
              who believe the physical AI revolution is near.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PARTNER TYPES ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// WHO_WE_WORK_WITH</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                Who We Want to Work With
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((pt, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="gradient-border p-8 rounded-sm h-full group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-tron-cyan text-2xl">{pt.icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-white text-xl">{pt.type}</h3>
                      <p className="text-tron-text text-sm mt-2 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                  <div className="border-t border-tron-cyan/10 pt-6">
                    <div className="terminal-text text-xs mb-3">WHAT WE OFFER:</div>
                    <ul className="space-y-2">
                      {pt.benefits.map((b, j) => (
                        <li key={j} className="flex gap-3 text-tron-text text-sm">
                          <span className="text-tron-cyan flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EARLY STAGE CALLOUT ─── */}
      <section className="py-24 px-6 border-t border-tron-cyan/10 hex-pattern">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="gradient-border p-10 rounded-sm text-center">
              <div className="terminal-text text-xs mb-4">// EARLY_STAGE</div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                We Are Just Getting Started
              </h2>
              <p className="text-tron-text text-lg leading-relaxed max-w-2xl mx-auto">
                Tron Labs is in its early stages, which means right now is the best time to
                get involved. Early partners shape the direction of the platform, get priority
                access to datasets, and build a relationship with the team from the ground up.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tron-cyan animate-pulse" />
                <span className="terminal-text text-xs">PARTNERSHIPS NOW OPEN</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BECOME A PARTNER CTA ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06), transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Become an{" "}
              <span className="text-tron-cyan glow-text">Early Partner</span>
            </h2>
            <p className="text-tron-text text-lg mb-10">
              If you are working on Physical AI, robotics, or embodied intelligence, reach out.
              We want to hear what you are building.
            </p>
            <Link
              href="/contact"
              className="btn-solid inline-block px-12 py-5 font-display text-sm tracking-widest uppercase"
            >
              Reach Out to Founders
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
