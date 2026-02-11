const normalizeBase = (base: string) => {
  if (!base) return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

const API_BASE_URL = normalizeBase(import.meta.env.VITE_API_BASE_URL || "");

export const contactEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/contact` : "/api/contact";
