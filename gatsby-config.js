module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
  ]
};
