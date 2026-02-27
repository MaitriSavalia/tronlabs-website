"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solution", label: "Solution" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050508]/95 backdrop-blur-md border-b border-tron-cyan/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 border border-tron-cyan/60 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-1.5 bg-tron-cyan/20 rotate-45 group-hover:bg-tron-cyan/40 transition-colors duration-300" />
          </div>
          <span className="font-display font-bold text-xl tracking-widest text-white group-hover:text-tron-cyan transition-colors duration-300">
            TRON<span className="text-tron-cyan">_</span>LABS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className={`nav-link font-body text-sm tracking-wider uppercase ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            prefetch={true}
            className="btn-primary px-5 py-2 text-sm font-display tracking-widest uppercase"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-tron-cyan p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#050508]/98 backdrop-blur-lg border-t border-tron-cyan/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className={`nav-link font-body text-base tracking-wider uppercase ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
