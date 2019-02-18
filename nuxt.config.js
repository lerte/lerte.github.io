export default {
  head: {
    titleTemplate: 'Lerte - %s | Web & Program & Design & Art',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bulma/css/bulma.min.css' }
    ]
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  loading: { color: '#3B8070' },
  build: {
    extractCSS: true
  }
}
