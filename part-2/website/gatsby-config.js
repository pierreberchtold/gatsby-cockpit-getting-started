module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-cockpit`,
      options: {
        cockpitConfig: {
          baseURL: 'http://cockpit.portfolio.local', // the url to you cockpit installation
          accessToken: '0ac313030488075f594a89a02b52bc', // you cockpit API key
        },
      },
    },
  ],
};
