/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    publicRuntimeConfig: {
        url: process.env.DIRECTUS_DOCKER_DOMAIN,
    },
    serverRuntimeConfig: {
        email: process.env.DIRECTUS_EMAIL,
        password: process.env.DIRECTUS_DOCKER_PASSWORD,
        token: process.env.DIRECTUS_DOCKER_TOKEN,
    },
    images: {
        domains: [process.env.DIRECTUS_DOCKER_DOMAIN],
    },
}

module.exports = nextConfig;
