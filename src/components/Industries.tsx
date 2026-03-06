"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const industries = [
  {
    icon: "🏗️",
    title: "Строительство",
    desc: "Длинные сделки, заявки из нескольких каналов, контроль этапов и SLA.",
  },
  {
    icon: "🦷",
    title: "Клиники и стоматологии",
    desc: "Запись, повторные обращения, качество обработки и аналитика по источникам.",
  },
  {
    icon: "💇",
    title: "Салоны красоты",
    desc: "Быстрая реакция на лиды, запись и автоматические напоминания.",
  },
  {
    icon: "🎓",
    title: "Онлайн-школы",
    desc: "Воронки, автосценарии, сегментация лидов и дашборды по конверсиям.",
  },
  {
    icon: "🚗",
    title: "Автосервисы",
    desc: "Заявки из звонков и мессенджеров, контроль обработки и возврат клиентов.",
  },
  {
    icon: "🧰",
    title: "Локальный сервисный бизнес",
    desc: "Упорядочить поток заявок и сделать продажи управляемыми.",
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

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Доверие"
          title="С какими бизнесами работаю"
          subtitle="Ниши с регулярным потоком заявок, где важны контроль и скорость реакции."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 40px -15px rgba(167, 139, 250, 0.12)",
              }}
              className="group glass-card rounded-2xl p-6 hover:border-accent-purple/20 transition-all duration-300 card-hover-glow"
            >
              <div className="text-2xl mb-4">{ind.icon}</div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {ind.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
