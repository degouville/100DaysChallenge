<template lang="pug">
.container
  clock.clock
</template>

<script>
import Clock from '~/components/Clock.vue'

export default {
  components: {
    Clock
  }
}
</script>

<style lang="sass">
.container
  margin: 0 auto
  display: flex
  height: 100vh
  justify-content: center
  align-items: center
  text-align: center
  font-size: 2em
  @media(min-width: 1000px)
    font-size: 10em
</style>
