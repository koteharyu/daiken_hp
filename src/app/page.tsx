import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Script from "next/script";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "株式会社大建設",
    "alternateName": "ダイケンセツ",
    "description": "福岡県筑紫野市の株式会社大建設。屋根・外壁・内装・防水工事のリフォーム専門会社です。地域密着で丁寧な施工をお約束。",
    "url": "https://www.daikensetsu111.com",
    "telephone": "+81-92-600-1194",
    "email": "info@daikensetsu111.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "石崎３丁目３３番地６",
      "addressLocality": "筑紫野市",
      "addressRegion": "福岡県",
      "postalCode": "819-0013",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5904,
      "longitude": 130.3544
    },
    "image": "https://www.daikensetsu111.com/company-overview.png",
    "logo": "https://www.daikensetsu111.com/favicon.jpg",
    "priceRange": "￥￥-￥￥￥",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "福岡市"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "リフォームサービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "屋根工事",
            "description": "屋根葺き替え・カバー工事・葺き直し・塗装・板金工事"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "外壁工事",
            "description": "サイディング壁・モルタル壁・タイル壁・金属サイディング"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "内装工事",
            "description": "フルリノベーション・仕上げ工事・大工工事・各設備工事"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "防水工事",
            "description": "FRP防水・シート防水・ウレタン防水・アスファルト防水・屋根防水"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "上田大樹",
      "jobTitle": "代表取締役"
    },
    "foundingDate": "2025-06"
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.pageModern}>
      {/* ヘッダー */}

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


      {/* サービス内容 */}
      <section className={styles.section} id="services">
        <h2>サービス内容</h2>
        <div className={styles.servicesRow}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/roof.jpg" alt="屋根工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} priority />
            </div>
            <h3><span role="img" aria-label="checkbox">☑</span>屋根工事</h3>
            <ul>
              <li>屋根葺き替え工事</li>
              <li>屋根カバー工事</li>
              <li>屋根葺き直し工事</li>
              <li>屋根塗装工事</li>
              <li>屋根板金工事</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/exterior.jpg" alt="外壁工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3><span role="img" aria-label="checkbox">☑</span>外壁工事</h3>
            <ul>
              <li>サイディング壁</li>
              <li>モルタル壁</li>
              <li>タイル壁</li>
              <li>金属サイディング</li>
            </ul>
            <p style={{marginTop: '1em', fontSize: '0.95rem'}}>各種対応可能です！</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/interior.jpg" alt="内装工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} priority />
            </div>
            <h3><span role="img" aria-label="checkbox">☑</span>内装工事</h3>
            <ul>
              <li>フルリノベーション</li>
              <li>仕上げ工事<br /><span style={{fontSize: '0.9em'}}>(クロス、CF、フローリング等)</span></li>
              <li>大工工事<br /><span style={{fontSize: '0.9em'}}>(建具等)</span></li>
              <li>各設備工事<br /><span style={{fontSize: '0.9em'}}>(ユニットバス、キッチン、トイレ等)</span></li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImg}>
              <Image src="/waterproof.jpg" alt="防水工事" width={220} height={140} style={{borderRadius: '10px', objectFit: 'cover'}} />
            </div>
            <h3><span role="img" aria-label="checkbox">☑</span>防水工事</h3>
            <ul>
              <li>FRP防水</li>
              <li>シート防水</li>
              <li>ウレタン防水</li>
              <li>アスファルト防水</li>
              <li>屋根防水</li>
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
          <div className={`${styles.flowStep} ${styles.flowStepFull}`}>
            <div className={styles.flowIcon}><span>7</span> <span role="img" aria-label="inspection">🔍</span></div>
            <div className={styles.flowTitle}>定期点検</div>
            <div className={styles.flowDesc}>お引き渡し後、毎年年に一回施工箇所の点検へお伺いします。<br />その中で他に気になる点などございましたらお申し付けください</div>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className={`${styles.section} ${styles.greetingSection}`} id="greeting">
        <h2>代表挨拶</h2>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', fontSize: '1.08rem', color: '#475569', lineHeight: 2 }}>
          <p>株式会社大建設のホームページをご覧いただき、誠にありがとうございます。</p>
          <p>​当社は福岡県を拠点に、地域の皆様の住まいに関するお悩みやご希望に、真摯に向き合ってまいりました。</p>
          <p>リフォームとは、ただ古くなった部分を直すだけでなく、</p>
          <p>お客様の暮らしをより快適に、より豊かに変えていく</p>
          <p>大切な仕事だと考えています。</p>
          <br />
          <p>小さな修理から大規模な改装まで、一つひとつのご依頼に対し、丁寧な対応と確かな施工をお約束致します。また、お打ち合わせからアフターフォローまで、安心して任せて頂ける会社でありたいと日々努力しております。</p>
          <br />
          <p>これからも「誠実な仕事で生まれ育った街、福岡に貢献する」という信念を胸に、お客様との信頼関係を大切にしながら、</p>
          <p>一つでも多くの笑顔をつくれるよう努めてまいります。</p>
          <br />
          <p style={{ textAlign: 'right', marginTop: '2.5em', fontWeight: 'bold' }}>​代表取締役　　上田大樹</p>
        </div>
      </section>

      {/* 会社概要 */}
      <section className={styles.section} id="about">
        <h2>会社概要</h2>
        <div className={styles.aboutContent}>
          <h4>株式会社大建設（ダイケンセツ）</h4>
          <br />
          <p className={styles.aboutTagline}>【未来に繋ぐ、確かな住まいづくり】</p>
          <p className={styles.aboutDescription}>
            株式会社大建設は、地域に根付いたリフォーム専門会社として<br />
            屋根・外壁・内装・水回りを中心に住まいのあらゆるお悩みに対応しています。<br />
            お客様一人ひとつのライフスタイルに合わせた、最適なご提案と<br />
            丁寧な施工を大切にし、信頼されるパートナーとして、<br />
            快適な暮らしをサポートします。
          </p>
        </div>

        {/* 会社情報テーブル */}
        <div className={styles.companyTable} style={{ marginTop: '3rem' }}>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>会社名</div>
            <div className={styles.companyContent}>株式会社大建設</div>
          </div>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>設立</div>
            <div className={styles.companyContent}>2025年6月</div>
          </div>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>代表取締役</div>
            <div className={styles.companyContent}>上田大樹</div>
          </div>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>住所</div>
            <div className={styles.companyContent}>〒819-0013 福岡県福岡市西区愛宕浜2-1-14-803</div>
          </div>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>資本金</div>
            <div className={styles.companyContent}>1,000,000円</div>
          </div>
          <div className={styles.companyRow}>
            <div className={styles.companyLabel}>事業内容</div>
            <div className={styles.companyContent}>屋根/外壁工事、塗装/防水工事、内装/設備工事</div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className={styles.sectionContact} id="contact">
        <h2>お問い合わせ</h2>
        <ContactForm />
      </section>

      {/* フッター! */}
      <footer className={styles.footerModern}>
        <div>株式会社大建設<span style={{fontSize: '0.8em', marginLeft: '0.5em'}}>(だいけんせつ)</span></div>
        <div className={styles.footerLinks}>
          <a href="#">ホーム</a>
          <a href="#about">会社概要</a>
          <a href="#services">サービス</a>
          <a href="#flow">工事の流れ</a>
          <a href="#greeting">代表挨拶</a>
          <a href="#contact">お問い合わせ</a>
        </div>
        <div className={styles.footerContact}>
          <div>〒819-0013 福岡県福岡市西区愛宕浜2-1-14-803</div>
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
    </div>
    </>
  );
}
