module.exports = {
    siteMetadata: {
      title: `Simple Auth`,
      description: `Simple Auth Application`,
    },
    mapping: {
      "MarkdownRemark.frontmatter.author": `AuthorYaml`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
            },
        },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`
    ],
  }