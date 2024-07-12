/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.nasa.gov',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.borderless-software.com',
                port: '',
                pathname: '**',
            }
        ],
    },
};

export default nextConfig;
