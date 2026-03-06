"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const pains = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Лиды теряются",
    desc: "Заявки не доходят до менеджеров или обрабатываются с опозданием. Нет единой точки входа.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Менеджеры не отрабатывают заявки",
    desc: "Нет контроля сроков, статусов и качества обработки. Сделки «зависают» без движения.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Bitrix24 внедрён формально",
    desc: "CRM стоит, но не помогает. Воронка не настроена, отчёты не сходятся, процессы разъехались.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Заявки разбросаны по мессенджерам",
    desc: "Telegram, WhatsApp, форма сайта, звонки — всё в разных местах. Свести воедино сложно.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Нет прозрачной аналитики",
    desc: "Откуда лиды, какой источник конвертит, где теряются — непонятно. Решения «на глаз».",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Нет контроля продаж",
    desc: "Сложно понять, что происходит в отделе продаж. Нет метрик, SLA и понятной воронки.",
  },
];

const container = (stagger: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: 0 },
  },
});

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemMobile = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PainPoints() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const cardVariants = isMobile ? itemMobile : item;
  const containerVariants = container(isMobile ? 0.08 : 0.1);

  return (
    <section id="pain-points" className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Реальные задачи бизнеса"
          title="Когда CRM и продажи работают не так, как нужно"
          subtitle="Не абстрактный маркетинг — конкретные рабочие ситуации, с которыми сталкиваются отделы продаж."
        />

        {/* Desktop: keep existing grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
                boxShadow: "0 16px 40px -12px rgba(59, 130, 246, 0.18), 0 0 0 1px rgba(59, 130, 246, 0.25)",
              }}
              className="group glass-card rounded-2xl p-6 border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                {pain.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {pain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: stacked scroll storytelling */}
        <div className="md:hidden mt-12 space-y-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-5 border-white/[0.08] mobile-tap-card transition-all duration-300"
              style={{
                marginTop: i > 0 ? -16 : 0,
                zIndex: pains.length - i,
                boxShadow: i > 0 ? "0 8px 24px -8px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.03)" : undefined,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                {pain.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-text mb-1.5">
                {pain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
