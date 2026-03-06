"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 mobile-tap-button";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-glow active:scale-[0.98]",
    secondary:
      "bg-white/5 text-text border border-white/10 hover:bg-white/10 hover:border-accent/30 active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-muted hover:text-text hover:bg-white/5 active:scale-[0.98]",
  };

  const Component = motion.button;
  const props = {
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return <Component {...props}>{children}</Component>;
}
