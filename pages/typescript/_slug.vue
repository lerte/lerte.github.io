<template lang="pug">
  .container
    .content
      .columns
          .column.is-2
            doc-nav
          .column.is-10
            div.content(v-if='content')
              div.article(v-html='compiledMarkdown')
              div.backhome
                nuxt-link(to='/')
                  span.icon
                    i.fa.fa-home
                  span Back to home
            ul(v-else-if='contents')
              li(v-for='content in contents' :key='content.id')
                nuxt-link(:to='{path: content.name.split(".")[0], query:{sha: content.sha}}') {{content.name.split(".")[0]}}
            p(v-else) Loading...
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'
import DocNav from '~/components/TypescriptDocsNav.vue'
export default {
  components: {
    DocNav
  },
  head () {
    return {
      title: 'Typescript ' + this.$route.params.slug
    }
  },
  data () {
    return {
      content: '',
      contents: []
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
      let {data} = await axios.get(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/git/blobs/${this.$route.query.sha}`, {
        headers: {
          Accept: 'application/vnd.github.v3.raw+json'
        }
      })
      this.content = data
    },
    async getContents () {
      let {data} = await axios.get(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/contents/pages/${this.$route.params.slug}`, {
        headers: {Accept: 'application/vnd.github.v3.raw+json'}
      })
      this.contents = data
      // this.contents = data.filter((element) => {
      //   return element.type === 'file'
      // })
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
