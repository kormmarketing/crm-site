"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export type CaseModalData = {
  title: string;
  modalDesc: string;
  whatWeDid: string[];
  statCards: { value: string; label: string }[];
  progressBars: { label: string; value: number }[];
  итог: string;
};

type CaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: CaseModalData;
};

export function CaseModal({ isOpen, onClose, data }: CaseModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-8 border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-text-muted hover:text-text hover:bg-white/5 transition-colors z-10"
              aria-label="Закрыть"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <h2 className="font-display font-semibold text-2xl text-text mb-2">
                {data.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                {data.modalDesc}
              </p>
            </div>

            {/* 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Left column: description, list, итог */}
              <div className="lg:col-span-3 space-y-6">
                {/* What we did */}
                <div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                    Что сделали
                  </h3>
                  <ul className="space-y-2">
                    {data.whatWeDid.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.1 + i * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Итог */}
                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                    Итог
                  </h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.35 }}
                    className="text-text-muted text-sm leading-relaxed"
                  >
                    {data.итог}
                  </motion.p>
                </div>
              </div>

              {/* Right column: stat cards + progress bars */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stat cards */}
                <div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                    Метрики
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {data.statCards.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.15 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-xl bg-white/[0.03] border border-white/5 p-4"
                      >
                        <div className="font-display font-semibold text-lg text-text">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-text-muted uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Progress bars */}
                <div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                    Прогресс
                  </h3>
                  <div className="space-y-4">
                    {data.progressBars.map((bar, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-text-muted">{bar.label}</span>
                          <span className="text-text-muted font-medium">
                            {bar.value}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${bar.value}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + i * 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
