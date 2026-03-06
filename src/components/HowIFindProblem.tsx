"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const methods = [
  {
    title: "Анализ воронки продаж",
    desc: "Изучаю этапы сделки, конверсии, потери клиентов и узкие места.",
  },
  {
    title: "Анализ разговоров менеджеров",
    desc: "Смотрю реальные диалоги, выявляю ошибки и точки потери продаж.",
  },
  {
    title: "CJM — путь клиента",
    desc: "Разбираю путь клиента от первого контакта до сделки.",
  },
  {
    title: "JTBD — задачи клиента",
    desc: "Понимаю, зачем клиент реально покупает продукт.",
  },
  {
    title: "Портрет целевой аудитории",
    desc: "Сегментирую клиентов и выявляю ключевые потребности.",
  },
  {
    title: "Анализ конкурентов",
    desc: "Парсинг отзывов и анализ сильных и слабых сторон рынка.",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HowIFindProblem() {
  return (
    <section id="how-i-find" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Анализ перед внедрением"
          title="Как я нахожу реальные проблемы в продажах"
          subtitle="Перед внедрением CRM или автоматизации я анализирую процессы бизнеса и путь клиента."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {methods.map((m, i) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {m.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
