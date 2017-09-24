<template lang="pug">
  div.container
    pre {{contents}}
</template>

<script>
export default {
  async asyncData ({ app }) {
    const contents = await app.$axios.$get('https://api.github.com/repos/lerte/lerte.github.io/contents/content?ref=blog')
    return { contents }
  },
  methods: {
    getListUrl () {

    }
  }
}
</script>
