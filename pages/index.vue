<template lang="pug">
  div.container
    ul
      li(v-for='content in contents' :key='content.id')
        nuxt-link(:to='{path: content.name, query:{sha: content.sha}}') {{content.name}}
</template>

<script>
import config from '../config.js'
import axios from 'axios'
export default {
  data () {
    return {
      contents: ''
    }
  },
  methods: {
    async getContents () {
      let {data} = await axios.get(`https://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`, {
        headers: config.headers
      })
      this.contents = data
    }
  },
  created () {
    this.getContents()
  }
}
</script>
