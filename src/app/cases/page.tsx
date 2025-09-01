'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cases } from '@/data/casesData';
import ImageModal from '@/components/ImageModal';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface ImageData {
  src: string;
  alt: string;
}

export default function CasesPage() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; currentIndex: number }>({
    isOpen: false,
    currentIndex: 0
  });

  // すべての画像を1つの配列に統合（before -> afterの順）
  const allImages: ImageData[] = [];
  cases.forEach((caseItem) => {
    allImages.push(
      { src: caseItem.beforeSrc, alt: `${caseItem.title} - 施工前` },
      { src: caseItem.afterSrc, alt: `${caseItem.title} - 施工後` }
    );
  });

  const openModal = (src: string) => {
    const imageIndex = allImages.findIndex(img => img.src === src);
    setModalState({ isOpen: true, currentIndex: imageIndex });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, currentIndex: 0 });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>施工事例</h1>
          <p className={styles.description}>
            これまでに手がけた施工事例をご紹介します。施工前/施工後でその変化をご確認ください。
          </p>
        </div>


        {/* 施工事例グリッド */}
        <div className={styles.casesGrid}>
          {cases.map((caseItem, index) => (
            <div key={index} className={styles.caseCard}>
              <h3 className={styles.caseTitle}>{caseItem.title}</h3>
              <div className={styles.beforeAfter}>
                <div className={styles.beforeContainer}>
                  <div className={styles.beforeLabel}>施工前</div>
                  <Image
                    src={caseItem.beforeSrc}
                    alt={`${caseItem.title} - 施工前`}
                    width={300}
                    height={200}
                    className={styles.caseImage}
                    onClick={() => openModal(caseItem.beforeSrc)}
                  />
                </div>
                <div className={styles.afterContainer}>
                  <div className={styles.afterLabel}>施工後</div>
                  <Image
                    src={caseItem.afterSrc}
                    alt={`${caseItem.title} - 施工後`}
                    width={300}
                    height={200}
                    className={styles.caseImage}
                    onClick={() => openModal(caseItem.afterSrc)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* モーダル */}
        <ImageModal
          isOpen={modalState.isOpen}
          images={allImages}
          currentIndex={modalState.currentIndex}
          onClose={closeModal}
        />
      </div>
      
      {/* フッター */}
      <Footer />
    </>
  );
}