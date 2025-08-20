// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.js$/,
            include: /src/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['next/babel', { 'preset-react': { runtime: 'automatic' } }]
                    ]
                }
            }
        });
        return config;
    },
};

module.exports = nextConfig;
