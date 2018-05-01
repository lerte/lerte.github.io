<template lang="pug">
  .container
    .content
      .columns
          .column.is-2
            doc-nav
          .column.is-10
            ul(v-if='contents')
              li(v-for='content in contents' :key='content.id')
                nuxt-link(:to='{path: "/typescript/"+content.name.split(".")[0], query:{sha: content.sha}}') {{content.name.split(".")[0]}}
            p(v-else) Loading...
</template>

<script>
import axios from 'axios'
import DocNav from '~/components/TypescriptDocsNav.vue'
export default {
  components: {
    DocNav
  },
  head () {
    return {
      title: 'Typescript Documentation'
    }
  },
  data () {
    return {
      contents: []
    }
  },
  methods: {
    async getContents () {
      let {data} = await axios.get(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/contents/pages/?ref=master`, {
        headers: {Accept: 'application/vnd.github.v3.raw+json'}
      })
      this.contents = data.filter((element) => {
        return element.type === 'file'
      })
    }
  },
  created () {
    this.getContents()
  }
}
</script>
