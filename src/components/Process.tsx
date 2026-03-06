"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionTitle } from "./ui/SectionTitle";

const steps = [
  {
    title: "Разбор ситуации",
    desc: "Понять процессы, воронку, источники лидов. Какие задачи стоят и что мешает их решать.",
  },
  {
    title: "Поиск узких мест",
    desc: "Где теряются лиды, где застревают сделки, что не сходится в отчётах. Приоритизация.",
  },
  {
    title: "Проектирование решения",
    desc: "Схема воронки, этапы, автоматизации. План внедрения с понятным результатом.",
  },
  {
    title: "Внедрение",
    desc: "Настройка, интеграции, тесты. С учётом ваших процессов и без «как у всех».",
  },
  {
    title: "Передача и доработка",
    desc: "Обучение, инструкции, поддержка. Доводка по обратной связи после запуска.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const stepIndex = Math.min(
        Math.floor(v * steps.length),
        steps.length - 1
      );
      setActiveStep(Math.max(0, stepIndex));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Процесс"
          title="Как проходят проекты"
          subtitle="От первого разговора до работающей системы."
          align="center"
        />
        {/* Desktop: sticky scroll layout - левая колонка компактная и sticky, справа одна карточка */}
        <div className="mt-20 hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="sticky top-32 space-y-3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: activeStep === i ? 1 : 0.5,
                }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-4 py-2 rounded-xl transition-colors ${
                  activeStep === i ? "bg-white/5 text-text" : "text-text-muted"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    activeStep === i
                      ? "bg-accent/20 border-2 border-accent/50"
                      : "bg-white/5"
                  }`}
                >
                  <span
                    className={`font-display font-bold text-sm ${
                      activeStep === i ? "text-accent" : "text-text-muted"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            {/* Spacer для создания высоты скролла */}
            <div className="h-[100vh]" aria-hidden />
            <div className="sticky top-32 -mt-[100vh]">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 min-h-[280px] flex flex-col justify-center"
              >
                <p className="text-lg text-text-muted leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </div>
            {/* Доп. spacer чтобы секция была достаточно длинной для скролла */}
            <div className="h-[80vh]" aria-hidden />
          </div>
        </div>
        {/* Mobile: simple timeline */}
        <div className="mt-20 lg:hidden max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-cyan/30 to-accent-purple/50" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                <div className="relative z-10 w-12 h-12 rounded-full glass-card border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display font-semibold text-xl text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.desc}
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
