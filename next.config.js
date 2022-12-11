/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "links.papareact.com",
            "image.tmdb.org",
            "platform-lookaside.fbsbx.com",
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
