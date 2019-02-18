<template>
  <div class="container">
    <div class="content" v-if="content">
      <div class="article" v-html="compiledMarkdown"></div>
      <div class="backhome">
        <nuxt-link to="/"><span class="icon"><i class="fa fa-home"></i></span><span>Back to home</span></nuxt-link>
      </div>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import config from '../config.js'
import marked from 'marked'
import Prism from 'prismjs'
export default {
  head () {
    return {
      title: process.browser ? location.pathname.substring(1) : ''
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
      let response = await fetch(`https://api.github.com/repos/${config.repo}/git/blobs/${this.$route.query.sha}`, {
        headers: config.headers
      })
      this.content = await response.json()
    }
  },
  created () {
    this.getContent()
  }
}
</script>
