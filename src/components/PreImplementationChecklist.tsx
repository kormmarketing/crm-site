"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const items = [
  "источники лидов",
  "воронка продаж",
  "процессы обработки заявок",
  "разговоры менеджеров",
  "конверсия по этапам",
  "скорость реакции на лид",
  "точки потери клиентов",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function PreImplementationChecklist() {
  return (
    <section id="pre-implementation" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Чек-лист"
          title="Что анализируется перед внедрением системы"
          subtitle="Без понимания текущей ситуации — внедрение превращается в «подгонку под шаблон»."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-6 lg:p-8 border-accent/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {items.map((label, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
