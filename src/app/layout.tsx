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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <title>株式会社大建設 | 筑紫野市のリフォーム専門会社 - 屋根・外壁・内装・防水工事</title>
        <meta name="description" content="福岡県筑紫野市の株式会社大建設（だいけんせつ）。屋根・外壁・内装・防水工事のリフォーム専門会社です。地域密着で丁寧な施工をお約束。無料見積もり実施中。" />
        <meta name="keywords" content="リフォーム,屋根工事,外壁工事,内装工事,防水工事,筑紫野市,福岡県,大建設,だいけんせつ,ダイケンセツ,塗装工事,設備工事" />
        <meta name="author" content="株式会社大建設" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.daikensetsu111.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.daikensetsu111.com" />
        <meta property="og:title" content="株式会社大建設 | 筑紫野市のリフォーム専門会社" />
        <meta property="og:description" content="福岡県筑紫野市の株式会社大建設。屋根・外壁・内装・防水工事のリフォーム専門会社です。地域密着で丁寧な施工をお約束。" />
        <meta property="og:image" content="https://www.daikensetsu111.com/company-overview.png" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="株式会社大建設" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.daikensetsu111.com" />
        <meta property="twitter:title" content="株式会社大建設 | 筑紫野市のリフォーム専門会社" />
        <meta property="twitter:description" content="福岡県筑紫野市の株式会社大建設。屋根・外壁・内装・防水工事のリフォーム専門会社です。" />
        <meta property="twitter:image" content="https://www.daikensetsu111.com/company-overview.png" />

        {/* その他のメタタグ */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1976d2" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>株式会社大建設</div>
            <nav className={styles.nav} style={{ display: menuOpen ? 'block' : undefined }}>
              <a href="#about">会社概要</a>
              <a href="#services">サービス</a>
              <a href="#flow">工事の流れ</a>
              <a href="#cases">施工事例</a>
              <a href="#greeting">代表挨拶</a>
              <a href="#contact" className={styles.contactBtn}>お問い合わせ</a>
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
