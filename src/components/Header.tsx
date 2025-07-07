'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>株式会社大建設</div>
        <nav className={styles.nav} style={{ display: menuOpen ? 'block' : undefined }}>
          <a href="#about">会社概要</a>
          <a href="#services">サービス</a>
          <a href="#flow">工事の流れ</a>
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
  );
}