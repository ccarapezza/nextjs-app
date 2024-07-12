/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-assets.nasa.gov',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'mars.nasa.gov',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
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
