"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const cards = [
  {
    title: "Парсинг отзывов",
    desc: "Автоматический сбор отзывов клиентов и конкурентов.",
  },
  {
    title: "Анализ слабых мест конкурентов",
    desc: "Где конкуренты проигрывают и какие возможности это даёт.",
  },
  {
    title: "Выявление запросов клиентов",
    desc: "О чём реально говорят клиенты в отзывах и обсуждениях.",
  },
  {
    title: "Идеи для позиционирования",
    desc: "Как выделиться на фоне рынка на основе данных.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function MarketResearch() {
  return (
    <section id="market-research" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Исследование рынка"
          title="Анализ рынка и конкурентов"
          subtitle="Использую автоматический парсинг отзывов и данных конкурентов."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-5 hover:border-accent-purple/20 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-3 text-accent-purple">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-base text-text mb-1">
                {c.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
