<template lang="pug">
.container(:style='hexBackground')
  clock.clock(:style='timeRotation')
</template>

<script>
import Clock from '@/components/Clock.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Clock
  },

  computed: {
    ...mapGetters(['hexBackground', 'timeRotation'])
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

  .clock
    color: #FFF1
    width: 50%
    font-size: 2em
    @media(min-width: 1000px)
      font-size: 4em
</style>
