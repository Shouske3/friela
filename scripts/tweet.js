/**
 * FRIELA X自動投稿スクリプト
 * Claude APIで投稿文を生成し、X APIで投稿する
 */

const Anthropic = require("@anthropic-ai/sdk");
const { TwitterApi } = require("twitter-api-v2");

// X APIクライアント（OAuth 1.0a）
const twitterClient = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_TOKEN_SECRET,
});

// Anthropicクライアント
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// 投稿テーマのローテーション
const themes = [
  "フリーランスの見積書作成の悩みと解決策",
  "請求書の書き方とよくあるミス",
  "業務委託契約書で注意すべきポイント",
  "インボイス制度対応の重要性",
  "フリーランスの時間管理と書類作業の効率化",
  "未払いトラブルを防ぐ請求書の書き方",
  "フリーランス初心者が知るべき書類の基礎知識",
];

async function generateTweet(theme) {
  const response = await anthropic.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `あなたはFRIELA（フリーランス向けAI書類生成ツール）の公式Xアカウントの中の人です。
以下のテーマで、フリーランサーに刺さるXの投稿文を1つ作成してください。

テーマ：${theme}

【ルール】
- 全体で220文字以内（URLとハッシュタグ含まず）
- 共感を呼ぶ書き出し
- 具体的な数字や事例を含める
- 最後にFRIELAへの自然な誘導
- ハッシュタグ：#フリーランス と関連タグ1〜2個
- URLは含めない（後で自動追加）
- 改行を適切に使い読みやすくする

投稿文のみを出力してください。`,
      },
    ],
  });

  return response.content[0].text;
}

async function main() {
  // 今日の曜日でテーマを選択
  const dayOfWeek = new Date().getDay();
  const theme = themes[dayOfWeek % themes.length];

  console.log(`テーマ: ${theme}`);

  // Claude APIで投稿文生成
  const tweetText = await generateTweet(theme);
  const fullTweet = `${tweetText}\n\nhttps://friela-shouske.vercel.app`;

  console.log("生成された投稿文:");
  console.log(fullTweet);
  console.log(`文字数: ${fullTweet.length}`);

  // X APIで投稿
  const rwClient = twitterClient.readWrite;
  const tweet = await rwClient.v2.tweet(fullTweet);

  console.log("✅ 投稿完了！");
  console.log(`Tweet ID: ${tweet.data.id}`);
}

main().catch((err) => {
  console.error("❌ エラー:", err);
  process.exit(1);
});
