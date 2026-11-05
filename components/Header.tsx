"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { useCursor } from "@/lib/cursor-context";
import { OFFICES } from "@/lib/offices";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/materials", label: "Materials" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled && !menuOpen ? "bg-paper/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="relative z-50 flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Log Homes International"
            width={56}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setCursor({ variant: "link" })}
              onMouseLeave={resetCursor}
              className={`relative font-body text-sm tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                scrolled ? "text-brand hover:text-gold" : "text-paper hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${OFFICES[0].phone.replace(/\s+/g, "")}`}
          className={`hidden lg:inline-block font-body text-sm font-medium ${
            scrolled ? "text-brand" : "text-paper"
          }`}
        >
          {OFFICES[0].phone}
        </a>

        {/* Mobile hamburger / close toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45 bg-paper" : scrolled ? "bg-brand" : "bg-paper"
            }`}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45 bg-paper" : scrolled ? "bg-brand" : "bg-paper"
            }`}
          />
        </button>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
