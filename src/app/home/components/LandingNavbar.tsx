"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", href: "/home" },
  { label: "Real Estates", href: "/property" },
  { label: "Hotels", href: "/hotel" },
  { label: "Artisans", href: "/services" },
  { label: "Pricings", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export default function LandingNavbar({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div
      className={`${
        overlay ? "fixed inset-x-0" : "sticky"
      } top-0 z-50 flex justify-center px-5 pt-5 md:px-8`}
    >
      <motion.nav
        initial={false}
        animate={{
          borderRadius: scrolled ? 20 : 64,
          paddingTop: scrolled ? 12 : 16,
          paddingBottom: scrolled ? 12 : 16,
          backgroundColor: scrolled ? "rgba(0,38,27,0.92)" : "rgba(0,0,0,0.15)",
        }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full max-w-[1152px] items-center justify-center border border-white/20 px-8 backdrop-blur-md"
      >
        <div className="flex w-full items-center justify-between gap-8">
          <div className="flex items-center gap-12">
            <Link href="/home" className="shrink-0">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BE4D00] text-white font-semibold text-lg"
                aria-label="Logo placeholder"
              >
                YC
              </div>
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => {
                const isActive =
                  !link.href.includes("#") &&
                  (pathname === link.href || pathname.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[16px] font-medium tracking-[0.7px] transition-colors ${
                      isActive
                        ? "border-b-2 border-[#fb7933] pb-1.5 font-semibold text-[#fb7933]"
                        : "text-white hover:text-[#fb7933]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/signup"
              className="whitespace-nowrap rounded-2xl bg-[#be4d00] px-4 py-3.5 text-[18px] font-normal text-white transition-colors hover:bg-[#a54300]"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              aria-label="Account"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.4c-3.5 0-9.9 1.9-9.9 5.6v1.8h19.8v-1.8c0-3.7-6.4-5.6-9.9-5.6Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="landing-navbar-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <motion.svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="landing-navbar-menu"
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-5 top-[calc(100%-8px)] z-40 origin-top overflow-hidden rounded-2xl border border-white/20 bg-[#00261b] shadow-xl lg:hidden"
          >
            <ul className="divide-y divide-white/10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-5 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-[#fb7933]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="block px-5 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-[#fb7933]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block bg-[#be4d00] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#a54300]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
