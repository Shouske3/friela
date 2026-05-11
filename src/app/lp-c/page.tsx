/**
 * LP案C：コスト削減重視型
 * キャッチ：「書類外注費、もう払わなくていい」
 * ターゲット：外注費を払っている・時給換算意識が高い・コスト削減に敏感なフリーランス
 * 色調：オレンジ・アンバー（お金・節約・実益）
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRIELA - 書類外注費をゼロにするAIツール | 見積書・請求書・契約書",
  description:
    "書類外注に月1〜5万円払っていませんか？FRIELAなら買い切り¥9,800で無制限生成。外注費を完全にゼロにします。",
};

export default function LpC() {
  const costComparison = [
    {
      label: "弁護士に契約書作成を依頼",
      cost: "¥30,000〜100,000 / 件",
      friela: "¥0（生成回数無制限）",
    },
    {
      label: "ランサーズで見積書テンプレ作成を依頼",
      cost: "¥5,000〜30,000 / 件",
      friela: "¥0（生成回数無制限）",
    },
    {
      label: "クラウド会計ソフト（書類機能付き）",
      cost: "¥1,980〜3,980 / 月（年間¥23,760〜）",
      friela: "買い切り¥9,800のみ",
    },
    {
      label: "自分で作成（時給3,000円換算）",
      cost: "書類1件30〜120分 = ¥1,500〜6,000 / 件",
      friela: "30秒 = 約¥25（自分の時給換算）",
    },
  ];

  const calcItems = [
    { label: "月の書類作成件数", value: "10件", highlight: false },
    { label: "1件あたりにかかる時間（従来）", value: "平均60分", highlight: false },
    { label: "月の書類作業時間（従来）", value: "10時間", highlight: false },
    { label: "時給換算（仮に¥3,000/h）", value: "¥30,000/月", highlight: false },
    { label: "FRIELAに移行後の書類作業時間", value: "約5分/月", highlight: false },
    { label: "節約できる時間", value: "約9時間55分/月", highlight: true },
    { label: "節約できるお金（時給換算）", value: "¥29,750/月 = 年間¥357,000", highlight: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black text-gray-900">FRIELA</span>
          <Link href="/app" className="px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg hover:bg-orange-400 transition-colors">
            無料で試す →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            💰 フリーランスの書類コストを完全にゼロにする
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            書類外注費、
            <br />
            <span className="text-orange-500">もう払わなくていい</span>
          </h1>

          {/* 大きな数字 */}
          <div className="my-8 bg-white rounded-3xl p-8 shadow-sm border border-orange-100 max-w-2xl mx-auto">
            <div className="text-sm font-bold text-gray-400 mb-2">FRIELAを1年使ったとき</div>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-red-500">¥23,760</div>
                <div className="text-xs text-gray-400 mt-1">会計ソフト年間費用（節約）</div>
              </div>
              <div className="text-3xl text-gray-300">+</div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500">時間も</div>
                <div className="text-xs text-gray-400 mt-1">書類作業 → 収益活動へ</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-orange-100">
              <div className="text-sm text-gray-500">FRIELAの費用：<strong className="text-gray-900">買い切り¥9,800のみ</strong></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app"
              className="px-8 py-4 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-400 transition-colors text-xl"
            >
              無料で今すぐ確かめる →
            </Link>
            <a href="#compare" className="px-8 py-4 border-2 border-orange-200 text-orange-600 font-semibold rounded-xl hover:border-orange-400 transition-colors text-lg">
              コスト比較を見る
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">登録不要・クレカ不要で今すぐ試せます</p>
        </div>
      </section>

      {/* Cost comparison table */}
      <section id="compare" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">従来の書類コストと比べてみる</h2>
          <p className="text-gray-500 text-center mb-8">いくら払っているか、正直に計算してみてください</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-gray-500 font-semibold">書類の方法</th>
                  <th className="text-center px-6 py-4 text-red-500 font-semibold">従来のコスト</th>
                  <th className="text-center px-6 py-4 text-orange-500 font-semibold">FRIELAのコスト</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center text-red-500 font-semibold">{row.cost}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">{row.friela}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">あなたの節約額を計算する</h2>
          <p className="text-gray-500 text-center mb-8">月10件・時給¥3,000のフリーランサーの場合</p>
          <div className="bg-white rounded-2xl border border-orange-200 overflow-hidden">
            {calcItems.map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 ${
                  item.highlight
                    ? "bg-orange-500 text-white"
                    : i % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                } border-b border-orange-100`}
              >
                <span className={`text-sm font-medium ${item.highlight ? "text-orange-100" : "text-gray-600"}`}>
                  {item.label}
                </span>
                <span className={`font-black text-lg ${item.highlight ? "text-white" : "text-gray-900"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">※ 個人の使用状況により異なります</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10">コストゼロで使える理由</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔑",
                title: "自分のAPIキーを使う",
                desc: "Claude APIキーはあなた自身のもの。当社への月額費用は一切かかりません。1書類あたり約2〜5円のみ。",
              },
              {
                emoji: "🛒",
                title: "買い切りで永久利用",
                desc: "¥9,800の一回払いで、ずっと使えます。サブスクと違って、忘れた頃に請求が来ることがありません。",
              },
              {
                emoji: "♾️",
                title: "生成回数は無制限",
                desc: "月1件でも1,000件でも追加費用ゼロ。使えば使うほど元が取れます。",
              },
            ].map((f) => (
              <div key={f.title} className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="font-black text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-2">投資対効果は1ヶ月で回収</h2>
          <p className="text-gray-400 mb-12">月1件の外注費節約で元が取れる料金設定</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 rounded-2xl p-8">
              <div className="text-gray-400 text-sm font-semibold mb-2">ベーシック</div>
              <div className="text-5xl font-black mb-1">¥9,800</div>
              <div className="text-gray-500 text-xs mb-1">買い切り / 永久利用</div>
              <div className="text-orange-400 text-xs font-bold mb-6">= 外注1件分以下</div>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                {["全4種類の書類生成", "生成回数・無制限", "PDF保存", "永久アップデート無料"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-orange-400">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/basic" className="block w-full py-3 border border-gray-600 text-white font-bold rounded-xl hover:border-orange-400 transition-colors">
                購入する
              </a>
            </div>
            <div className="border-2 border-orange-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black px-4 py-1 rounded-full">コスパ最強</div>
              <div className="text-orange-400 text-sm font-semibold mb-2">プロ</div>
              <div className="text-5xl font-black mb-1">¥14,800</div>
              <div className="text-gray-500 text-xs mb-1">買い切り / 永久利用</div>
              <div className="text-orange-400 text-xs font-bold mb-6">= 会計ソフト8ヶ月分以下</div>
              <ul className="text-sm text-gray-300 space-y-2 mb-8 text-left">
                {["ベーシックの全機能", "カスタムテンプレート保存", "複数APIキー管理", "優先サポート", "新機能の優先アクセス"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-orange-400">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/pro" className="block w-full py-3 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-400 transition-colors">
                購入する
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">🔒 30日間返金保証 / Lemon Squeezy決済</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-4">まず無料で、コストゼロを体験する</h2>
          <p className="text-gray-500 mb-8">Claude APIキーがあれば登録不要で今すぐ試せます。</p>
          <Link href="/app" className="inline-block px-10 py-4 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-400 transition-colors text-xl">
            無料で書類を生成する →
          </Link>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-sm text-center">
        <p>© 2026 FRIELA. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          <Link href="/terms" className="hover:text-white">利用規約</Link>
          <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
          <Link href="/legal" className="hover:text-white">特定商取引法に基づく表示</Link>
          <a href="mailto:support@friela.app" className="hover:text-white">サポート</a>
        </div>
      </footer>
    </div>
  );
}
