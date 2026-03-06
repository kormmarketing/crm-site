"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const steps = [
  {
    title: "Диагностика",
    items: [
      "Анализ воронки продаж",
      "Анализ разговоров менеджеров",
      "CJM и путь клиента",
      "Поиск точек роста",
    ],
  },
  {
    title: "Проектирование",
    items: [
      "Проект структуры CRM",
      "Настройка этапов воронки",
      "Логика автоматизации",
      "Интеграции систем",
    ],
  },
  {
    title: "Внедрение",
    items: [
      "Настройка CRM и процессов",
      "Telegram-боты и автоматизация",
      "Подключение аналитики",
      "Обучение команды",
    ],
  },
];

export function SectionDivider() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 28 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: isMobile ? 0.65 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="group/step flex flex-col lg:flex-row items-center flex-1 min-w-0 gap-0"
            >
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 28 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: isMobile ? 0.65 : 0.5,
                  delay: i * (isMobile ? 0.08 : 0.1),
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                  boxShadow:
                    "0 16px 40px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.35)",
                }}
                className="group relative glass-card rounded-2xl p-6 flex-1 min-w-0 max-md:border-white/[0.08] border-white/[0.06] hover:border-[rgba(59,130,246,0.35)] hover:bg-white/[0.04] transition-all duration-300 z-10 mobile-tap-card"
              >
                <h3 className="font-display font-semibold text-lg text-text mb-4 group-hover:text-accent-light/90 transition-colors">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Connector with arrow + animated dot */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center flex-shrink-0 w-20 xl:w-28 relative self-stretch">
                  <div className="absolute inset-0 flex items-center">
                    {/* Line - light blue, glows when adjacent card hovered */}
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 group-hover/step:from-accent/30 group-hover/step:via-accent/50 group-hover/step:to-accent/30 transition-all duration-300" />
                    {/* Arrow */}
                    <div className="flex-shrink-0 pl-1 text-accent/40 group-hover/step:text-accent/70 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Animated dot - flows along the line */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    animate={{
                      x: [0, 56],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              )}

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="flex lg:hidden flex-col items-center w-full py-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent/80 mb-1"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <svg
                    className="w-6 h-6 text-text-muted/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
