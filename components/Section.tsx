"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cx("scroll-mt-24 py-8 sm:py-16", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-0 sm:px-6">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-8"
          >
            {eyebrow && (
              <p className="text-sm font-medium text-zinc-400">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}