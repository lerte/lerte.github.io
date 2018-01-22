<template lang="pug">
  div.wrapper
    header
      mHeader
    main
      nuxt
    footer
      mFooter
</template>

<style lang="stylus">
header
  box-shadow: 0px 0px 5px 1px
</style>

<script>
  import mHeader from '~/components/Header.vue'
  import mFooter from '~/components/Footer.vue'
  export default {
    components: {
      mHeader, mFooter
    }
  }
</script>
