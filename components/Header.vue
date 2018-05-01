<template lang="pug">
  div.container
    nav.navbar
      div.navbar-brand(:class='{showMenu: isActive}')
        nuxt-link.navbar-item(to='/')
          img(src="/favicon.ico")
        a.navbar-item.is-hidden-desktop(href="//github.com/lerte/lerte.github.io" target="_blank")
          i.fa.fa-lg.fa-github
        div.navbar-burger.burger(data-target='navMenu', @click='isActive = !isActive', :class='{showMenu: isActive}')
          each val in [1,2,3]
            span
      div#navMenu.navbar-menu(:class="{'is-active': isActive}")
        div.navbar-start
          nuxt-link.navbar-item(to='/') Home
          nuxt-link.navbar-item(to='/typescript') Typescript
          nuxt-link.navbar-item(to='/about') About
        div.navbar-end
          a.navbar-item.is-hidden-mobile(href="//github.com/lerte/lerte.github.io" target="_blank")
            i.fa.fa-lg.fa-github
</template>

<style lang="stylus">
.navbar
  &-brand
    &.showMenu
      box-shadow: inset 0px -2px 0px 0px rgba(10,10,10,.1)
  &-burger
    span
      transition: .4s
    &.showMenu
      transform: rotate(90deg)
      span
        &:first-child
          margin-top: 5px
          transform: rotate(45deg) translate(0,0)
        &:nth-child(2)
          transform: scaleX(0)
        &:last-child
          margin-top: -5px
          transform: rotate(-45deg) translate(0,0)
</style>

<script>
  export default {
    watch: {
      $route () {
        this.isActive = false
      }
    },
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
