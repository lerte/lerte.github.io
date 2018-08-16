<template lang="pug">
  div.container
    div.contents(v-if='content')
      div.article(v-html='compiledMarkdown')
      div.backhome
        nuxt-link(to='/')
          span.icon
            i.fa.fa-home
          span Back to home
    p(v-else) Loading...
</template>

<script>
import config from '../config.js'
import axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/plugins/custom-class/prism-custom-class.min.js'
export default {
  head () {
    return {
      title: this.$route.params.slug
    }
  },
  data () {
    return {
      content: ''
    }
  },
  computed: {
    compiledMarkdown () {
      const renderer = new marked.Renderer()
      renderer.heading = (text, level) => {
        const slug = text.replace(/<(?:.|\n)*?>/gm, '').toLowerCase().replace(/[\s\n\t]+/g, '-')
        return `<h${level} id="${slug}">${text}</h${level}>`
      }
      renderer.code = (code, lang) => {
        Prism.plugins.customClass.prefix('prism-')
        const highlight = Prism.highlight(code, Prism.languages[lang] || Prism.languages.javascript)
        return `<pre><code class="lang-${escape(lang, true)}">${highlight}</code></pre>`
      }
      marked.setOptions({
        renderer,
        breaks: true
      })
      return marked(this.content)
    }
  },
  methods: {
    async getContent () {
      let {data} = await axios.get(`https://api.github.com/repos/${config.repo}/git/blobs/${this.$route.query.sha}`, {
        headers: config.headers
      })
      this.content = data
    }
  },
  created () {
    this.getContent()
  }
}
</script>
