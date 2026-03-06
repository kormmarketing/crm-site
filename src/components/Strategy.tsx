"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const cards = [
  {
    title: "Оптимизация воронки продаж",
    desc: "Устраняю узкие места, повышаю конверсию на каждом этапе.",
  },
  {
    title: "План роста заявок",
    desc: "Как масштабировать поток лидов без потери качества.",
  },
  {
    title: "Улучшение процесса продаж",
    desc: "Системные изменения в работе менеджеров и отдела.",
  },
  {
    title: "Система аналитики",
    desc: "Метрики и отчёты для контроля и принятия решений.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Strategy() {
  return (
    <section id="strategy" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Стратегия"
          title="Разработка стратегии роста"
          subtitle="На основе анализа — конкретный план улучшения продаж и систем."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.12)",
              }}
              className="group glass-card rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 card-hover-glow"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {c.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
