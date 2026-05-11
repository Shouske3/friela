import type { DocumentType } from "@/types";

export function buildPrompt(
  documentType: DocumentType,
  fields: Record<string, string>
): string {
  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 契約書の場合のみ免責注記を追加
  const contractDisclaimer =
    documentType === "contract"
      ? `\n- 書類の末尾に必ず以下の免責注記を追加すること:\n  「※ 本書類はAIにより自動生成されたものです。法的効力については弁護士にご確認ください。」`
      : "";

  const baseInstruction = `あなたは日本のビジネス文書の専門家です。
フリーランサーが使う${getDocumentLabel(documentType)}を、プロフェッショナルかつ読みやすい形式で生成してください。

【出力要件】
- 実際に使用できる完成品の文書を生成すること
- 日本のビジネス慣習に沿った丁寧な表現を使うこと
- Markdown形式で出力すること（印刷時に見やすいレイアウト）
- 今日の日付: ${today}${contractDisclaimer}

【入力情報】
${Object.entries(fields)
  .filter(([, v]) => v)
  .map(([k, v]) => `${k}: ${v}`)
  .join("\n")}
`;

  const specificInstructions: Record<DocumentType, string> = {
    estimate: `
【見積書の構成】
1. タイトル「見積書」（大きく）
2. 宛先（クライアント名）と日付、見積番号（自動生成）
3. 有効期限
4. 作業内容の明細表（項目・数量・単価・金額）
5. 小計・消費税（10%）・合計金額
6. 支払条件・納期
7. 差出人情報
8. 備考欄
`,
    invoice: `
【請求書の構成】
1. タイトル「請求書」（大きく）
2. 宛先（クライアント名）と請求日、請求書番号（自動生成）
3. 支払期限
4. 作業内容の明細表（項目・数量・単価・金額）
5. 小計・消費税・合計金額（インボイス対応）
6. 振込先口座情報（枠で囲む）
7. 差出人情報（登録番号は「T-XXXXXXXXXX」とプレースホルダー）
`,
    contract: `
【業務委託契約書の構成】
1. タイトル「業務委託契約書」
2. 前文（委託者・受託者の定義）
3. 第1条 業務内容
4. 第2条 業務期間
5. 第3条 報酬・支払方法
6. 第4条 権利の帰属（著作権）
7. 第5条 秘密保持
8. 第6条 再委託の禁止
9. 第7条 契約解除
10. 第8条 損害賠償
11. 特別条項（入力された場合のみ）
12. 締結日・署名欄
`,
    proposal: `
【提案書の構成】
1. 表紙（タイトル・提案者・日付）
2. エグゼクティブサマリー（1段落で核心を伝える）
3. 現状の課題分析
4. 提案内容・解決策
5. 期待される効果・ROI
6. 実施スケジュール（Ganttチャート風のMarkdown表）
7. 料金・お支払いプラン
8. なぜ私が最適か（強み・実績）
9. 次のステップ（CTA）
`,
  };

  return baseInstruction + specificInstructions[documentType];
}

function getDocumentLabel(type: DocumentType): string {
  const labels: Record<DocumentType, string> = {
    estimate: "見積書",
    invoice: "請求書",
    contract: "業務委託契約書",
    proposal: "提案書",
  };
  return labels[type];
}
