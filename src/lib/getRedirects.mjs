const PRIMARY_DOMAIN = "https://me.moamalalaa.com";

const OLD_DOMAINS = [
  "https://moamal-alaa.vercel.app",
  "https://moamalalaa.netlify.app",
];

export function getOldDomainRedirects() {
  return OLD_DOMAINS.map((domain) => ({
    source: "/:path*",
    has: [{ type: "host", value: domain }],
    destination: `${PRIMARY_DOMAIN}/:path*`,
    permanent: true,
  }));
}
