export default {
  props: {
    field: {
      type: Object
    },
    value: {
      required: true
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
