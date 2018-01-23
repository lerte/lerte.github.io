<template lang="pug">
  .container
    .content
        blockquote Just have a little faith.
        h3 Comprehensive Ability
        span HTML(Pug, Handlebars)
        progress.progress.is-small(value="95" max="100")
        span CSS(stylus sass)
        progress.progress.is-small(value="90" max="100")
        span JavasScript(TypeScript, Node.js, Vue.js, React etc.)
        progress.progress.is-small(value="70" max="100")
        span PHP(WordPress etc.)
        progress.progress.is-small(value="60" max="100")
        span Photoshop
        progress.progress.is-small(value="55" max="100")
        h3 System & Software
        p
            i.fa.fa-apple  Mac/
            i.fa.fa-linux  Linux/
            i.fa.fa-windows  Windows
        p Visual Studio Code, Sublime Text, Webstorm
        h3 Social
        p
            a(href='//github.com/lerte')
                i.fa.fa-github(aria-hidden='true')  Github
        p
            a(href='mailto:159274519@qq.com')
                i.fa.fa-envelope-open-o(aria-hidden='true')  159274519@qq.com
        h3 Favorite
        p 🎸 Guitar
        p 🎹 Piano
</template>

<script>
  export default {
    head () {
      return {
        title: 'About'
      }
    }
  }
</script>
