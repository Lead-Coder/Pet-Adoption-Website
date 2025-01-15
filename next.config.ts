import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com', 'your-image-host.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:5000/api',
  },
};

export default nextConfig;
