<template lang="pug">
  div.container
    .content {{window.atob(contents.content)}}
</template>

<script>
import config from '../config.js'
export default {
  async asyncData ({ app, params }) {
    const contents = await app.$axios.$get(`https://api.github.com/repos/${config.repo}/contents/${config.path}/${params.slug}?ref=${config.branch}`, {
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
