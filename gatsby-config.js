module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [`gatsby-remark-responsive-iframe`]
	    }
    }
  ],
};
