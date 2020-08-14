require("dotenv").config({
  path: `.env${process.env.NODE_ENV}`
});
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
  // ,
  // developMiddleware: (app) => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // }
};
