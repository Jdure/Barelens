/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    publicRuntimeConfig: {
        url: process.env.DIRECTUS_DOMAIN,
    },
    serverRuntimeConfig: {
        email: process.env.DIRECTUS_EMAIL,
        password: process.env.DIRECTUS_PASSWORD,
        token: process.env.DIRECTUS_TOKEN,
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "source.unsplash.com",
            process.env.DIRECTUS_DOMAIN,
        ],
    },
}

module.exports = nextConfig;
