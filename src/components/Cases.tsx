"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { CaseModal, CaseModalData } from "./ui/CaseModal";

type CaseData = {
  tags: string[];
  title: string;
  desc: string;
  metrics: string[];
  modal: CaseModalData;
};

const cases: CaseData[] = [
  {
    tags: ["Bitrix24", "CRM", "Интеграции"],
    title: "Внедрение Bitrix24 с нуля",
    desc: "Настройка CRM, воронки, ролей и прав доступа. Интеграция с сайтом, телефонией и почтой. Обучение команды и запуск рабочих процессов.",
    metrics: [
      "100% сделки фиксируются в CRM",
      "до 15 минут обработка лида",
      "3 недели внедрение",
    ],
    modal: {
      title: "Внедрение Bitrix24 с нуля",
      modalDesc:
        "Настройка CRM, воронки, ролей и прав доступа. Интеграция с сайтом, телефонией и почтой.",
      whatWeDid: [
        "настроили Bitrix24",
        "собрали воронку продаж",
        "подключили телефонию и сайт",
        "внедрили роли и права доступа",
      ],
      statCards: [
        { value: "100%", label: "сделок в CRM" },
        { value: "15 мин", label: "средняя реакция" },
        { value: "3 нед", label: "внедрение" },
        { value: "8 источников", label: "подключено" },
      ],
      progressBars: [
        { label: "Заполнение CRM", value: 100 },
        { label: "Скорость обработки лидов", value: 92 },
        { label: "Прозрачность воронки", value: 88 },
      ],
      итог:
        "Все заявки фиксируются в системе, руководитель видит загрузку менеджеров и статус каждой сделки.",
    },
  },
  {
    tags: ["Telegram", "Бот", "Bitrix24"],
    title: "Telegram-бот для записи",
    desc: "Бот принимает заявки, записывает в CRM, уведомляет менеджера и помогает сократить ручную обработку обращений.",
    metrics: [
      "60% меньше ручной обработки",
      "до 2 минут ответ клиенту",
      "10 дней запуск",
    ],
    modal: {
      title: "Telegram-бот для записи",
      modalDesc:
        "Бот принимает заявки, записывает клиента, уведомляет менеджера и передаёт данные в CRM.",
      whatWeDid: [
        "разработали Telegram-бота",
        "настроили запись клиентов",
        "подключили уведомления менеджерам",
        "связали бота с CRM",
      ],
      statCards: [
        { value: "60%", label: "меньше ручной работы" },
        { value: "2 мин", label: "до ответа клиенту" },
        { value: "10 дн", label: "запуск решения" },
        { value: "24/7", label: "приём заявок" },
      ],
      progressBars: [
        { label: "Автоматизация записи", value: 95 },
        { label: "Скорость ответа", value: 90 },
        { label: "Снижение ручной нагрузки", value: 60 },
      ],
      итог:
        "Часть рутинной работы ушла из ручного режима, заявки обрабатываются быстрее, клиент сразу попадает в систему.",
    },
  },
  {
    tags: ["Аналитика", "Отчёты", "Дашборд"],
    title: "Аналитика воронки лидов",
    desc: "Настройка дашборда по источникам, конверсии по этапам и стоимости лида. Отчёты для собственника и руководителя продаж.",
    metrics: [
      "8 источников лидов",
      "обновление данных каждый час",
      "70% прозрачность воронки",
    ],
    modal: {
      title: "Аналитика воронки лидов",
      modalDesc:
        "Собран дашборд по источникам, конверсии по этапам и стоимости лида.",
      whatWeDid: [
        "собрали аналитику по источникам",
        "настроили отчёты по этапам",
        "вывели стоимость лида",
        "сделали dashboard для руководителя",
      ],
      statCards: [
        { value: "8", label: "источников лидов" },
        { value: "1 час", label: "обновление данных" },
        { value: "70%", label: "меньше слепых зон" },
        { value: "3 отчёта", label: "для управления" },
      ],
      progressBars: [
        { label: "Прозрачность источников", value: 85 },
        { label: "Контроль конверсии", value: 78 },
        { label: "Актуальность данных", value: 92 },
      ],
      итог:
        "Руководитель видит, откуда приходят лиды, где они теряются и какие каналы реально работают.",
    },
  },
  {
    tags: ["Tilda", "Лендинг", "Уведомления"],
    title: "Лендинг + CRM + уведомления",
    desc: "Tilda-лендинг, формы заявок, интеграция с Bitrix24 и мгновенные уведомления менеджеру о новом лиде.",
    metrics: [
      "100% передача заявок",
      "до 3 минут реакция менеджера",
      "7 дней разработка",
    ],
    modal: {
      title: "Лендинг + CRM + уведомления",
      modalDesc:
        "Сделан лендинг, настроены формы заявок, передача данных в CRM и мгновенные уведомления менеджерам.",
      whatWeDid: [
        "собрали лендинг",
        "настроили формы и квиз",
        "подключили CRM",
        "сделали мгновенные уведомления",
      ],
      statCards: [
        { value: "100%", label: "лидов передаются в CRM" },
        { value: "3 мин", label: "реакция менеджера" },
        { value: "7 дн", label: "сборка проекта" },
        { value: "0%", label: "потерь заявок" },
      ],
      progressBars: [
        { label: "Передача лидов", value: 100 },
        { label: "Скорость реакции", value: 85 },
        { label: "Связка систем", value: 90 },
      ],
      итог:
        "Заявки перестали теряться, менеджер получает уведомление сразу, путь от формы до CRM стал прозрачным.",
    },
  },
  {
    tags: ["Автоматизация", "SLA", "Продажи"],
    title: "Автоматизация отдела продаж",
    desc: "Настройка распределения лидов, SLA, автоматических напоминаний и управленческих отчётов по работе менеджеров.",
    metrics: [
      "100% контроль SLA",
      "ежедневные отчёты",
      "снижение потерь лидов",
    ],
    modal: {
      title: "Автоматизация отдела продаж",
      modalDesc:
        "Настроено распределение лидов, SLA, автоматические напоминания и отчёты по менеджерам.",
      whatWeDid: [
        "внедрили распределение лидов",
        "настроили SLA",
        "добавили напоминания",
        "собрали ежедневные отчёты",
      ],
      statCards: [
        { value: "100%", label: "контроль SLA" },
        { value: "daily", label: "отчёты руководителю" },
        { value: "ниже", label: "потери лидов" },
        { value: "4", label: "контрольные сценария" },
      ],
      progressBars: [
        { label: "Контроль SLA", value: 100 },
        { label: "Дисциплина обработки", value: 87 },
        { label: "Прозрачность работы менеджеров", value: 84 },
      ],
      итог:
        "Процесс продаж стал управляемым: видно кто, когда и как обрабатывает лиды.",
    },
  },
  {
    tags: ["Распределение", "SLA", "Уведомления"],
    title: "Автоматизация обработки лидов",
    desc: "Распределение заявок между менеджерами, контроль SLA, уведомления и отчёты по времени реакции и статусам сделок.",
    metrics: [
      "100% распределение заявок",
      "90% контроль SLA",
      "95% прозрачность статусов",
    ],
    modal: {
      title: "Автоматизация обработки лидов",
      modalDesc:
        "Настроено автоматическое распределение заявок между менеджерами, контроль времени ответа и статусов сделок.",
      whatWeDid: [
        "автоматизировали распределение заявок",
        "подключили уведомления",
        "настроили контроль времени ответа",
        "собрали отчёт по статусам",
      ],
      statCards: [
        { value: "100%", label: "распределение лидов" },
        { value: "90%", label: "контроль SLA" },
        { value: "95%", label: "прозрачность статусов" },
        { value: "1", label: "единая логика обработки" },
      ],
      progressBars: [
        { label: "Распределение заявок", value: 100 },
        { label: "Контроль SLA", value: 90 },
        { label: "Прозрачность статусов", value: 95 },
      ],
      итог:
        "Заявки больше не висят без владельца, контроль по срокам стал автоматическим, руководитель видит статус обработки.",
    },
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

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  return (
    <section id="cases" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Типовые решения"
          title="Примеры задач и сценариев"
          subtitle="Типовые проекты, которые закрываю. Реальные кейсы — по запросу."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 },
                boxShadow:
                  "0 16px 40px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.35)",
              }}
              onClick={() => setSelectedCase(c)}
              className="group glass-card rounded-2xl p-6 overflow-hidden border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="mb-3">
                {c.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="inline-block mr-2 mb-2 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2 group-hover:text-accent-light/90 transition-colors">
                {c.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {c.desc}
              </p>

              {/* Metrics block - hidden on desktop, reveal on hover; always visible on touch */}
              <div
                className="space-y-1.5 pt-2 border-t border-white/5 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-[0.35s] ease-out"
              >
                {c.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="text-xs text-text-muted/90 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedCase && (
        <CaseModal
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
          data={selectedCase.modal}
        />
      )}
    </section>
  );
}
