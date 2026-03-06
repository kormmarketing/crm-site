"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "";
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 28 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: isMobile ? 0.65 : 0.5 }}
      className={`max-w-3xl ${alignStyles}`}
    >
      {label && (
        <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
