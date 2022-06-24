// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
});
