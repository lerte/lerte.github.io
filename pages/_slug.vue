<template lang="pug">
  div.container
    pre {{contents}}
    p
      nuxt-link(to='/') Back to home
</template>

<script>
import config from '../config.js'
import axios from 'axios'
export default {
  head () {
    return {
      title: this.$route.params.slug
    }
  },
  data () {
    return {
      contents: ''
    }
  },
  methods: {
    async getContents () {
      let {data} = await axios.get(`https://api.github.com/repos/${config.repo}/git/blobs/${this.$route.query.sha}`, {
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
