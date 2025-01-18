/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vipkitchen.in',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.livspace-cdn.com',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
