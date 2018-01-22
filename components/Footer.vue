<template lang="pug">
  div.container
    div.content.has-text-centered
      p &copy; Copyright {{currentYear}} Lerte All Rights Reserved.
</template>

<script>
  export default {
    data () {
      return {
        isActive: false,
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>
