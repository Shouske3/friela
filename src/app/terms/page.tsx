import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | FRIELA",
};

const CONTACT_EMAIL = "support@friela.app"; // ← 実際のメールアドレスに変更

export default function TermsPage() {
  const sections = [
    {
      title: "第1条（適用）",
      content: (
        <p>
          本利用規約（以下「本規約」）は、FRIELAを運営する事業者（以下「当社」）が提供する
          AIによる書類生成サービス「FRIELA」（以下「本サービス」）の利用条件を定めるものです。
          お客様が本サービスを利用した時点で、本規約に同意したものとみなします。
        </p>
      ),
    },
    {
      title: "第2条（ライセンスの付与）",
      content: (
        <div className="space-y-2">
          <p>
            当社はお客様に対し、本規約に従い、本サービスを個人的・非独占的・譲渡不可・
            サブライセンス不可の形で利用する権利を付与します。
          </p>
          <ul className="list-disc ml-5 space-y-1 text-gray-600">
            <li>ライセンスキーは購入者本人のみが使用できます</li>
            <li>ライセンスキーの第三者への譲渡・転売・共有は禁止します</li>
            <li>1ライセンスキーにつき、最大3デバイスまでご利用いただけます</li>
          </ul>
        </div>
      ),
    },
    {
      title: "第3条（免責事項）【重要】",
      content: (
        <div className="space-y-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="font-bold text-yellow-800">以下の点について必ずご確認ください。</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              <strong>法的効力の不保証</strong>：本サービスが生成する書類（業務委託契約書を含む）は、
              AIによる自動生成であり、法的アドバイスを提供するものではありません。
              生成された書類の法的効力・有効性について、当社は一切保証しません。
            </li>
            <li>
              <strong>弁護士確認の推奨</strong>：法的効力を求める重要な契約書については、
              必ず弁護士または行政書士にご確認ください。
            </li>
            <li>
              <strong>内容の確認義務</strong>：生成された書類の内容（金額・日付・氏名等）は、
              必ずお客様ご自身で確認の上ご使用ください。
              内容の誤りによる損害について、当社は責任を負いません。
            </li>
            <li>
              <strong>Claude API</strong>：本サービスはAnthropicのClaude APIを使用します。
              APIの仕様変更・障害・サービス終了によりサービスが提供できなくなった場合、
              当社は責任を負いません。
            </li>
            <li>
              <strong>損害賠償の上限</strong>：当社の責任が認められる場合においても、
              損害賠償の上限はお客様が当社に支払った代金の額とします。
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "第4条（禁止事項）",
      content: (
        <div className="space-y-2">
          <p>お客様は以下の行為を行ってはなりません。</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-600">
            <li>詐欺・虚偽の書類作成への使用</li>
            <li>他者を欺く目的での書類作成</li>
            <li>法令・公序良俗に反する目的での使用</li>
            <li>本サービスのリバースエンジニアリング・逆コンパイル</li>
            <li>ライセンスキーの転売・共有・配布</li>
            <li>本サービスを利用した競合サービスの開発</li>
            <li>当社または第三者の知的財産権を侵害する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </div>
      ),
    },
    {
      title: "第5条（知的財産権）",
      content: (
        <div className="space-y-2 text-gray-600">
          <p>
            本サービスのシステム・デザイン・プロンプト等の知的財産権は当社に帰属します。
          </p>
          <p>
            お客様が本サービスを通じて生成した書類は、お客様が自由にご使用いただけます。
            当社は生成書類に対していかなる権利も主張しません。
          </p>
          <p>
            なお、AIが生成したコンテンツの著作権については法的に未確定な部分があります。
            重要な用途での使用の際はご留意ください。
          </p>
        </div>
      ),
    },
    {
      title: "第6条（料金・支払い）",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>本サービスの利用料金は買い切り制です。継続的な課金は発生しません。</li>
          <li>Claude API の利用料金はお客様のご負担となります（Anthropic社への直接支払い）。</li>
          <li>価格は予告なく変更する場合がありますが、購入済みのライセンスには影響しません。</li>
        </ul>
      ),
    },
    {
      title: "第7条（返金ポリシー）",
      content: (
        <div className="space-y-2 text-gray-600">
          <p>
            デジタルコンテンツの性質上、原則として返金はお受けしておりません。
            ただし、以下の場合は購入から<strong>30日以内</strong>に限り返金対応いたします。
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>当社の責に帰すべき技術的不具合により本サービスが全く使用できない場合</li>
            <li>商品説明と著しく異なる機能・品質である場合</li>
          </ul>
          <p className="mt-2">
            返金をご希望の場合は購入から30日以内に{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            にご連絡ください。
          </p>
        </div>
      ),
    },
    {
      title: "第8条（サービスの変更・終了）",
      content: (
        <p className="text-gray-600">
          当社は、事前通知なしに本サービスの内容を変更・追加・中止することがあります。
          本サービスを終了する場合は、可能な限り事前にお知らせします。
          サービス終了による返金は原則として行いません。
        </p>
      ),
    },
    {
      title: "第9条（利用規約の変更）",
      content: (
        <p className="text-gray-600">
          当社は、必要に応じて本規約を変更できるものとします。
          変更後も継続して本サービスをご利用の場合、変更後の規約に同意したとみなします。
          重要な変更がある場合は、本サービス上または電子メールにてお知らせします。
        </p>
      ),
    },
    {
      title: "第10条（準拠法・管轄裁判所）",
      content: (
        <p className="text-gray-600">
          本規約は日本法に準拠します。本規約に関する紛争については、
          当社所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      ),
    },
    {
      title: "第11条（お問い合わせ）",
      content: (
        <p className="text-gray-600">
          本規約に関するご質問は、
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">利用規約</h1>
        <p className="text-sm text-gray-500 mb-8">最終更新日: 2026年5月8日</p>

        <div className="space-y-6">
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
