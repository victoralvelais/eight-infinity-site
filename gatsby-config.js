require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const intro = {
  name: 'Eight or Infinity',
  image: { location: "/images/profile-image.jpg", alt: 'Eight/Infinity logo' },
  main: 'Exploring worlds',
  secondary: 'Join the ship',
  credentials: [
    { title: '', org: '', url: '' },
  ]
}

const links = {
  socials: [
    { username: 'xKhfQQD', org: 'Discord', link: 'https://discord.gg/'},
    { username: 'EightOrInfinity', org: 'Facebook', link: 'https://www.facebook.com/'},
    { username: 'EightOrInfinity', org: 'Twitter', link: 'https://twitter.com/'},
    { username: 'EightOrInfinityInsta', org: 'Instagram', link: 'https://www.instagram.com/'},
  ],
  shop: [
    { username: '', org: '', link: '' },
  ],
  stream: [
    { username: '5h0ddIsDxcW9yEMYltEnWK', org: 'Spotify', link: 'https://open.spotify.com/show/'},
    { username: 'UCPUaqPMKwGeIGZujEpHXrzA', org: 'YouTube', link: 'https://www.youtube.com/channel/'},
  ],
}

module.exports = {
  siteMetadata: {
    title: `Eight or Infinity`,
    description: `${intro.main} | ${intro.secondary}`,
    author: `@EightOrInfinity`,
    image: intro.image, // Path to your image you placed in the 'static' folder
    url: `https://eightorinfinity.com`,
    intro,
    links,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA4 // GA4
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 30,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
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
        background_color: `#5918ff`,
        theme_color: `#5918ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
