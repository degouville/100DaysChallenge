<template lang="pug">
.clock
  p {{ time }}
</template>

<script>
export default {
  data() {
    return {
      time: ''
    }
  },

  head() {
    return {
      title: this.time
    }
  },

  methods: {
    startClock() {
      setInterval(() => this.updateTime(), 1000)
    },
    updateTime() {
      this.time = new Date().toLocaleTimeString()
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
