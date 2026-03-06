"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const advantages = [
  {
    title: "Понимание продаж",
    desc: "Работаю с воронками и CRM не в отрыве от реальных процессов отдела продаж.",
  },
  {
    title: "Системный подход",
    desc: "Связываю сайт, рекламу, CRM, мессенджеры — не точечные «костыли», а целая система.",
  },
  {
    title: "Без воды",
    desc: "Конкретные задачи, понятные результаты. Никаких абстрактных «улучшений маркетинга».",
  },
  {
    title: "Ориентация на процессы",
    desc: "Настройка под ваши реальные этапы и сценарии, а не под «типовой шаблон».",
  },
  {
    title: "Простым языком",
    desc: "Умею объяснять сложное так, чтобы было понятно без погружения в технические детали.",
  },
  {
    title: "Работаю сам",
    desc: "Без субподрядчиков и команды посредников. Вы работаете напрямую со специалистом.",
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

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Почему я"
          title="Подход к работе"
          subtitle="Что отличает результат от «ещё одной настройки CRM»."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-accent-cyan/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-text mb-1">
                      {adv.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
