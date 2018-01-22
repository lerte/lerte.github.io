<template lang="pug">
  div.container
    ul
      li(v-for='content in contents' :key='content.id')
        nuxt-link(:to='content.name') {{content.name}}
    p
      nuxt-link(to='/') Back to home
</template>

<script>
import config from '../config.js'
export default {
  async asyncData ({ app }) {
    const contents = await app.$axios.$get(`https://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`, {
      headers: config.headers
    })
    return { contents }
  }
}
</script>
