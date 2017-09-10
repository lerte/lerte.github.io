<template lang="pug">
  div.container
    nav.navbar
      div.navbar-brand
        div.navbar-burger.burger(data-target='navMenu', @click='isActive = !isActive')
          each val in [1,2,3]
            span
      div#navMenu.navbar-menu(:class="{'is-active': isActive}")
        div.navbar-start
          div.navbar-item.has-dropdown.is-hoverable
            nuxt-link.navbar-link.is-active(to='/front-end') 前端
            div.navbar-dropdown
              nuxt-link.navbar-item(to='/front-end/vue') Vue
              nuxt-link.navbar-item(to='/front-end/react') React
              nuxt-link.navbar-item(to='/front-end/angular') Angular
          nuxt-link.navbar-item(to='/sharing') 分享
          nuxt-link.navbar-item(to='/about-me') 关于
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
