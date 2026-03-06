"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#pain-points", label: "Задачи" },
  { href: "#how-i-find", label: "Анализ" },
  { href: "#services", label: "Услуги" },
  { href: "#formats", label: "Форматы" },
  { href: "#process", label: "Процесс" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contact", label: "Связаться" },
];

export function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 border-t border-white/5" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="font-display font-bold text-xl text-text">
              CRM · Автоматизация · Bitrix24
            </div>
            <p className="text-text-muted text-sm mt-1">
              CRM / автоматизация / Bitrix24 / аналитика
            </p>
            <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
              <a
                href="mailto:hello@example.com"
                className="text-text-muted hover:text-accent text-sm transition-colors"
              >
                hello@example.com
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent text-sm transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Telegram
              </a>
            </div>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} · korm.marketing
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
