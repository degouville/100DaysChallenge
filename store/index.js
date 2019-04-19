const currentDate = new Date()
const hexify = str => `#${str.replace(/:/g, '')}`
const rotateBySecs = date => `rotate(${(date.getSeconds() / 60) * 360}deg)`

export const state = () => ({
  currentDate
})

export const getters = {
  time: ({ currentDate }) => currentDate.toLocaleTimeString(),
  hexBackground: (state, { time }) => ({ background: hexify(time) }),
  timeRotation: ({ currentDate }) => ({ transform: rotateBySecs(currentDate) })
}

export const mutations = {
  updateTime(state) {
    state.currentDate = new Date()
  }
}
