module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-kit",
        short_name: "starter",
        start_url: "/",
        background_color: "#4256e7",
        theme_color: "#4256e7",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.jsx`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  ]
}
