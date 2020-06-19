const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog` } = options

  return {
    siteMetadata: {
      siteTitle: `EDISON`,
      siteTitleAlt: `EDISON Blog`,
      siteHeadline: `EDISON Blog`,
      siteUrl: `https://minimal-blog.lekoarts.de`,
      siteDescription: `It is a blog that provides various contents related to simulation SW provided by EDISON Project https://www.edison.re.kr `,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@edison`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: false,
              },
            },
            `gatsby-remark-katex`],
          plugins: [ `gatsby-remark-images`,`gatsby-remark-katex` ],
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
