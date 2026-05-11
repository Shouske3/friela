"use client";

import { useState } from "react";
import { Eye, EyeOff, ExternalLink } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ApiKeyInput({ value, onChange }: Props) {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-blue-800">
          🔑 Claude API キー
        </label>
        <a
          href="https://console.anthropic.com/settings/keys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
        >
          APIキーを取得
          <ExternalLink size={12} />
        </a>
      </div>
      <div className="relative">
        <input
          type={showKey ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="sk-ant-api03-..."
          className="w-full border border-blue-300 rounded-lg px-3 py-2 pr-10 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
        <button
          type="button"
          onClick={() => setShowKey(!showKey)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      <p className="text-xs text-blue-600 mt-1">
        ※ APIキーはブラウザ内のみで使用。サーバーには保存しません。
      </p>
    </div>
  );
}
