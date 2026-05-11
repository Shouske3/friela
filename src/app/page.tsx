/**
 * LP（案A採用）：信頼・品質重視型
 * キャッチ：「プロが作る書類」の品質を、AIで。
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRIELA - プロ品質の書類を、AIで。| 見積書・請求書・契約書",
  description:
    "日本のビジネス慣習に精通したAIが、プロ品質の見積書・請求書・業務委託契約書・提案書を生成。フリーランス・副業向け買い切りツール。",
};

export default function LandingPage() {
  const trustPoints = [
    {
      label: "日本のビジネス慣習に完全準拠",
      detail: "インボイス制度・収入印紙・振込手数料負担など、日本特有のルールを自動で反映します",
    },
    {
      label: "クレーム・未払いを防ぐ文言",
      detail: "「支払期日を過ぎた場合の遅延損害金」「著作権の帰属」など、トラブル防止の条項を自動挿入",
    },
    {
      label: "業種別に最適化された文章",
      detail: "Web制作・エンジニアリング・コンサルティングなど、業種ごとの慣習に合わせた表現で生成",
    },
    {
      label: "データはブラウザの外に出ない",
      detail: "入力情報はサーバーに一切送信されません。機密性の高い案件でも安心して使えます",
    },
  ];

  const comparison = [
    { item: "見積書", manual: "30〜60分", friela: "30秒" },
    { item: "請求書（毎月）", manual: "15〜30分/月", friela: "30秒/月" },
    { item: "業務委託契約書", manual: "2〜4時間 or 外注3万円〜", friela: "1分" },
    { item: "提案書", manual: "4〜8時間", friela: "3分" },
  ];

  const faqs = [
    {
      q: "Claude APIキーはどこで取得できますか？",
      a: "Anthropic Console（console.anthropic.com）で無料アカウントを作成後、APIキーを発行できます。発行は5分程度で完了します。",
    },
    {
      q: "1書類あたりのAPI費用はいくらですか？",
      a: "Claude APIの料金体系により、1書類あたり約2〜5円程度です。月100件生成しても約200〜500円と非常に安価です。",
    },
    {
      q: "入力した情報は保存されますか？",
      a: "いいえ。入力情報はブラウザ内のみで処理され、当社サーバーには一切保存されません。APIキーもお使いのブラウザのローカルストレージにのみ保存されます。",
    },
    {
      q: "生成した書類はそのまま使えますか？",
      a: "はい。日本のビジネス慣習に沿ったプロンプトで生成するため、そのまま使用可能です。ただし金額・日付などの重要事項は必ずご確認ください。",
    },
    {
      q: "買い切りとは？月額費用はかかりますか？",
      a: "FRIELAの利用料は買い切りです（¥9,800〜）。一度購入すればずっと使えます。月額費用は一切かかりません（Claude API料金は別途）。",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black text-gray-900 tracking-tight">FRIELA</span>
          <div className="flex items-center gap-6">
            <a href="#why" className="text-sm text-gray-500 hover:text-gray-900">品質の理由</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">料金</a>
            <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900">FAQ</a>
            <Link href="/app" className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              無料で試す
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 rounded-full px-4 py-1 text-xs font-semibold mb-8">
            🏅 日本のフリーランス向け AI書類ツール
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            「プロが作る書類」の
            <br />
            <span className="text-yellow-400">品質</span>を、AIで。
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
            日本のビジネス慣習・インボイス制度・トラブル防止文言まで。
            フリーランスが本当に使える書類を、30秒で生成します。
          </p>
          <p className="text-gray-400 mb-10 text-sm">
            ※ 生成した書類の内容はサーバーに保存されません。機密案件でも安心。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/app"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-black rounded-xl hover:bg-yellow-300 transition-colors text-lg"
            >
              無料で品質を確かめる →
            </Link>
            <a
              href="#why"
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-400 transition-colors text-lg"
            >
              品質の理由を見る
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">登録不要・クレカ不要 / 買い切り¥9,800〜</p>
        </div>
      </section>

      {/* 時間比較テーブル */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">
            書類作業にかかっていた時間を取り戻す
          </h2>
          <p className="text-gray-500 text-center mb-8">時給3,000円のフリーランサーが月10件対応する場合、年間換算で約72万円分の時間</p>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-3 font-semibold">書類の種類</th>
                  <th className="text-center px-6 py-3 font-semibold">手作業</th>
                  <th className="text-center px-6 py-3 font-semibold text-yellow-400">FRIELA</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                    <td className="px-6 py-4 text-center text-red-500 line-through">{row.manual}</td>
                    <td className="px-6 py-4 text-center font-black text-green-600">{row.friela}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 品質の理由 */}
      <section id="why" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">なぜFRIELAの書類は「使える」のか</h2>
          <p className="text-gray-500 text-center mb-12">テンプレートを埋めるのではなく、文脈を理解して生成します</p>
          <div className="grid md:grid-cols-2 gap-6">
            {trustPoints.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-gray-900 transition-colors">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-sm font-black mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black text-gray-900 mb-2">{p.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-2">買い切り。ずっと使える。</h2>
          <p className="text-gray-400 mb-12">月額サブスクは一切ありません</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-600 rounded-2xl p-8">
              <div className="text-gray-400 text-sm font-semibold mb-2">ベーシック</div>
              <div className="text-5xl font-black text-white mb-1">¥9,800</div>
              <div className="text-gray-500 text-sm mb-8">買い切り / 永久利用</div>
              <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left">
                {["全4種類の書類生成", "生成回数・無制限", "PDF保存", "永久アップデート無料"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/basic" className="block w-full py-3 border border-gray-500 text-white font-semibold rounded-xl hover:border-white transition-colors">
                購入する
              </a>
            </div>
            <div className="border-2 border-yellow-400 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-black px-4 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-yellow-400 text-sm font-semibold mb-2">プロ</div>
              <div className="text-5xl font-black text-white mb-1">¥14,800</div>
              <div className="text-gray-500 text-sm mb-8">買い切り / 永久利用</div>
              <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left">
                {["ベーシックの全機能", "カスタムテンプレート保存", "複数APIキー管理", "優先サポート", "新機能の優先アクセス"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/pro" className="block w-full py-3 bg-yellow-400 text-gray-900 font-black rounded-xl hover:bg-yellow-300 transition-colors">
                購入する
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">🔒 Lemon Squeezy決済 / 30日間返金保証</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Q. {faq.q}</h3>
                <p className="text-sm text-gray-600">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-4">まず品質を確かめてください</h2>
          <p className="text-gray-500 mb-8">登録不要・クレカ不要。Claude APIキーがあれば今すぐ試せます。</p>
          <Link href="/app" className="inline-block px-10 py-4 bg-gray-900 text-white font-black rounded-xl hover:bg-gray-700 transition-colors text-lg">
            無料で書類を生成する →
          </Link>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-100 text-gray-400 text-sm text-center">
        <p>© 2026 FRIELA. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          <Link href="/terms" className="hover:text-gray-700">利用規約</Link>
          <Link href="/privacy" className="hover:text-gray-700">プライバシーポリシー</Link>
          <Link href="/legal" className="hover:text-gray-700">特定商取引法に基づく表示</Link>
          <a href="mailto:support@friela.app" className="hover:text-gray-700">サポート</a>
        </div>
      </footer>
    </div>
  );
}
