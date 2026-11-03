"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-brand lg:hidden"
        >
          <motion.nav
            variants={staggerContainer(0.06, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex h-full flex-col items-center justify-center gap-6"
          >
            {links.map((link) => (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-3xl text-paper hover:text-gold-glow transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
