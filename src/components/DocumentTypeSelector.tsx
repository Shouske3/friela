"use client";

import type { DocumentType, DocumentTypeConfig } from "@/types";

interface Props {
  configs: DocumentTypeConfig[];
  selected: DocumentType | null;
  onSelect: (type: DocumentType) => void;
}

export function DocumentTypeSelector({ configs, selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {configs.map((config) => (
        <button
          key={config.id}
          onClick={() => onSelect(config.id)}
          className={`
            p-4 rounded-xl border-2 text-left transition-all duration-200
            ${
              selected === config.id
                ? "border-indigo-500 bg-indigo-50 shadow-md"
                : "border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm"
            }
          `}
        >
          <div className="text-2xl mb-2">{config.icon}</div>
          <div className="font-semibold text-gray-800 text-sm">{config.label}</div>
          <div className="text-xs text-gray-500 mt-1">{config.description}</div>
        </button>
      ))}
    </div>
  );
}
