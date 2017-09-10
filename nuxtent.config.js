const hljs = require('highlight.js')

module.exports = {
  parsers: {
    md: {
      highlight: (code, lang) => {
        if (!(lang && hljs.getLanguage(lang))) return ''
        return hljs.highlight(lang, code, true).value
      }
    }
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : 'http://localhost:3000'
  }
}