module.exports = {
  siteMetadata: {
    title: `Bowie-Internal-Medicine-Website`,
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bowie-Internal-Medicine-Website",
        short_name: "BowieIntMed",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/favicon.png"
      }
    },
    'gatsby-plugin-offline'    
  ],
  pathPrefix: `/Bowie-Internal-Medicine-Website`
}
