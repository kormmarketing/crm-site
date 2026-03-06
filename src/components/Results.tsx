"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const results = [
  {
    title: "Все заявки в одном месте",
    desc: "Сайт, мессенджеры, звонки и реклама собираются в CRM без ручной пересылки.",
  },
  {
    title: "Менеджеры не теряют лиды",
    desc: "SLA, напоминания, автоназначение и контроль обработки — системно.",
  },
  {
    title: "Прозрачная воронка продаж",
    desc: "Этапы и статусы отражают реальный процесс. Сделки не «висят» без движения.",
  },
  {
    title: "Понятная аналитика по каналам",
    desc: "Что приносит лиды и продажи, что — нет. Данные для решений, не ощущений.",
  },
  {
    title: "Автоматические уведомления",
    desc: "О новых лидах, просрочках и событиях — в Telegram, почту или внутри CRM.",
  },
  {
    title: "Контроль работы менеджеров",
    desc: "Отчёты по скорости реакции, причинам потерь, нагрузке и эффективности.",
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

export function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent opacity-50" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Результат"
          title="Что получает бизнес"
          subtitle="Конкретные эффекты в работе отдела продаж и CRM."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {results.map((r, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 40px -15px rgba(34, 211, 238, 0.12)",
              }}
              className="group glass-card rounded-2xl p-6 hover:border-accent-cyan/20 transition-all duration-300 card-hover-glow"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {r.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
