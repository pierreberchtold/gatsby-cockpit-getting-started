module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
