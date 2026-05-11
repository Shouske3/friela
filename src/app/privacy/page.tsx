import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | FRIELA",
};

const CONTACT_EMAIL = "support@friela.app"; // ← 実際のメールアドレスに変更

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. 事業者情報",
      content: (
        <p>
          本プライバシーポリシーは、FRIELA（以下「当サービス」）を運営する事業者（特定商取引法に基づく表示をご参照ください）が、
          お客様の個人情報をどのように取り扱うかを説明するものです。
        </p>
      ),
    },
    {
      title: "2. 収集する情報",
      content: (
        <div className="space-y-3">
          <p>当サービスが収集・処理する情報は以下のとおりです。</p>
          <div>
            <p className="font-semibold text-gray-700 mb-1">【収集しない情報】</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600">
              <li>書類作成フォームへの入力情報（クライアント名・住所・金額等）</li>
              <li>Claude APIキー</li>
              <li>生成された書類の内容</li>
            </ul>
            <p className="text-sm text-gray-500 mt-1">
              ※ これらはお客様のブラウザ内のみで処理され、当サービスのサーバーには一切送信・保存されません。
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">【収集する情報】</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600">
              <li>
                <strong>購入情報</strong>：お名前・メールアドレス・支払情報
                （決済代行業者 Lemon Squeezy LLC が管理。当サービスはカード番号等を保持しません）
              </li>
              <li>
                <strong>アクセスログ</strong>：IPアドレス・ブラウザ種別・アクセス日時
                （Vercel Inc. によりサーバーログとして自動収集）
              </li>
              <li>
                <strong>ローカルストレージ</strong>：Claude APIキー
                （お客様のデバイス内にのみ保存。当サービスは参照しません）
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "3. 情報の利用目的",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>ライセンスキーの発行・送付</li>
          <li>購入確認・領収書の送付</li>
          <li>サポート対応</li>
          <li>重要なサービス変更のお知らせ</li>
          <li>サービスの改善・障害対応</li>
        </ul>
      ),
    },
    {
      title: "4. 第三者への情報提供",
      content: (
        <div className="space-y-2 text-gray-600">
          <p>当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供しません。</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護のために必要な場合</li>
          </ul>
          <p className="mt-3 font-semibold text-gray-700">利用している外部サービス：</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Lemon Squeezy LLC</strong>（決済処理）
              ：<a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">プライバシーポリシー</a>
            </li>
            <li>
              <strong>Vercel Inc.</strong>（ホスティング）
              ：<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">プライバシーポリシー</a>
            </li>
            <li>
              <strong>Anthropic PBC</strong>（AI処理 ※お客様のAPIキーで直接通信）
              ：<a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">プライバシーポリシー</a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Cookieの使用",
      content: (
        <div className="space-y-2 text-gray-600">
          <p>当サービスは以下の目的でCookieおよびローカルストレージを使用します。</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Claude APIキーの保存（ブラウザのローカルストレージ）</li>
            <li>Vercelによるアクセス解析（匿名データ）</li>
          </ul>
          <p className="mt-2">
            ブラウザの設定でCookieを無効にすることができますが、一部機能が使用できなくなる場合があります。
          </p>
        </div>
      ),
    },
    {
      title: "6. 個人情報の管理・保管期間",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>購入情報：法令に定める期間（最長7年）</li>
          <li>サポートメール：対応完了後2年</li>
          <li>アクセスログ：90日間（Vercel標準）</li>
        </ul>
      ),
    },
    {
      title: "7. お客様の権利",
      content: (
        <div className="space-y-2 text-gray-600">
          <p>お客様は以下の権利を有します。</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>保有する個人情報の開示請求</li>
            <li>個人情報の訂正・追加・削除の請求</li>
            <li>個人情報の利用停止・消去の請求</li>
          </ul>
          <p className="mt-2">
            上記のご請求は{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            までご連絡ください。ご本人確認の上、合理的な期間内に対応いたします。
          </p>
        </div>
      ),
    },
    {
      title: "8. 未成年者について",
      content: (
        <p className="text-gray-600">
          当サービスは18歳以上の方を対象としています。
          18歳未満の方がご利用になる場合は、保護者の同意を得てください。
        </p>
      ),
    },
    {
      title: "9. プライバシーポリシーの変更",
      content: (
        <p className="text-gray-600">
          当サービスは、必要に応じて本ポリシーを変更することがあります。
          重要な変更がある場合は、本ページおよびサービス上でお知らせします。
          変更後も継続してサービスをご利用いただいた場合、変更後のポリシーに同意したとみなします。
        </p>
      ),
    },
    {
      title: "10. お問い合わせ",
      content: (
        <p className="text-gray-600">
          個人情報の取り扱いに関するご質問・ご要望は、
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline mx-1">
            {CONTACT_EMAIL}
          </a>
          までご連絡ください。
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 text-sm">
            ← トップページへ戻る
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
        <p className="text-sm text-gray-500 mb-8">最終更新日: 2026年5月8日</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="text-sm leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
