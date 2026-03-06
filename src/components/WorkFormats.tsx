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

const container = (stagger: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: 0 },
  },
});

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WorkFormats() {
  const containerVariants = container(0.1);

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

        {/* Desktop: keep existing step cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
              className="glass-card rounded-2xl p-6 text-center border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300 mobile-tap-card"
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

        {/* Mobile: vertical timeline step list */}
        <div className="md:hidden mt-12">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />
            {formats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pb-6 last:pb-0"
                style={{ marginBottom: i < formats.length - 1 ? 22 : 0 }}
              >
                {/* Number square */}
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-display font-bold text-sm">
                  {i + 1}
                </div>
                <div className="glass-card rounded-xl p-4 border-white/[0.08] mobile-tap-card">
                  <h3 className="font-display font-semibold text-base text-text mb-1.5">
                    {format.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {format.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
