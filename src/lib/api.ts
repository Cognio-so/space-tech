const normalizeBase = (base: string) => {
  const normalized = base.trim().replace(/^VITE_API_BASE_URL=/, "");
  if (!normalized) return "";
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
};

const configuredBaseUrl = normalizeBase(import.meta.env.VITE_API_BASE_URL || "");
const currentOrigin =
  typeof window !== "undefined" ? window.location.origin : "";
const isLocalOrigin =
  currentOrigin.includes("localhost") || currentOrigin.includes("127.0.0.1");

// In production, prefer same-origin API routes to avoid CORS issues. During
// local development we can still point the frontend at a separate backend.
const API_BASE_URL = isLocalOrigin ? configuredBaseUrl : "";

export const contactEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/contact` : "/api/contact";
export const bookCallEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/book-call` : "/api/book-call";
