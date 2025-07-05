import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
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

      {/* 概要 */}
      <section className={styles.section} id="about">
        <h2>会社概要</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <Image
              src="/company-overview.png"
              alt="会社概要のイメージ"
              width={450}
              height={300}
              style={{
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 4px 25px rgba(0,0,0,0.07)',
              }}
            />
          </div>
          <div className={styles.aboutText}>
            <p className={styles.sectionLead} style={{ textAlign: 'center', marginBottom: 0 }}>
            株式会社大建設（ダイケンセツ）<br />
          <strong>【未来に繋ぐ、確かな住まいづくり】</strong><br />
          株式会社大建設は、地域に根付いたリフォーム専門会社として<br />
          屋根・外壁・内装・水回りを中心に住まいのあらゆるお悩みに対応しています。<br />
          お客様一人ひとつのライフスタイルに合わせた、最適なご提案と<br />
          丁寧な施工を大切にし、信頼されるパートナーとして、<br />
          快適な暮らしをサポートします。
            </p>
          </div>
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

      {/* お問い合わせ */}
      <section className={styles.sectionContact} id="contact">
        <h2>お問い合わせ</h2>
        <div className={styles.contactRow}>
          <ContactForm />
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <div><a href="tel:0926001194">📞 092-600-1194</a></div>
              <div><a href="mailto:info@daikensetsu111.com">✉️ info@daikensetsu111.com</a></div>
              <div>🏢 〒818-0068 福岡県筑紫野市石崎3丁目33番地6</div>
            </div>
            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3659147225458!2d130.53103237614167!3d33.49185577337307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419be099b84cf7%3A0x1c8f760f5457a5bd!2z44CSODE4LTAwNjgg56aP5bKh55yM562R57Sr6YeO5biC55-z5bSO77yT5LiB55uu77yT77yT4oiS77yW!5e0!3m2!1sja!2sjp!4v1751274066209!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border:0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* フッター! */}
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
          <div><a href="tel:0926001194">092-600-1194</a></div>
          <div><a href="mailto:info@daikensetsu111.com">info@daikensetsu111.com</a></div>
        </div>
        <div className={styles.copyright}>
          © 2025 株式会社大建設 All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
