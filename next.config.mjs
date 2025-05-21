/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.aneeverse.com', 
            'lh3.googleusercontent.com', 
            'imgs.search.brave.com', 
            'example.com',
            'images.unsplash.com',
            'seoblog',
            'localhost'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Increase efficiency with better caching
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 5,
    },
};

export default nextConfig;