"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const labels = ["Bitrix24", "Telegram", "CRM", "Аналитика"];
const floatDelays = [0, 0.3, 0.6, 0.2];
const floatDurations = [7, 6.5, 8, 6];

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 12]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects - desktop unchanged */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-[glow-pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl animate-[glow-pulse_10s_ease-in-out_infinite]" />

      {/* Mobile-only: subtle background motion */}
      <div
        className="absolute inset-0 md:hidden opacity-50 mobile-bg-drift"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 40%, transparent 60%, rgba(34,211,238,0.04) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-12 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4"
            >
              CRM · Автоматизация · Bitrix24 · Аналитика
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              Настраиваю CRM,{" "}
              <span className="gradient-text">воронки продаж</span> и
              автоматизацию. Сайт, Telegram, реклама — одна система.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-muted leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
              Bitrix24, телефония, аналитика лидов, Telegram-боты. Без воды —
              под конкретные процессы вашего бизнеса.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                href="https://t.me/"
                variant="primary"
                size="lg"
                className="group mobile-telegram-glow"
              >
                <span className="flex items-center gap-2">
                  Обсудить задачу в Telegram
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
              <Button variant="secondary" size="lg" href="#how-i-find">
                Как работаю
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Animated mockup - full on desktop, compact cluster on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[280px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Mobile: compact floating cluster */}
            <motion.div
              style={isMobile ? { y: parallaxY } : undefined}
              className="md:hidden relative w-full max-w-[280px] mx-auto"
            >
              <div className="grid grid-cols-2 gap-2 place-items-center">
                {labels.map((label, i) => (
                  <motion.div
                    key={label}
                    className="glass-card rounded-lg px-3 py-2 text-xs text-text-muted border-white/[0.06] w-full max-w-[120px] mobile-tap-card"
                    animate={{ y: [-6, 6, -6] }}
                    transition={{
                      duration: floatDurations[i],
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelays[i],
                    }}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent/60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-accent-cyan/60 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </motion.div>
            <div className="hidden md:block w-full h-full">
              <HeroMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative w-full h-full">
      {/* Central pipeline card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 glass-card rounded-2xl p-4 border-accent/20"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-text-muted">Pipeline</span>
        </div>
        <div className="space-y-2">
          {["Новый", "В работе", "Сделка"].map((stage, i) => (
            <div
              key={stage}
              className="h-6 rounded bg-white/5 flex items-center px-2 text-xs"
              style={{ opacity: 1 - i * 0.2 }}
            >
              {stage}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bitrix24 card - top */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 top-[10%] w-40 glass-card rounded-xl p-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-[#E31E24]/20 flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#E31E24]">24</span>
          </div>
          <span className="text-xs font-medium">Bitrix24</span>
        </div>
        <div className="text-[10px] text-text-muted">
          Лид #1247 → Менеджер
        </div>
      </motion.div>

      {/* Telegram Bot card - top left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-0 top-[15%] w-36 glass-card rounded-xl p-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-[#0088cc]/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Telegram Bot</span>
        </div>
        <div className="text-[10px] text-text-muted">
          Запись · Уведомления
        </div>
      </motion.div>

      {/* Analytics card - bottom right */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute right-[5%] bottom-[20%] w-44 glass-card rounded-xl p-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Аналитика</span>
        </div>
        <div className="space-y-1">
          {[65, 42, 89].map((val, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${val}%` }}
                  transition={{ duration: 2, delay: 1 + i * 0.2 }}
                  className="h-full bg-gradient-to-r from-accent to-accent-cyan rounded-full"
                />
              </div>
              <span className="text-[10px] text-text-muted w-6">{val}%</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lead notification - bottom left */}
      <motion.div
        animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute left-[8%] bottom-[25%] w-36 glass-card rounded-xl p-3 border-accent-cyan/20"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-[10px] text-accent-cyan">Новый лид</span>
        </div>
        <div className="text-xs">Иван Петров</div>
        <div className="text-[10px] text-text-muted">+7 999 123-45-67</div>
      </motion.div>

      {/* Connection lines between cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="85%" y2="18%" stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="12%" y2="75%" stroke="url(#lineGrad2)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="88%" y2="78%" stroke="url(#lineGrad2)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  );
}
