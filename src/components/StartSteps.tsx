"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const steps = [
  {
    num: "1",
    title: "Напишите в Telegram",
    desc: "Коротко опишите задачу и что сейчас не работает.",
  },
  {
    num: "2",
    title: "Разберём текущую ситуацию",
    desc: "Я уточню контекст и найду узкие места в процессе.",
  },
  {
    num: "3",
    title: "Предложу решение под ваш процесс",
    desc: "План внедрения, сроки и ожидаемый результат.",
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

export function StartSteps() {
  return (
    <section id="start" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Как начать"
          title="3 шага до понятного решения"
          subtitle="Без лишних созвонов и презентаций — быстро до сути."
          align="center"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative glass-card rounded-2xl p-6 lg:p-8 hover:border-accent/20 transition-all duration-300"
            >
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 w-8 h-px -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-accent/40 to-transparent"
                  aria-hidden
                />
              )}
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 text-accent font-display font-bold text-xl">
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {s.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
