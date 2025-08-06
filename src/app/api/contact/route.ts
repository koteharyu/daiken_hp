import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // 入力値のバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'お名前、メールアドレス、お問い合わせ内容は必須項目です。' },
        { status: 400 }
      );
    }

    // Gmailのtransporter設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // メール内容の設定
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      subject: `【株式会社大建設】お問い合わせ - ${name}様`,
      html: `
        <h2>お問い合わせ内容</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold; width: 120px;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">電話番号</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">お問い合わせ内容</td>
            <td style="border: 1px solid #ddd; padding: 10px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          このメールは株式会社大建設のホームページのお問い合わせフォームから送信されました。
        </p>
      `,
    };

    // 自動返信メールの設定
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '【株式会社大建設】お問い合わせありがとうございました',
      html: `
        <h2>${name} 様</h2>
        <p>この度は株式会社大建設にお問い合わせいただき、誠にありがとうございます。</p>
        <p>お送りいただいたお問い合わせ内容を確認させていただき、担当者より3営業日以内にご連絡いたします。</p>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

        <h3>お問い合わせ内容（控え）</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold; width: 120px;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">電話番号</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">お問い合わせ内容</td>
            <td style="border: 1px solid #ddd; padding: 10px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

        <p style="color: #666;">
          <strong>株式会社大建設</strong><br>
          〒816-0068 福岡県筑紫野市石崎３丁目３３番地６<br>
          TEL: 092-600-1194<br>
          Email: info@daikensetsu111.com
        </p>

        <p style="color: #999; font-size: 12px;">
          ※このメールは自動送信です。このメールに返信いただいても対応できませんので、
          お急ぎの場合は上記電話番号までご連絡ください。
        </p>
      `,
    };

    // 管理者宛メール送信
    await transporter.sendMail(mailOptions);

    // 自動返信メール送信
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。ありがとうございます。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}
