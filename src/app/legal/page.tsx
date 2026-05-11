import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | FRIELA",
};

// ⚠️ 以下の【要変更】箇所を実際の情報に書き換えてください
const SELLER_INFO = {
  name: "【要変更：氏名または屋号】",           // 例: 山田太郎 / やまだデザイン事務所
  address: "【要変更：住所】",                  // 例: 東京都新宿区〇〇1-2-3
  phone: "【要変更：電話番号】",                 // 例: 090-1234-5678（※公開したくない場合は「請求があれば速やかに開示」でも可）
  email: "support@friela.app",                 // ← 実際のサポートメールに変更
  url: "https://friela.vercel.app",
};

export default function LegalPage() {
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
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          特定商取引法に基づく表示
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {[
                { label: "販売事業者", value: SELLER_INFO.name },
                {
                  label: "所在地",
                  value: (
                    <>
                      {SELLER_INFO.address}
                      <br />
                      <span className="text-gray-500 text-xs">
                        ※ 請求があれば遅滞なく開示いたします
                      </span>
                    </>
                  ),
                },
                {
                  label: "電話番号",
                  value: (
                    <>
                      {SELLER_INFO.phone}
                      <br />
                      <span className="text-gray-500 text-xs">
                        ※ お問い合わせはメールにてお願いいたします
                      </span>
                    </>
                  ),
                },
                {
                  label: "メールアドレス",
                  value: (
                    <a
                      href={`mailto:${SELLER_INFO.email}`}
                      className="text-indigo-600 hover:underline"
                    >
                      {SELLER_INFO.email}
                    </a>
                  ),
                },
                { label: "販売URL", value: SELLER_INFO.url },
                {
                  label: "販売価格",
                  value: (
                    <>
                      ベーシックプラン: ¥9,800（税込）
                      <br />
                      プロプラン: ¥14,800（税込）
                      <br />
                      <span className="text-gray-500 text-xs">
                        ※ Claude API利用料は別途お客様のご負担となります
                      </span>
                    </>
                  ),
                },
                {
                  label: "販売価格以外の必要料金",
                  value:
                    "Anthropic社のClaude API利用料（お客様ご自身のAPIキーにて直接ご負担いただきます）。当社への追加費用はありません。",
                },
                {
                  label: "支払方法",
                  value: "クレジットカード（Visa / Mastercard / American Express）、PayPal",
                },
                {
                  label: "支払時期",
                  value: "購入手続き完了時にご請求いたします。",
                },
                {
                  label: "サービス提供時期",
                  value:
                    "お支払い完了後、即時にライセンスキーをメールにてお送りします。ライセンスキー入力後すぐにご利用いただけます。",
                },
                {
                  label: "返品・キャンセル",
                  value: (
                    <>
                      <strong>デジタルコンテンツの性質上、原則として返金・キャンセルはお受けしておりません。</strong>
                      <br />
                      ただし、以下の場合は購入から30日以内に限り返金対応いたします。
                      <ul className="list-disc ml-4 mt-2 space-y-1 text-gray-600">
                        <li>ツールが正常に動作しない技術的不具合が確認された場合</li>
                        <li>商品説明と著しく異なる場合</li>
                      </ul>
                      <br />
                      返金をご希望の場合は{" "}
                      <a href={`mailto:${SELLER_INFO.email}`} className="text-indigo-600 hover:underline">
                        {SELLER_INFO.email}
                      </a>{" "}
                      までご連絡ください。
                    </>
                  ),
                },
                {
                  label: "動作環境",
                  value:
                    "インターネット接続環境、Webブラウザ（Chrome / Firefox / Safari / Edge 最新版推奨）、Anthropic社のClaude APIキー（console.anthropic.com にて取得）",
                },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <th className="text-left px-5 py-4 text-gray-600 font-semibold w-40 border-b border-gray-100 align-top">
                    {row.label}
                  </th>
                  <td className="px-5 py-4 text-gray-800 border-b border-gray-100 leading-relaxed">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          最終更新日: 2026年5月8日
        </p>
      </main>
    </div>
  );
}
