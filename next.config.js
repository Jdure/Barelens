/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: [
            "res.cloudinary.com",
            "source.unsplash.com",
            process.env.DIRECTUS_DOMAIN,
        ],
    },
}

module.exports = nextConfig;
