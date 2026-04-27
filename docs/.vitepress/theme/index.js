import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    DefaultTheme.enhanceApp?.({ app })
    app.component('Footer', Footer)
  }
}