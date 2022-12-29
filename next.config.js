/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: [
            "res.cloudinary.com",
            "source.unsplash.com",
            "images.ctfassets.net",
        ],
    },
}

module.exports = nextConfig;
