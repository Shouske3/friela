/**
 * LP案B：スピード・手軽さ重視型
 * キャッチ：「書類作業、今日で終わりにしませんか？」
 * ターゲット：副業初心者・とにかく面倒くさい人・忙しいフリーランス
 * 色調：明るいグリーン・ホワイト（軽快・手軽・即効性）
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRIELA - 書類作業を今日で終わりにする | 30秒でAI生成",
  description:
    "見積書・請求書・契約書を30秒で。登録不要・月額ゼロ・即使える。副業・フリーランス向けAI書類ツール。",
};

export default function LpB() {
  const steps = [
    { num: "1", emoji: "📋", title: "書類の種類を選ぶ", sub: "4種類から1クリックで選択" },
    { num: "2", emoji: "✏️", title: "情報を入力する", sub: "名前・金額・業務内容。2〜3分で入力完了" },
    { num: "3", emoji: "⚡", title: "ボタンを押す", sub: "30秒でプロ品質の書類が完成" },
    { num: "4", emoji: "📄", title: "PDF保存して送る", sub: "ブラウザの印刷機能でそのまま保存" },
  ];

  const voices = [
    {
      name: "Webデザイナー・田中さん（32歳）",
      text: "契約書を毎回ゼロから書いてたのが、今は1分で終わります。クライアントへの提出もスムーズになりました。",
    },
    {
      name: "エンジニア・副業中・山本さん（28歳）",
      text: "副業の請求書を毎月手書きしてたのがバカらしくなった。もっと早く使えばよかった。",
    },
    {
      name: "フリーライター・佐藤さん（35歳）",
      text: "見積書の作り方がわからなくて困ってたけど、AIが全部いい感じに仕上げてくれる。",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black text-gray-900">FRIELA</span>
          <div className="flex items-center gap-4">
            <Link
              href="/app"
              className="px-5 py-2 bg-green-500 text-white text-sm font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              今すぐ無料で試す →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            ⚡ 登録不要・クレカ不要・今すぐ使える
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            書類作業、
            <br />
            <span className="text-green-500">今日で終わり</span>にしませんか？
          </h1>
          <p className="text-xl text-gray-500 mb-4 leading-relaxed">
            見積書・請求書・契約書・提案書が<strong className="text-gray-900">30秒</strong>で完成。
            <br />
            月額費用ゼロ。買い切り¥9,800。永久に使えます。
          </p>

          {/* Big timer visual */}
          <div className="my-8 inline-flex items-center gap-4 bg-gray-900 rounded-2xl px-8 py-5">
            <div className="text-center">
              <div className="text-4xl font-black text-red-400 line-through opacity-60">2時間</div>
              <div className="text-xs text-gray-500 mt-1">手作業の場合</div>
            </div>
            <div className="text-2xl text-gray-600">→</div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400">30秒</div>
              <div className="text-xs text-gray-500 mt-1">FRIELAの場合</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/app"
              className="px-8 py-4 bg-green-500 text-white font-black rounded-xl hover:bg-green-400 transition-colors text-xl"
            >
              無料で今すぐ試す →
            </Link>
            <a
              href="#pricing"
              className="px-8 py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-400 transition-colors text-lg"
            >
              料金を見る ¥9,800〜
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Claude APIキーがあればすぐ使えます（取得は5分・無料）
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10">たったの4ステップ</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-black mx-auto mb-3">
                  {s.num}
                </div>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-black text-gray-900 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-400">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/app" className="inline-block px-8 py-4 bg-green-500 text-white font-black rounded-xl hover:bg-green-400 transition-colors">
              さっそく試してみる →
            </Link>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10">使った人の声</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {voices.map((v) => (
              <div key={v.name} className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">「{v.text}」</p>
                <p className="text-xs text-gray-400 font-semibold">{v.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">※ 掲載は体験談です。個人の感想です。</p>
        </div>
      </section>

      {/* Why zero monthly fee */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-4">なぜ月額費用ゼロなのか</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            FRIELAはあなた自身のClaude APIキーを使って書類を生成します。
            だから当社への月額費用は一切かかりません。
            1書類あたりのAPI費用は<strong className="text-white">約2〜5円</strong>（Anthropic社への直接支払い）。
            月100件作っても約500円です。
          </p>
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            {[
              { label: "FRIELAへの月額費用", value: "¥0", sub: "買い切りのみ" },
              { label: "1書類のAPI費用", value: "約3円", sub: "Anthropicへ直接" },
              { label: "月100件生成しても", value: "約300円", sub: "Claude API料金" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-black text-green-400">{item.value}</div>
                <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-2">シンプルな料金</h2>
          <p className="text-gray-400 mb-10">一度払えばずっと使える。解約もない。</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-bold text-gray-400 mb-2">ベーシック</div>
              <div className="text-4xl font-black text-gray-900 mb-1">¥9,800</div>
              <div className="text-sm text-gray-400 mb-6">買い切り</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                {["全4種類の書類生成", "生成回数・無制限", "PDF保存", "永久アップデート無料"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/basic" className="block w-full py-3 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition-colors">
                購入する
              </a>
            </div>
            <div className="border-2 border-green-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black px-4 py-1 rounded-full">人気No.1</div>
              <div className="text-sm font-bold text-green-600 mb-2">プロ</div>
              <div className="text-4xl font-black text-gray-900 mb-1">¥14,800</div>
              <div className="text-sm text-gray-400 mb-6">買い切り</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                {["ベーシックの全機能", "カスタムテンプレート保存", "複数APIキー管理", "優先サポート", "新機能の優先アクセス"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <a href="https://friela.lemonsqueezy.com/buy/pro" className="block w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-colors">
                購入する
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">🔒 Lemon Squeezy決済 / 30日間返金保証 / 購入後すぐ使える</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-green-500 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black mb-4">書類作業、今日で終わりにしましょう</h2>
          <p className="text-green-100 mb-8">登録不要・クレカ不要。今すぐ無料で試せます。</p>
          <Link href="/app" className="inline-block px-10 py-4 bg-white text-green-600 font-black rounded-xl hover:bg-green-50 transition-colors text-xl">
            無料で今すぐ書類を作る →
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
