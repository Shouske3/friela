import { NextRequest, NextResponse } from "next/server";

// Lemon Squeezy License Key Verification
// Docs: https://docs.lemonsqueezy.com/api/license-keys
export async function POST(req: NextRequest) {
  try {
    const { licenseKey } = await req.json();

    if (!licenseKey) {
      return NextResponse.json({ valid: false, error: "ライセンスキーを入力してください" });
    }

    // Development mode: accept test keys
    if (process.env.NODE_ENV === "development" && licenseKey === "TEST-LICENSE-KEY") {
      return NextResponse.json({ valid: true });
    }

    // Lemon Squeezy API verification
    const response = await fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ license_key: licenseKey }),
    });

    if (!response.ok) {
      return NextResponse.json({ valid: false, error: "ライセンスキーの確認に失敗しました" });
    }

    const data = await response.json();

    if (data.valid) {
      // Activate the license (tracks usage)
      await fetch("https://api.lemonsqueezy.com/v1/licenses/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          license_key: licenseKey,
          instance_name: "FRIELA-Web",
        }),
      });

      return NextResponse.json({ valid: true });
    }

    return NextResponse.json({ valid: false, error: "無効なライセンスキーです" });
  } catch (error) {
    console.error("License verify error:", error);
    return NextResponse.json({ valid: false, error: "ライセンス確認中にエラーが発生しました" });
  }
}
