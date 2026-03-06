"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const methods = [
  {
    title: "Анализ воронки продаж",
    desc: "Изучаю этапы сделки, конверсии между этапами и точки потери клиентов. Определяю где заявки теряются и почему сделки не доходят до оплаты.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Анализ разговоров менеджеров",
    desc: "Разбираю реальные диалоги с клиентами. Нахожу ошибки обработки заявок, слабые места в скриптах и причины потери лидов.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Формирование портрета целевой аудитории",
    desc: "Сегментирую клиентов, определяю ключевые потребности и мотивы покупки. Это помогает точнее выстроить продажи и коммуникацию.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Разработка CJM клиента",
    desc: "Анализирую путь клиента от первого контакта до сделки. Определяю где возникают барьеры и где бизнес теряет клиентов.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Выявление точек роста продаж",
    desc: "Определяю узкие места в процессе продаж и показываю какие изменения дадут наибольший рост конверсии и выручки.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    title: "JTBD — задачи клиента",
    desc: "Определяю какую реальную задачу клиент пытается решить покупкой. Помогает выстроить правильное предложение и коммуникацию.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhatIDo() {
  return (
    <section id="how-i-find" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent opacity-40" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Диагностика"
          title="Как я нахожу проблемы в продажах"
          subtitle="Перед внедрением CRM или автоматизации я анализирую процессы бизнеса и путь клиента."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {methods.map((m, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
                boxShadow: "0 16px 40px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.35)",
              }}
              className="group glass-card rounded-2xl p-7 lg:p-8 border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.35)] transition-all duration-300">
                {m.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2.5">
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
