<template>
  <div class="container">
    <div class="content">
      <div class="columns">
        <div class="column is-3">
          <doc-nav></doc-nav>
        </div>
        <div class="column is-9">
          <div class="content" v-if="content">
            <div class="article" v-html="compiledMarkdown">
              <div class="backhome">
                <nuxt-link to="/"><span class="icon"><i class="fa fa-home"></i></span><span>Back to home</span></nuxt-link>
              </div>
            </div>
          </div>
          <ul v-else-if="contents.length">
            <li v-for="content in contents" :key="content.id">
              <nuxt-link :to="{path: content.name.split('')[0], query:{sha: content.sha}}">{{content.name.substr(0, content.name.lastIndexOf('.'))}}</nuxt-link>
            </li>
          </ul>
          <p v-else>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../../config.js'
import marked from 'marked'
import Prism from 'prismjs'
import DocNav from '~/components/TypescriptDocsNav.vue'
import 'prismjs/plugins/custom-class/prism-custom-class.min.js'
export default {
  components: {
    DocNav
  },
  head () {
    return {
      title: 'Typescript ' + this.$route.params.slug
    }
  },
  data: ()=> ({
    content: '',
    contents: []
  }),
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
      let response = await fetch(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/git/blobs/${this.$route.query.sha}`, {
        headers: config.headers
      })
      this.content = await response.text()
    },
    async getContents () {
      let response = await fetch(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/contents/pages/${this.$route.params.slug}`, {
        headers: config.headers
      })
      this.contents = await response.json()
    }
  },
  created () {
    if (this.$route.query.sha) {
      this.getContent()
    } else {
      this.getContents()
    }
  }
}
</script>
