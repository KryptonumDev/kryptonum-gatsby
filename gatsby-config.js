require("dotenv").config({
  path: `.env`,
})

const isProd = process.env.NODE_ENV === "production"
const previewEnabled = (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true"

module.exports = {
  siteMetadata: {
    title: `Kryptonum`,
    siteUrl: `https://kryptonum.eu`
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: !isProd,
        overlayDrafts: !isProd || previewEnabled,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://kryptonum.eu/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`
  ],
  // trailingSlash: "never"
};