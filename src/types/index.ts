export type DocumentType =
  | "estimate"       // 見積書
  | "invoice"        // 請求書
  | "contract"       // 業務委託契約書
  | "proposal";      // 提案書

export interface DocumentTypeConfig {
  id: DocumentType;
  label: string;
  description: string;
  icon: string;
  fields: FieldConfig[];
}

export interface FieldConfig {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "date" | "select";
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export interface GenerateRequest {
  documentType: DocumentType;
  apiKey: string;
  licenseKey: string;
  fields: Record<string, string>;
}

export interface GenerateResponse {
  success: boolean;
  content?: string;
  error?: string;
}

export interface LicenseVerifyResponse {
  valid: boolean;
  error?: string;
}
