'use client';

import { useState } from 'react';
import styles from '../app/page.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'エラーが発生しました。');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('ネットワークエラーが発生しました。しばらく時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          <p>✅ お問い合わせを受け付けました。</p>
          <p>ご入力いただいたメールアドレスに確認メールをお送りしました。</p>
          <p>担当者より3営業日以内にご連絡いたします。</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          <p>❌ {errorMessage}</p>
        </div>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="お名前"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder="電話番号"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          placeholder="お問い合わせ内容"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={5}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={isSubmitting ? styles.submitting : ''}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </form>
    </div>
  );
}
