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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Agencja interaktywna Kryptonum`,
        short_name: `Kryptonum`,
        lang: `pl`,
        display: `standalone`,
        icon: `src/resources/images/kryptonum-favicon.webp`,
        start_url: `/pl`,
        background_color: `#040606`,
        theme_color: `#040606`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`
  ],
  trailingSlash: "never"
};