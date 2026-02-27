import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const solutions = [
  {
    icon: "◎",
    title: "Egocentric Video Capture",
    subtitle: "First-Person Perspective at Scale",
    desc: "We capture high-fidelity, first-person video data from real-world environments — homes, factories, labs, and beyond. This egocentric perspective is essential for training embodied AI systems that must understand the world from a human or robot point of view.",
    specs: ["4K/60fps capture", "360° field of view", "Multi-camera rigs", "Long-duration sessions"],
  },
  {
    icon: "⟡",
    title: "Multimodal Sensor Streams",
    subtitle: "Audio, IMU, Depth & More",
    desc: "Beyond video, our datasets include synchronized audio, inertial measurement data, depth maps, and environmental sensors. This rich, multimodal grounding is what separates functional AI from truly intelligent systems.",
    specs: ["Spatial audio capture", "LiDAR depth sensing", "IMU & accelerometer", "Environmental sensors"],
  },
  {
    icon: "⌖",
    title: "Hand-Object Interactions",
    subtitle: "The Grammar of Physical Manipulation",
    desc: "Physical intelligence requires understanding how hands interact with objects. We specialize in fine-grained hand-object interaction recordings with precise keypoint tracking, force estimation, and object state annotations.",
    specs: ["Keypoint tracking", "Grasp classification", "Object state changes", "Force estimation"],
  },
  {
    icon: "⊞",
    title: "Structured Task Annotations",
    subtitle: "Semantic Intelligence at Scale",
    desc: "Raw data is noise. Our expert annotation teams apply hierarchical task-level labeling — from atomic actions to long-horizon goals — creating datasets with the semantic richness required for genuine machine understanding.",
    specs: ["Hierarchical labels", "Long-horizon tasks", "Action segmentation", "Intent annotation"],
  },
  {
    icon: "◈",
    title: "Petabyte-Scale Pipelines",
    subtitle: "Infrastructure Built for Frontier AI",
    desc: "Data collection is worthless without the infrastructure to process and deliver it. Our distributed pipelines handle petabyte-scale ingestion, processing, and quality control — built on battle-tested cloud architecture.",
    specs: ["Petabyte-scale storage", "Distributed processing", "Automated QA pipelines", "Real-time monitoring"],
  },
  {
    icon: "⟴",
    title: "Secure Delivery Infrastructure",
    subtitle: "Enterprise-Grade Data Security",
    desc: "Research data is sensitive. Our secure, encrypted delivery infrastructure ensures your data is protected at rest and in transit, with granular access controls and full compliance with international data regulations.",
    specs: ["End-to-end encryption", "GDPR compliance", "Granular access control", "Audit logging"],
  },
];

export default function SolutionPage() {
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
            <span className="terminal-text text-xs tracking-widest">// WHAT_WE_DO</span>
            <h1 className="font-display font-black text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
              Our Solution
            </h1>
            <p className="text-tron-text text-xl max-w-2xl leading-relaxed">
              Six interconnected data systems that together form the complete infrastructure
              for Physical AI training at scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="glow-border p-8 rounded-sm h-full group hover:bg-tron-cyan/[0.02] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tron-cyan/0 to-transparent group-hover:via-tron-cyan/40 transition-all duration-500" />

                  <div className="text-tron-cyan text-3xl mb-4">{sol.icon}</div>
                  <div className="terminal-text text-xs mb-1">{sol.subtitle}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-4">{sol.title}</h3>
                  <p className="text-tron-text text-sm leading-relaxed mb-6">{sol.desc}</p>

                  <div className="border-t border-tron-cyan/10 pt-4">
                    <div className="terminal-text text-xs mb-2">CAPABILITIES:</div>
                    <div className="flex flex-wrap gap-2">
                      {sol.specs.map((spec, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 border border-tron-cyan/20 text-tron-text group-hover:border-tron-cyan/40 transition-colors duration-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DATA FLOW DIAGRAM ─── */}
      <section className="py-24 px-6 border-t border-tron-cyan/10 hex-pattern">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// SYSTEM_ARCHITECTURE</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                End-to-End Data Architecture
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="gradient-border p-8 rounded-sm font-mono text-sm">
              <div className="text-tron-cyan/60 mb-2">// TRON LABS DATA PIPELINE v2.0</div>
              <div className="space-y-1 text-tron-text">
                <div>
                  <span className="text-tron-cyan">CAPTURE_LAYER</span> {"{"}
                </div>
                <div className="pl-4">egocentric_video: <span className="text-green-400">4K/60fps_multi_cam</span>,</div>
                <div className="pl-4">sensor_streams: <span className="text-green-400">["audio", "imu", "depth", "thermal"]</span>,</div>
                <div className="pl-4">hand_tracking: <span className="text-green-400">keypoint_21dof_60fps</span>,</div>
                <div>{"}"}</div>
                <div className="mt-2">
                  <span className="text-tron-cyan">PROCESSING_LAYER</span> {"{"}
                </div>
                <div className="pl-4">sync_alignment: <span className="text-green-400">sub_10ms_precision</span>,</div>
                <div className="pl-4">quality_control: <span className="text-green-400">automated_ml_pipeline</span>,</div>
                <div className="pl-4">annotation: <span className="text-green-400">hierarchical_task_labels</span>,</div>
                <div>{"}"}</div>
                <div className="mt-2">
                  <span className="text-tron-cyan">STORAGE_LAYER</span> {"{"}
                </div>
                <div className="pl-4">capacity: <span className="text-yellow-400">&gt;50PB</span>,</div>
                <div className="pl-4">redundancy: <span className="text-green-400">3x_geo_distributed</span>,</div>
                <div className="pl-4">encryption: <span className="text-green-400">AES_256_in_transit_at_rest</span>,</div>
                <div>{"}"}</div>
                <div className="mt-2 text-tron-cyan/60">// STATUS: OPERATIONAL</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="terminal-text text-xs tracking-widest">// USE_CASES</span>
              <h2 className="font-display font-bold text-4xl mt-4 text-white">
                Who Uses Our Data
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Robotics Research", icon: "⟡", desc: "Training general-purpose robot manipulation policies" },
              { title: "Wearable AI", icon: "◎", desc: "Powering contextual AI for AR/VR and smart glasses" },
              { title: "Autonomous Systems", icon: "⊞", desc: "Real-world scene understanding for autonomous agents" },
              { title: "Embodied LLMs", icon: "◈", desc: "Grounding language models in physical world understanding" },
            ].map((uc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glow-border p-6 rounded-sm text-center group hover:bg-tron-cyan/[0.03] transition-all duration-300">
                  <div className="text-tron-cyan text-2xl mb-3">{uc.icon}</div>
                  <h3 className="font-display font-bold text-white mb-2">{uc.title}</h3>
                  <p className="text-tron-text text-xs leading-relaxed">{uc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Ready to Access Our{" "}
              <span className="text-tron-cyan">Data Infrastructure?</span>
            </h2>
            <p className="text-tron-text mb-8">
              Talk to our founders to learn how Tron Labs data can accelerate your AI research.
            </p>
            <Link
              href="/contact"
              className="btn-solid inline-block px-12 py-5 font-display text-sm tracking-widest uppercase"
            >
              Get In Touch →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
