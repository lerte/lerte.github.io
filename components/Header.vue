<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand" :class="{showMenu: isActive}">
        <nuxt-link class="navbar-item" to="/"><img src="/favicon.ico"/></nuxt-link>
        <div class="navbar-burger burger" data-target="navMenu" @click="isActive = !isActive" :class="{showMenu: isActive}"><span></span><span></span><span></span>
      </div>
      </div>
      <div class="navbar-menu" id="navMenu" :class="{'is-active': isActive}">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/typescript">Typescript</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        </div>
        <div class="navbar-end"><a class="navbar-item is-show-mobile" href="//github.com/lerte/lerte.github.io" target="_blank"><i class="fa fa-lg fa-github"></i></a></div>
      </div>      
    </nav>
  </div>
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
    data: ()=> ({
      isActive: false
    })
  }
</script>
