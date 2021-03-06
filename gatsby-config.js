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
        start_url: "/Bowie-Internal-Medicine-Website/",
        display: "minimal-ui",
        icon: "src/images/favicon.jpg",
        theme_color: "#000000",
        background_color: "#f2f2f2"
      }
    },
    'gatsby-plugin-offline'    
  ],
  pathPrefix: `/Bowie-Internal-Medicine-Website`
}
