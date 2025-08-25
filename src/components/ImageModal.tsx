'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageModal.module.css';

interface ImageData {
  src: string;
  alt: string;
}

interface ImageModalProps {
  images: ImageData[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ images, currentIndex, isOpen, onClose }: ImageModalProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  if (!isOpen || !images.length) return null;

  const currentImage = images[activeIndex];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        {/* Previous Button */}
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          disabled={images.length <= 1}
        >
          ‹
        </button>

        {/* Next Button */}
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          disabled={images.length <= 1}
        >
          ›
        </button>

        <div className={styles.imageContainer}>
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={800}
            height={600}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Image Counter */}
        <div className={styles.imageCounter}>
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}