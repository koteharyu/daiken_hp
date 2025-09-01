import styles from '../app/page.module.css';

export default function CasesSection() {
  return (
    <section className={styles.section} id="cases">
      <h2>施工事例</h2>
      <p className={styles.sectionLead}>
        これまでに手がけた施工事例をご紹介します。屋根・外壁・内装・水回りなど、
        様々なリフォーム工事の実績をご覧いただけます。
      </p>
      <div className={styles.casesCtaContainer}>
        <a href="/cases" className={styles.casesCtaButton}>
          施工事例を見る
        </a>
      </div>
    </section>
  );
}
