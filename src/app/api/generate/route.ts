import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildPrompt } from "@/lib/prompts";
import type { GenerateRequest } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: GenerateRequest = await req.json();
    const { documentType, apiKey, fields } = body;

    if (!apiKey || !apiKey.startsWith("sk-ant-")) {
      return NextResponse.json(
        { success: false, error: "有効なClaude APIキーを入力してください（sk-ant-で始まる）" },
        { status: 400 }
      );
    }

    if (!documentType || !fields) {
      return NextResponse.json(
        { success: false, error: "必要な情報が不足しています" },
        { status: 400 }
      );
    }

    const client = new Anthropic({ apiKey });
    const prompt = buildPrompt(documentType, fields);

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from Claude API");
    }

    return NextResponse.json({ success: true, content: content.text });
  } catch (error: unknown) {
    console.error("Generate error:", error);

    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        { success: false, error: "APIキーが無効です。Anthropic Consoleで確認してください。" },
        { status: 401 }
      );
    }

    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { success: false, error: "APIレート制限に達しました。しばらく待ってからお試しください。" },
        { status: 429 }
      );
    }

    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { success: false, error: `Claude API エラー: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "書類の生成に失敗しました。入力内容を確認してください。" },
      { status: 500 }
    );
  }
}
