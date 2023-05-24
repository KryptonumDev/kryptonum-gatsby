require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Kryptonum`,
    siteUrl: `https://kryptonum.eu`
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        placeholder: `none`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`
  ],
  trailingSlash: "ignore"
};