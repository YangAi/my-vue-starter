export default {
  userCapacity: state => {
    return Math.round(state.networkCapacity / state.networkCapacity)
  }
}
