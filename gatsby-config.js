const intro = {
  name: 'Vz',
  image: { location: "/images/profile-image.jpg", alt: 'Great Smile' },
  main: 'Digital Nomad, Web Dev, Creator',
  secondary: 'Smart Ass, Gamer, Niche Collector',
  credentials: [
    { title: 'Founder & CEO', org: 'Panda Power for MTurk', url: 'https://pandapower.app' },
    { title: 'Founder', org: 'Izuzu Rodeo', url: 'https://izzrodeo.com' },
  ]
}

const links = {
  socials: [
    { username: 'vcaiii', org: 'Facebook', link: 'https://www.facebook.com/'},
    { username: 'vca_iii', org: 'Twitter', link: 'https://twitter.com/'},
    { username: 'vca.iii', org: 'Instagram', link: 'https://www.instagram.com/'},
  ],
  shop: [
    { username: 'vcaiii', org: 'OpenSea', link: 'https://opensea.io/' },
  ],
  stream: [
    { username: 'UCfkT4qmHn2JaS_K-Exf1XzQ', org: 'YouTube', link: 'https://www.youtube.com/channel/'},
    { username: 'vcaiii', org: 'Audius', link: 'https://audius.co/' },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Vz`,
    description: `${intro.main} | ${intro.secondary}`,
    author: `@vcaiii`,
    image: intro.image, // Path to your image you placed in the 'static' folder
    url: `https://vcaiii.com`,
    intro,
    links,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vcaiii`,
        short_name: `vcaiii`,
        start_url: `/`,
        background_color: `#FFD700`,
        theme_color: `#FFD700`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
