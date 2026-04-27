export default {
  title: "Omnidex",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  appearance: false,

  themeConfig: {
    
    logo: "/logo.png",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guides",
        items: [
          { text: "AI Guide", link: "/guides/ai" },
          { text: "FOSS Guide", link: "/guides/foss" },
          { text: "Anime Guide", link: "/guides/anime" }
        ]
      }
    ],
  }
}