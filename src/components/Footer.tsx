import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-tron-cyan/10 bg-[#020204] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-glow.png" alt="Tron Labs" className="w-7 h-7 object-contain" />
              <span className="font-display font-bold text-lg tracking-widest text-white">
                TRON<span className="text-tron-cyan">_</span>LABS
              </span>
            </div>
            <p className="text-tron-text text-sm leading-relaxed max-w-xs">
              Building the data backbone for Physical AI.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-cyan mb-4">
              Navigation
            </h4>
            <div className="flex gap-16">
              <ul className="space-y-3">
                <li><Link href="/" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">Home</Link></li>
                <li><Link href="/about" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">About</Link></li>
                <li><Link href="/solution" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">Solution</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link href="/partners" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">Partners</Link></li>
                <li><Link href="/careers" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">Careers</Link></li>
                <li><Link href="/contact" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-display text-xs tracking-widest uppercase text-tron-cyan mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-tron-text text-sm">
              <li>
                <a href="mailto:founders@mytronlabs.com" className="hover:text-tron-cyan transition-colors duration-200">
                  founders@mytronlabs.com
                </a>
              </li>
              <li>
                <a href="https://mytronlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-tron-cyan transition-colors duration-200">
                  mytronlabs.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-display text-xs tracking-widest uppercase text-tron-cyan mb-3">Social Links</h4>
              <a href="https://www.linkedin.com/company/my-tron-labs" target="_blank" rel="noopener noreferrer" className="text-tron-text text-sm hover:text-tron-cyan transition-colors duration-200">LinkedIn</a>
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
    </footer >
  );
}