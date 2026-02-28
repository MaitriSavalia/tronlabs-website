import AnimatedSection from "@/components/AnimatedSection";
import GlobeVisual from "@/components/GlobeVisual";
import Link from "next/link";

// const team = [
//   {
//     name: "Priyank",
//     role: "Co-Founder",
//     bio: "Reach out directly to connect with the founding team.",
//     contact: "priyank@mytronlabs.com",
//     initials: "P",
//   },
// ];

export default function AboutPage() {
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
            <span className="terminal-text text-xs tracking-widest">// ABOUT_TRON_LABS</span>
            <h1 className="font-display font-black text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
              Building the{" "}
              <span className="text-tron-cyan glow-text">Data Backbone</span>
              <br />
              for Physical AI
            </h1>
            <p className="text-tron-text text-xl max-w-2xl leading-relaxed">
              Tron Labs specializes in large-scale egocentric, multimodal datasets that power
              robotics, wearable AI systems, and embodied intelligence models.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STORY + GLOBE ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="terminal-text text-xs tracking-widest mb-4 block">// OUR_STORY</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Born from a Simple Observation
              </h2>
              <div className="space-y-4 text-tron-text leading-relaxed">
                <p>
                  The most transformative AI breakthroughs of the past decade, from GPT-4 to
                  Claude, were made possible by one thing: massive, high-quality training data.
                  But all of that data came from the digital world.
                </p>
                <p>
                  The physical world is where robots work, where humans operate, where autonomous
                  systems need to function. It has no equivalent data infrastructure. That&apos;s the
                  gap we&apos;re here to close.
                </p>
                <p>
                  We collaborate with global AI research teams to accelerate breakthroughs in
                  real-world machine learning systems, providing the structured, annotated,
                  egocentric datasets they need to build truly intelligent machines.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="flex justify-center">
              <GlobeVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 px-6 border-t border-tron-cyan/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// CORE_VALUES</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                What We Stand For
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⟡",
                title: "Research-First",
                desc: "Every decision is grounded in rigorous research and collaboration with leading AI institutions worldwide.",
              },
              {
                icon: "◎",
                title: "Scale Without Compromise",
                desc: "Petabyte-scale data pipelines with uncompromising quality standards and structured annotation at every level.",
              },
              {
                icon: "⊞",
                title: "Global Impact",
                desc: "We work with research teams across continents to ensure our data infrastructure serves humanity's broadest intelligence ambitions.",
              },
              {
                icon: "⌖",
                title: "Precision & Structure",
                desc: "Raw data is noise. Our task-level annotations and structured pipelines turn captures into genuine intelligence fuel.",
              },
              {
                icon: "◈",
                title: "Security by Design",
                desc: "Secure storage, encrypted delivery, and compliant data infrastructure privacy and protection are non-negotiable.",
              },
              {
                icon: "⟴",
                title: "Speed of Innovation",
                desc: "The physical AI moment won't wait. We operate at startup speed with research-grade rigor.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glow-border p-6 rounded-sm h-full group hover:bg-tron-cyan/[0.02] transition-all duration-300">
                  <div className="text-tron-cyan text-2xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-tron-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      {/* <section className="py-24 px-6 hex-pattern">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// THE_TEAM</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                The People Behind the Mission
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="gradient-border p-8 rounded-sm">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 border border-tron-cyan/40 flex items-center justify-center text-tron-cyan font-display font-bold text-xl flex-shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-xl">{member.name}</h3>
                      <div className="terminal-text text-xs mb-3">{member.role}</div>
                      <p className="text-tron-text text-sm leading-relaxed mb-3">{member.bio}</p>
                      {member.contact && (
                        <a
                          href={`mailto:${member.contact}`}
                          className="text-tron-cyan text-xs hover:underline"
                        >
                          {member.contact}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Want to Work With Us?
            </h2>
            <p className="text-tron-text mb-8">
              Whether you&apos;re a researcher, investor, or enterprise partner, WE WANT TO HEAR FROM YOU.
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-solid px-8 py-4 font-display text-sm tracking-widest uppercase">
                Contact Us
              </Link>
              <Link href="/careers" className="btn-primary px-8 py-4 font-display text-sm tracking-widest uppercase">
                Join the Team →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
