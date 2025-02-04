/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Disables Image Optimization API
    },
    output: 'export',
};

export default nextConfig;
