'use client';

import { usePathname } from 'next/navigation';
import styles from '../app/page.module.css';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footerModern}>
      <div>株式会社大建設<span style={{fontSize: '0.8em', marginLeft: '0.5em'}}>(だいけんせつ)</span></div>
      <div className={styles.footerLinks}>
        <a href={pathname === '/cases' ? '/' : '#'}>ホーム</a>
        <a href={pathname === '/cases' ? '/#about' : '#about'}>会社概要</a>
        <a href={pathname === '/cases' ? '/#services' : '#services'}>サービス</a>
        <a href={pathname === '/cases' ? '/#flow' : '#flow'}>工事の流れ</a>
        <a href="/cases">施工事例</a>
        <a href={pathname === '/cases' ? '/#greeting' : '#greeting'}>代表挨拶</a>
        <a href={pathname === '/cases' ? '/#contact' : '#contact'}>お問い合わせ</a>
      </div>
      <div className={styles.footerContact}>
        <div>〒816-0068 福岡県筑紫野市石崎３丁目３３番地６</div>
        <div><a href="tel:0926001194">092-600-1194</a></div>
        <div><a href="mailto:info@daikensetsu111.com">info@daikensetsu111.com</a></div>
      </div>
      <div className={styles.footerSocial}>
        <a href="https://line.me/R/ti/p/@026epyml" target="_blank" rel="noopener noreferrer" className={styles.lineIcon}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#00B900"/>
            <path d="M20 6C12.28 6 6 10.89 6 16.85C6 22.04 10.5 26.47 16.6 27.45C17.05 27.55 17.65 27.76 17.8 28.15C17.94 28.51 17.89 29.08 17.84 29.45C17.84 29.45 17.67 30.5 17.64 30.7C17.57 31.06 17.34 32.09 20.05 31.01C22.76 29.93 31.35 24.58 34.75 20.65C36.8 18.41 38 16.21 38 13.85C38 10.89 31.72 6 20 6ZM14.2 19.5H11.5C11.22 19.5 11 19.28 11 19V14C11 13.72 11.22 13.5 11.5 13.5C11.78 13.5 12 13.72 12 14V18.5H14.2C14.48 18.5 14.7 18.72 14.7 19C14.7 19.28 14.48 19.5 14.2 19.5ZM17 19C17 19.28 16.78 19.5 16.5 19.5C16.22 19.5 16 19.28 16 19V14C16 13.72 16.22 13.5 16.5 13.5C16.78 13.5 17 13.72 17 14V19ZM23.5 19.5C23.36 19.5 23.23 19.45 23.13 19.35L19.5 15.71V19C19.5 19.28 19.28 19.5 19 19.5C18.72 19.5 18.5 19.28 18.5 19V14C18.5 13.83 18.59 13.68 18.74 13.6C18.89 13.52 19.07 13.52 19.22 13.6L22.87 17.29V14C22.87 13.72 23.09 13.5 23.37 13.5C23.65 13.5 23.87 13.72 23.87 14V19C23.87 19.17 23.78 19.32 23.63 19.4C23.58 19.43 23.54 19.5 23.5 19.5ZM28.5 19.5H25.8C25.52 19.5 25.3 19.28 25.3 19V14C25.3 13.72 25.52 13.5 25.8 13.5H28.5C28.78 13.5 29 13.72 29 14C29 14.28 28.78 14.5 28.5 14.5H26.3V15.75H28.5C28.78 15.75 29 15.97 29 16.25C29 16.53 28.78 16.75 28.5 16.75H26.3V18.5H28.5C28.78 18.5 29 18.72 29 19C29 19.28 28.78 19.5 28.5 19.5Z" fill="white"/>
          </svg>
          <span>LINE</span>
        </a>
      </div>
      <div className={styles.copyright}>
        © 2025 株式会社大建設 All Rights Reserved.
      </div>
    </footer>
  );
}