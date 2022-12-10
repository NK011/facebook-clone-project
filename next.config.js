/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["links.papareact.com", "image.tmdb.org", "photos.app.goo.gl"],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
