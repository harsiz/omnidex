export default {
  title: "OmniDex",

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  appearance: true,

  themeConfig: {
    logo: "/logo.png",
    darkMode: true,

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guides",
        items: [
          { text: "AI", link: "/ai" },
          { text: "FOSS", link: "/foss" },
          { text: "Anime", link: "/anime" }
        ]
      }
    ],

    sidebar: [
      { text: "📚 Get Started ", link: "/get-started"},
      {
        text: "Wiki",
        items: [
          { text: "🤖 Artificial Intelligence", link: "/ai" },
          { text: "🔐 Privacy", link: "/privacy" },
          { text: "🌸 Anime", link: "/anime" },
          { text: "🎬 Streaming", link: "/streaming" },
          { text: "⬇️ Downloading", link: "/downloading" },
          { text: "🐧 FOSS", link: "/foss" }
        ]
      },

      {
        text: "Tools",
        items: [
          { text: "📦 File Tools", link: "/file-tools" },
          { text: "🌐 Internet Tools", link: "/internet-tools" }
        ]
      }
    ],

    footer: {
      message: "We do not host any files onsite.",
      copyright: "© 2026 OmniDex."
    }
  }
}