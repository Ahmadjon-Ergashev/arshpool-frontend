/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "api.beun.uz",
        pathname: "/media/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
