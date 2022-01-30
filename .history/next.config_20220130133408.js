// next.config.js
const withImages = require("next-images");
// module.exports = withImages();
module.exports = {
  reactStrictMode: true,
  withImages: withImages(),
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
