<template>
  <div class="container">
    <div class="content">
      <ul v-if="contents.length">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="{path: content.name.split(&quot;.&quot;)[0], query:{sha: content.sha}}">{{content.name.split(".")[0]}}</nuxt-link>
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import config from '../config.js'
export default {
  head () {
    return {
      title: 'Home'
    }
  },
  data: ()=> ({
    contents: []
  }),
  methods: {
    async getContents () {
      let response = await fetch(`https://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`, {
        headers: config.headers
      })
      this.contents = await response.json()
    }
  },
  created () {
    this.getContents()
  }
}
</script>
