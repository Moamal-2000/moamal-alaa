export const GITHUB_API = "https://api.github.com";
export const MY_REPOS_URL = `${GITHUB_API}/users/Moamal-2000/repos?per_page=100`;

export const SCROLL_THRESHOLD = 50;
export const DEBOUNCE_DELAY = 50;
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const IS_SERVER = typeof window === "undefined";
export const MEDIUM_SCREEN_WIDTH = 992;
