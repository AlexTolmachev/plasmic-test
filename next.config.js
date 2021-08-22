
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['eoAPTQXscoSHnqiz1oFaj5'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  