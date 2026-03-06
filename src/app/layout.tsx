import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { GlobalBackground } from "@/components/GlobalBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRM · Автоматизация продаж · Bitrix24 · Telegram-боты",
  description:
    "Специалист по CRM, автоматизации продаж, Telegram-ботам, аналитике и Bitrix24. Настройка воронок, интеграции, прозрачная аналитика.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background text-text relative">
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
