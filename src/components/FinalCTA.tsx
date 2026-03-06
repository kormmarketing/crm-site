"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function FinalCTA() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Large glow gradient background */}
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 40%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 30% 60%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)
          `,
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 28 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: isMobile ? 0.65 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-12 lg:p-20 text-center overflow-hidden border border-white/10 backdrop-blur-2xl bg-white/[0.03] shadow-[0_0_80px_-20px_rgba(59,130,246,0.2)] max-md:border-white/[0.08]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5" />
          <div className="relative">
            <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4">
              Начать работу
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Обсудим вашу задачу?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
              Опишите ситуацию в Telegram — разберём, что можно сделать и как
              лучше подойти к задаче. Без обязательств.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 60px -10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                href="https://t.me/"
                variant="primary"
                size="lg"
                className="text-lg px-10 py-4 shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Написать в Telegram
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
