"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const formats = [
  {
    title: "Аудит",
    desc: "Разбор текущей настройки CRM, воронки, источников лидов. Выявление узких мест и рекомендации.",
  },
  {
    title: "Точечная настройка",
    desc: "Исправить конкретную задачу: форма, уведомления, отчёт, интеграция. Без переделки всего.",
  },
  {
    title: "Проект под ключ",
    desc: "Полный цикл: от разбора процессов до внедрения, обучения и передачи. С фиксированным результатом.",
  },
  {
    title: "Сопровождение",
    desc: "Поддержка, доработки, развитие системы. Регулярные консультации и оперативная помощь.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WorkFormats() {
  return (
    <section id="formats" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent opacity-50" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Форматы работы"
          title="Как можем работать вместе"
          subtitle="От разового аудита до полного сопровождения — в зависимости от задачи."
          align="center"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {formats.map((format, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
                boxShadow: "0 16px 40px -12px rgba(59, 130, 246, 0.18), 0 0 0 1px rgba(59, 130, 246, 0.35)",
              }}
              className="glass-card rounded-2xl p-6 text-center border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent font-display font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {format.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {format.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
