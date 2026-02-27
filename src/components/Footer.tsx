import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-tron-cyan/10 bg-[#020204] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 border border-tron-cyan/60 rotate-45" />
                <div className="absolute inset-1.5 bg-tron-cyan/20 rotate-45" />
              </div>
              <span className="font-display font-bold text-lg tracking-widest text-white">
                TRON<span className="text-tron-cyan">_</span>LABS
              </span>
            </div>
            <p className="text-tron-text text-sm leading-relaxed max-w-xs">
              Building the data backbone for Physical AI. The ChatGPT moment for robotics is near.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="terminal-text text-xs">SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-cyan mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Solution", "/solution"],
                ["Partners", "/partners"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-cyan mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-tron-text text-sm">
              <li>
                <a
                  href="mailto:priyank@mytronlabs.com"
                  className="hover:text-tron-cyan transition-colors duration-200"
                >
                  priyank@mytronlabs.com
                </a>
              </li>
              <li>
                <a
                  href="https://mytronlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tron-cyan transition-colors duration-200"
                >
                  mytronlabs.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <div className="terminal-text text-xs text-tron-cyan/40">SOCIAL LINKS COMING SOON</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-tron-cyan/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tron-text text-xs font-mono">
            © {new Date().getFullYear()} TRON LABS — ALL RIGHTS RESERVED
          </p>
          <p className="text-tron-text text-xs font-mono">
            PHYSICAL AI // EGOCENTRIC DATA // EMBODIED INTELLIGENCE
          </p>
        </div>
      </div>
    </footer>
  );
}
