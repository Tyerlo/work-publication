// module.exports = {
//   plugins: [`gatsby-plugin-netlify-cms`]
// plugins: [
//   `gatsby-transformer-json`,
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       path: `./src/data/`
//     }
//   },
//   {
//     resolve: `gatsby-plugin-create-client-paths`,
//     options: { prefixes: [`/description/*`] }
//   }
// ]
// };
module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`
  ]
};
