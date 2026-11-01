/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Two root layouts, (english) and (korean), leave no single layout to wrap unmatched URLs.
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
