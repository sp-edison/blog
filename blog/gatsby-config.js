require(`dotenv`).config({
  path: `.env`,
})


module.exports = {
  siteMetadata: {
    siteTitleAlt: `EDISON Blog`,
    author: 'EDISON',
  },
  plugins: [
    {
      resolve:'gatsby-theme-workspaces',
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Tag`,
            slug: `/tags`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          
        ],
        externalLinks: [
          {
            name: `EDISON Home`,
            url: `https://www.edison.re.kr`,
          },
        ],
        formatString: 'YYYY.MM.DD'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EDISON-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `EDISON-blog`,
        description: `It is a blog that provides various contents related to simulation SW provided by EDISON Project(https://www.edison.re.kr).`,
        start_url: `/blog/public/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,

    ],
}