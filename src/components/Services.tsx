"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const services = [
  {
    title: "CRM и воронка продаж",
    desc: "Проектирование и настройка воронки от лида до сделки. Статусы, этапы, роли, права доступа и автоматизация процессов.",
    tags: ["CRM", "воронка", "статусы", "автоматизация"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: "from-accent to-accent-light",
  },
  {
    title: "Telegram-боты и автоматизация",
    desc: "Боты для записи клиентов, уведомлений и обработки заявок. Связывают сайт, мессенджеры и CRM в одну систему.",
    tags: ["Telegram", "заявки", "уведомления"],
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
    gradient: "from-accent-cyan to-accent",
  },
  {
    title: "Bitrix24 и интеграции",
    desc: "Внедрение и доработка Bitrix24. Интеграции с телефонией, сайтом, почтой и рекламными источниками.",
    tags: ["Bitrix24", "телефония", "интеграции"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-accent-purple to-accent",
  },
  {
    title: "Аналитика лидов и отчёты",
    desc: "Настройка аналитики источников лидов, конверсий и стоимости заявок. Дашборды и отчёты для принятия решений.",
    tags: ["аналитика", "лиды", "отчёты"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-accent to-accent-cyan",
  },
  {
    title: "Tilda и лендинги под трафик",
    desc: "Создание лендингов, форм заявок и квизов с интеграцией в CRM и системой аналитики.",
    tags: ["Tilda", "формы", "интеграции"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-accent-cyan to-accent-purple",
  },
  {
    title: "AI и точечные скрипты",
    desc: "Скрипты и автоматизации под конкретные задачи бизнеса: анализ данных, уведомления, обработка лидов.",
    tags: ["AI", "автоматизация", "скрипты"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-accent-purple to-accent-cyan",
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

const cardVariantsMobile = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerVariants = container(isMobile ? 0.08 : 0.1);
  const variants = isMobile ? cardVariantsMobile : cardVariants;
  return (
    <section id="services" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Инструменты"
          title="Какие системы внедряю после диагностики"
          subtitle="Внедрение и настройка систем под реальные процессы вашего бизнеса."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={variants}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
                boxShadow: "0 16px 40px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.35)",
              }}
              className="group relative glass-card rounded-2xl p-7 lg:p-8 overflow-hidden max-md:border-white/[0.08] border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300 mobile-tap-card"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-text mb-2.5">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 text-text-muted text-xs font-medium border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Button href="https://t.me/" variant="secondary" size="lg">
            Обсудить задачу
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
