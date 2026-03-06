"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const cards = [
  {
    title: "Частые возражения клиентов",
    desc: "Какие формулировки встречаются чаще всего и где менеджеры «ломаются».",
  },
  {
    title: "Ошибки менеджеров",
    desc: "Типовые промахи в аргументации и работе с возражениями.",
  },
  {
    title: "Точки потери сделок",
    desc: "В каких диалогах и на каком этапе клиент уходит.",
  },
  {
    title: "Улучшение скриптов",
    desc: "Конкретные правки скриптов и фраз на основе разбора.",
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

export function ConversationAnalytics() {
  return (
    <section id="conversation-analytics" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Разбор диалогов"
          title="Анализ разговоров отдела продаж"
          subtitle="Использую расшифровки разговоров для выявления ошибок, возражений и потерь клиентов."
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
              className="glass-card rounded-xl p-5 hover:border-accent-cyan/20 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-3 text-accent-cyan">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
