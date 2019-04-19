<template lang="pug">
.clock
  p {{ time }}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['time'])
  },

  methods: {
    startClock() {
      setInterval(() => this.updateTime(), 1000)
    },
    ...mapMutations(['updateTime'])
  },

  head() {
    return {
      title: this.time
    }
  },

  created() {
    this.startClock()
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono')

.clock
  p
    font-weight: bold
    font-family: 'IBM Plex Mono', sans-serif
</style>
