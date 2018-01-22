<template lang="pug">
  div.container
    nav.navbar
      div.navbar-brand
        div.navbar-burger.burger(data-target='navMenu', @click='isActive = !isActive')
          each val in [1,2,3]
            span
      div#navMenu.navbar-menu(:class="{'is-active': isActive}")
        div.navbar-start
          nuxt-link.navbar-item(to='/') Home
          nuxt-link.navbar-item(to='/about') About
</template>

<script>
  export default {
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
