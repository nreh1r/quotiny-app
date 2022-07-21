/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = () => {
    return {
        nextConfig,
        env: {
            mongodb_username: "andre",
            mongodb_password: "andre5",
            mongodb_clustername: "cluster0",
            mongodb_database: "contacts",
            mongodb_database2: "quotes",
        },
    }
}
