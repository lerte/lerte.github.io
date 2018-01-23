module.exports = {
  head: {
    title: 'Web & Program & Design & Art',
    titleTemplate: 'Lerte | %s',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bulma/css/bulma.min.css' }
    ]
  },
  modules: [
    '@nuxtjs/meta',
    '@nuxtjs/manifest'
  ],
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  loading: { color: '#3B8070' }
}
