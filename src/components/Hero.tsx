"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-grid">
      {/* Soft radial gradient overlay to keep the grid subtle */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
        >
          Mechanical Design Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Chin Hei Wu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-foreground/70 sm:text-xl"
        >
          I turn early ideas into functional, manufacturable products —
          designing for plastics, sheet metal, and real-world production
          from first sketch through prototype to release.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-surface-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
