"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [menuOpen]);

  const navLinks = [
    { href: "#pain-points", label: "Задачи" },
    { href: "#how-i-find", label: "Анализ" },
    { href: "#services", label: "Услуги" },
    { href: "#formats", label: "Форматы" },
    { href: "#process", label: "Процесс" },
    { href: "#cases", label: "Кейсы" },
    { href: "https://t.me/", label: "Telegram", external: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-lg text-text">
          korm.marketing
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text text-sm transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text"
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-text-muted hover:text-text py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
