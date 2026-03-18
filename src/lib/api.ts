// Always use same-origin /api routes in the browser. In local development Vite
// proxies /api to the configured backend, which avoids browser CORS failures.
const API_BASE_URL = "";

export const contactEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/contact` : "/api/contact";
export const bookCallEndpoint = API_BASE_URL ? `${API_BASE_URL}/api/book-call` : "/api/book-call";
