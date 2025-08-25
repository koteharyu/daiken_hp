'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import styles from '../app/page.module.css';

interface ImageData {
  src: string;
  alt: string;
}

export default function CasesSection() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; currentIndex: number }>({
    isOpen: false,
    currentIndex: 0
  });

  const cases = [
    {
      title: '屋根塗装工事',
      beforeSrc: '/case1-before.jpg',
      afterSrc: '/case1-after.jpg'
    },
    {
      title: '屋根塗装工事',
      beforeSrc: '/case3-before.jpg',
      afterSrc: '/case3-after.jpg'
    },
    {
      title: '雨戸塗装工事',
      beforeSrc: '/case4-before.jpg',
      afterSrc: '/case4-after.jpg'
    },
    {
      title: '浴室リフォーム',
      beforeSrc: '/case5-before.jpg',
      afterSrc: '/case5-after.jpg'
    },
    {
      title: '浴室ドア交換',
      beforeSrc: '/case2-before.jpg',
      afterSrc: '/case2-after.jpg'
    }
  ];

  // すべての画像を1つの配列に統合（before -> afterの順）
  const allImages: ImageData[] = [];
  cases.forEach((caseItem) => {
    allImages.push(
      { src: caseItem.beforeSrc, alt: `${caseItem.title} - 施工前` },
      { src: caseItem.afterSrc, alt: `${caseItem.title} - 施工後` }
    );
  });

  const openModal = (src: string, alt: string) => {
    const imageIndex = allImages.findIndex(img => img.src === src);
    setModalState({ isOpen: true, currentIndex: imageIndex });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, currentIndex: 0 });
  };

  return (
    <>
      <section className={styles.section} id="cases">
        <h2>施工事例</h2>
        <p className={styles.sectionLead}>
          これまでに手がけた施工事例をご紹介します。施工前/施工後でその変化をご確認ください。
        </p>
        <div className={styles.casesGrid}>
          {cases.map((caseItem, index) => (
            <div key={index} className={styles.caseCard}>
              <h3>{caseItem.title}</h3>
              <div className={styles.beforeAfter}>
                <div className={styles.beforeContainer}>
                  <div className={styles.beforeLabel}>施工前</div>
                  <Image
                    src={caseItem.beforeSrc}
                    alt={`${caseItem.title} - 施工前`}
                    width={300}
                    height={200}
                    style={{borderRadius: '8px', objectFit: 'cover', cursor: 'pointer'}}
                    onClick={() => openModal(caseItem.beforeSrc, `${caseItem.title} - 施工前`)}
                  />
                </div>
                <div className={styles.afterContainer}>
                  <div className={styles.afterLabel}>施工後</div>
                  <Image
                    src={caseItem.afterSrc}
                    alt={`${caseItem.title} - 施工後`}
                    width={300}
                    height={200}
                    style={{borderRadius: '8px', objectFit: 'cover', cursor: 'pointer'}}
                    onClick={() => openModal(caseItem.afterSrc, `${caseItem.title} - 施工後`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImageModal
        images={allImages}
        currentIndex={modalState.currentIndex}
        isOpen={modalState.isOpen}
        onClose={closeModal}
      />
    </>
  );
}