require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Pablo Ferreira`,
    position: `Desenvolvedor FullStack`,
    description: `Autodidata e apaixonado por tecnologia.`,
    author: `@Pablo_Ferreira`,
    siteUrl: `https://pabloferreira.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // precisa ser o primeiro a trabalhar com gatsby-comment-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "uploads"
          }
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false
          },
        },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: `PabloF`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#101E26`,
        display: `minimal-ui`,
        icon: `static/assets/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
