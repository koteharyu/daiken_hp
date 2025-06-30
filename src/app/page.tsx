import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className={styles.pageModern}>
      {/* ヘッダー */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>株式会社大建設</div>
          <nav className={styles.nav}>
            <a href="#about">会社概要</a>
            <a href="#services">サービス</a>
            <a href="#flow">工事の流れ</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <Image
          src="/32474709_m.jpg"
          alt="住宅街の外観"
          fill
          style={{objectFit: 'cover', zIndex: 0, opacity: 0.8}}
          priority
        />
        <div className={styles.heroContent}>
          <h1>株式会社大建設</h1>
          <p>未来のための空間を創造します</p>
          <a href="#contact" className={styles.ctaBtn}>お問い合わせ</a>
        </div>
      </section>

      {/* 概要 */}
      <section className={styles.section} id="about">
        <h2>概要</h2>
        <p className={styles.sectionLead}>
          株式会社大建設は、住まいづくりのプロフェッショナルとして、
          高品質な住宅建設、リフォーム、リノベーションを提供しています。
        </p>
        <div className={styles.statsRow}>
          <div className={styles.statBox}><span>25+</span><br />施工年数</div>
          <div className={styles.statBox}><span>500+</span><br />施工実績数</div>
          <div className={styles.statBox}><span>98%</span><br />顧客満足度</div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className={styles.section} id="services">
        <h2>サービス内容</h2>
        <div className={styles.servicesRow}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/service-new.jpg" alt="新築工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3>新築工事</h3>
            <ul>
              <li>戸建住宅・注文住宅</li>
              <li>共同住宅・ビル</li>
              <li>店舗・オフィス</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/service-interior.jpg" alt="内装工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3>内装工事</h3>
            <ul>
              <li>マンションリフォーム</li>
              <li>バス/キッチン</li>
              <li>バリアフリー</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/service-renovation.jpg" alt="リノベーション" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3>リノベーション</h3>
            <ul>
              <li>フルリノベーション</li>
              <li>耐震補強</li>
              <li>省エネ改修</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/service-repair.jpg" alt="修繕工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3>修繕工事</h3>
            <ul>
              <li>外壁・屋根</li>
              <li>水回り</li>
              <li>小規模修繕</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 工事までの流れ */}
      <section className={styles.sectionFlow} id="flow">
        <h2>工事までの流れ</h2>
        <p className={styles.sectionFlowLead}>
          お問い合わせから施工完了まで、お客様に安心してご依頼いただけるよう丁寧にサポートいたします。
        </p>
        <div className={styles.flowGrid}>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>1</span> <span role="img" aria-label="contact">💬</span></div>
            <div className={styles.flowTitle}>お問い合わせ</div>
            <div className={styles.flowDesc}>お電話またはウェブサイトからお気軽にご相談ください。ご要望をお聞かせください。</div>
          </div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>2</span> <span role="img" aria-label="hearing">📋</span></div>
            <div className={styles.flowTitle}>現地調査・ヒアリング</div>
            <div className={styles.flowDesc}>お手様のご希望や現場の状況を詳しく確認します。具体的なご要望をお聞かせください。</div>
          </div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>3</span> <span role="img" aria-label="plan">📝</span></div>
            <div className={styles.flowTitle}>プラン・お見積り</div>
            <div className={styles.flowDesc}>ご要望に沿ったプランと概算お見積りをご提案します。ご納得いただけるまでご調整いたします。</div>
          </div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>4</span> <span role="img" aria-label="contract">📑</span></div>
            <div className={styles.flowTitle}>ご契約</div>
            <div className={styles.flowDesc}>プランとお見積りにご納得いただけましたら、正式にご契約となります。詳細な工程表もご提示します。</div>
          </div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>5</span> <span role="img" aria-label="construction">🏠</span></div>
            <div className={styles.flowTitle}>施工・監理</div>
            <div className={styles.flowDesc}>経験豊富な職人による丁寧な施工を行います。定期的に進捗状況をご報告いたします。</div>
          </div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}><span>6</span> <span role="img" aria-label="handover">🔑</span></div>
            <div className={styles.flowTitle}>完成・お引き渡し</div>
            <div className={styles.flowDesc}>工事完了後、お客様立ち会いのもと検査を行い、問題なければお引き渡しをします。</div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className={styles.sectionContact} id="contact">
        <h2>お問い合わせ</h2>
        <div className={styles.contactRow}>
          <ContactForm />
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <div>📞 092-600-1194</div>
              <div>✉️ info@daikensetsu111.com</div>
              <div>🏢 〒818-0068 福岡県筑紫野市石崎3丁目33番地6</div>
            </div>
            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4535501802948!2d130.33485437614524!3d33.59353467333314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419310785c6c1f%3A0x6f8e026d2a787f5!2z44CSODE5LTAwMTMg56aP5bKh55yM56aP5bKh5biC6KW_5Yy65oSb5a6V5rWc77yS5LiB55uu77yR4oiS77yR77yUIOODnuODquODiuOCv-OCpuODs-OCr-ODrOOCouOCs-ODvOOCueODiO-8lOeVqumkqCA0LDgwMw!5e0!3m2!1sja!2sjp!4v1751264089444!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className={styles.footerModern}>
        <div>株式会社大建設</div>
        <div className={styles.footerLinks}>
          <a href="#">ホーム</a>
          <a href="#about">会社概要</a>
          <a href="#services">サービス</a>
          <a href="#flow">工事の流れ</a>
          <a href="#contact">お問い合わせ</a>
        </div>
        <div className={styles.footerContact}>
          <div>〒818-0068 福岡県筑紫野市石崎3丁目33番地6</div>
          <div>092 600 1194</div>
          <div>info@daikensetsu111.com</div>
        </div>
        <div className={styles.copyright}>
          © 2023 株式会社大建設 All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
