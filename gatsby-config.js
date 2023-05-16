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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        singleTypes: [
          `homepage`,
          'footer'
        ],
        collectionTypes: [
          'case-study',
          'team',
          'blog-category',
          'blog-entry',
          'curiosity',
          'technology',
          'testimonial'
        ],
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
  trailingSlash: "ignore"
};