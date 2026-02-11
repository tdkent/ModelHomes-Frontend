// Env
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

// Images
export const IMG_WIDTHS = [480, 768, 1280, 1920] as const;
export const IMG_TYPES = ["avif", "webp"] as const;

// Data
export const SITE_NAME =
	"Model Homes of the San Francisco International Exposition, 1939-40";
export const INFLATION_MULT = 22.85; // Jan 1940 - Jan 2025
