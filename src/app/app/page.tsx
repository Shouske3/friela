"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { DOCUMENT_CONFIGS } from "@/lib/document-configs";
import { DocumentTypeSelector } from "@/components/DocumentTypeSelector";
import { FieldForm } from "@/components/FieldForm";
import { DocumentViewer } from "@/components/DocumentViewer";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import type { DocumentType } from "@/types";

type Step = "select" | "form" | "result";

export default function AppPage() {
  const [step, setStep] = useState<Step>("select");
  const [selectedType, setSelectedType] = useState<DocumentType | null>(null);
  const [fields, setFields] = useState<Record<string, string>>({});
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLicensed, setIsLicensed] = useState(false);

  // Load saved API key from localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem("friela_api_key");
    if (savedKey) setApiKey(savedKey);
    // In MVP, skip license check (all users have access)
    setIsLicensed(true);
  }, []);

  const saveApiKey = (key: string) => {
    setApiKey(key);
    if (key) localStorage.setItem("friela_api_key", key);
  };

  const selectedConfig = DOCUMENT_CONFIGS.find((c) => c.id === selectedType);

  const handleSelectType = (type: DocumentType) => {
    setSelectedType(type);
    setFields({});
    setStep("form");
  };

  const handleFieldChange = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = async () => {
    if (!selectedType || !apiKey) {
      setError("APIキーを入力してください");
      return;
    }

    // Check required fields
    const missing = selectedConfig?.fields
      .filter((f) => f.required && !fields[f.key])
      .map((f) => f.label);

    if (missing && missing.length > 0) {
      setError(`必須項目を入力してください: ${missing.join("、")}`);
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentType: selectedType,
          apiKey,
          licenseKey: "licensed",
          fields,
        }),
      });

      const data = await response.json();

      if (data.success && data.content) {
        setResult(data.content);
        setStep("result");
      } else {
        setError(data.error || "生成に失敗しました");
      }
    } catch {
      setError("通信エラーが発生しました。インターネット接続を確認してください。");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setStep("select");
    setSelectedType(null);
    setFields({});
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📑</span>
            <div>
              <h1 className="font-bold text-gray-900">FRIELA</h1>
              <p className="text-xs text-gray-500">AI書類ジェネレーター</p>
            </div>
          </div>
          {isLicensed && (
            <div className="flex items-center gap-1 text-xs text-green-600">
              <CheckCircle size={14} />
              ライセンス認証済み
            </div>
          )}
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-100 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs">
            {[
              { id: "select", label: "書類を選ぶ" },
              { id: "form", label: "情報を入力" },
              { id: "result", label: "書類完成" },
            ].map((s, i) => (
              <div key={s.id} className="flex items-center gap-2">
                {i > 0 && <div className="h-px w-8 bg-gray-200" />}
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                    step === s.id
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : step === "result" && s.id !== "result"
                      ? "text-green-600"
                      : step === "form" && s.id === "select"
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                >
                  {step === "result" && s.id !== "result" ? (
                    <CheckCircle size={12} />
                  ) : step === "form" && s.id === "select" ? (
                    <CheckCircle size={12} />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {step === "select" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">作成する書類を選んでください</h2>
              <p className="text-sm text-gray-500 mt-1">
                AIが30秒でプロ品質の書類を生成します
              </p>
            </div>
            <DocumentTypeSelector
              configs={DOCUMENT_CONFIGS}
              selected={selectedType}
              onSelect={handleSelectType}
            />
          </div>
        )}

        {step === "form" && selectedConfig && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep("select")}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                ← 書類選択に戻る
              </button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedConfig.icon}</span>
                <h2 className="text-xl font-bold text-gray-900">{selectedConfig.label}の作成</h2>
              </div>
            </div>

            <ApiKeyInput value={apiKey} onChange={saveApiKey} />

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">書類情報を入力</h3>
              <FieldForm
                fields={selectedConfig.fields}
                values={fields}
                onChange={handleFieldChange}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !apiKey}
              className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  AIが書類を生成中...（30秒ほどかかります）
                </>
              ) : (
                <>
                  ✨ {selectedConfig.label}を生成する
                </>
              )}
            </button>
          </div>
        )}

        {step === "result" && result && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                ✅ {selectedConfig?.label}が完成しました！
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                「印刷 / PDF保存」ボタンからPDFとして保存できます
              </p>
            </div>
            <DocumentViewer content={result} onReset={handleReset} />
          </div>
        )}
      </main>
    </div>
  );
}
