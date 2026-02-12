const normalizeBase = (base: string) => {
  const normalized = base.trim();
  if (!normalized) return "";
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
};

const configuredBaseUrl = normalizeBase(import.meta.env.VITE_API_BASE_URL || "");
const fallbackDevBaseUrl = import.meta.env.DEV ? "http://localhost:3001" : "";
const API_BASE_URL = configuredBaseUrl || fallbackDevBaseUrl;

export const contactEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/contact` : "/api/contact";
export const bookCallEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/book-call` : "/api/book-call";
