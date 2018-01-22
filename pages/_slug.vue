<template lang="pug">
  div.container
    pre {{contents}}
</template>

<script>
import config from '../config.js'
export default {
  async asyncData ({ app, query }) {
    const contents = await app.$axios.$get(`https://api.github.com/repos/${config.repo}/git/blobs/${query.sha}`, {
      headers: config.headers
    })
    return { contents }
  },
  head () {
    return {
      title: this.$route.params.slug
    }
  }
}
</script>
