import type { NextConfig } from "next";
import { apps } from "@/data/app";

const redirects = apps.flatMap((app) => {
  // Default redirect from /AppName to /apps/AppName
  const defaultRedirect = {
    source: `/${app.path}/:path*`,
    destination: `/apps/${app.path}/:path*`,
    permanent: true,
  };

  // SEO-friendly aliases based on metadata.aliases
  const aliasRedirects = (app.metadata.aliases || []).map((alias) => ({
    source: `/${alias}`,
    destination: `/apps/${app.path}`,
    permanent: true,
  }));

  return [defaultRedirect, ...aliasRedirects];
});

const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.appatar.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is5-ssl.mzstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is112-ssl.mzstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
