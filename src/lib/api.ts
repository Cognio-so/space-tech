const normalizeBase = (base: string) => {
  const normalized = base.trim();
  if (!normalized) return "";
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
};

const configuredBaseUrl = normalizeBase(import.meta.env.VITE_API_BASE_URL || "");
const API_BASE_URL = configuredBaseUrl;

export const contactEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/contact` : "/api/contact";
export const bookCallEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/book-call` : "/api/book-call";
