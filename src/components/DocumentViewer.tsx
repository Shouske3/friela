"use client";

import { useRef } from "react";
import { Copy, Download, RefreshCw } from "lucide-react";

interface Props {
  content: string;
  onReset: () => void;
}

export function DocumentViewer({ content, onReset }: Props) {
  const printRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    alert("クリップボードにコピーしました！");
  };

  const handlePrint = () => {
    window.print();
  };

  // Simple markdown to HTML for display (lightweight, no external lib needed)
  const renderMarkdown = (text: string) => {
    return text
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-2 text-gray-800">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3 text-gray-900 border-b-2 border-gray-200 pb-1">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-4 text-gray-900 text-center">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^---$/gm, '<hr class="my-6 border-gray-300" />')
      .replace(/^\| (.+) \|$/gm, (match) => {
        const cells = match.split("|").filter(c => c.trim());
        return `<tr>${cells.map(c => `<td class="border border-gray-300 px-3 py-2 text-sm">${c.trim()}</td>`).join("")}</tr>`;
      })
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-sm text-gray-700">$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-sm text-gray-700">$2</li>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Copy size={16} />
          コピー
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          <Download size={16} />
          印刷 / PDF保存
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors ml-auto"
        >
          <RefreshCw size={16} />
          新しい書類を作成
        </button>
      </div>

      {/* Document Display */}
      <div
        ref={printRef}
        className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm print:shadow-none print:border-none"
        style={{ minHeight: "600px" }}
      >
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      </div>

      {/* Raw Markdown (for advanced users) */}
      <details className="mt-4">
        <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          Markdownソースを表示
        </summary>
        <pre className="mt-2 p-4 bg-gray-50 rounded-lg text-xs text-gray-600 overflow-auto whitespace-pre-wrap">
          {content}
        </pre>
      </details>
    </div>
  );
}
