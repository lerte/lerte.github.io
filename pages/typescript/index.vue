<template>
  <div class="container">
    <div class="content">
      <div class="columns">
        <div class="column is-2">
          <doc-nav></doc-nav>
        </div>
        <div class="column is-10">
          <ul v-if="contents.length">
            <li v-for="content in contents" :key="content.id">
              <nuxt-link :to="{path: &quot;/typescript/&quot;+content.name.split(&quot;.&quot;)[0], query:{sha: content.sha}}">{{content.name.split(".")[0]}}</nuxt-link>
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
  data: ()=> ({
    contents: []
  }),
  methods: {
    async getContents () {
      let response = await fetch(`https://api.github.com/repos/Microsoft/TypeScript-Handbook/contents/pages/?ref=master`, {
        headers: config.headers
      })
      const data = await response.json()
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
