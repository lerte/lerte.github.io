<template lang="pug">
  div.wrapper
    header
      mHeader
    main
      nuxt
    footer
      mFooter
</template>
<script>
  import mHeader from '~/components/Header.vue'
  import mFooter from '~/components/Footer.vue'
  export default {
    components: {
      mHeader, mFooter
    }
  }
</script>
