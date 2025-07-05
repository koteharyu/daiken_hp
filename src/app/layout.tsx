'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>株式会社大建設</div>
            <nav className={styles.nav} style={{ display: menuOpen ? 'block' : undefined }}>
              <a href="#about">会社概要</a>
              <a href="#services">サービス</a>
              <a href="#flow">工事の流れ</a>
              <a href="#greeting">代表挨拶</a>
              <a href="#contact">お問い合わせ</a>
            </nav>
            <button
              className={styles.hamburger}
              aria-label="メニューを開く"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
