export default {
  async created () {
    await this.loadData()
  },
  data () {
    return {
      loading: false,
      data: [],
      meta: {}
    }
  },
  methods: {
    async loadData () {
      this.loading = true
      try {
        const res = await this.getData()
        if (res.code === 0) {
          this.data = res.data
          this.meta = res.data
          this.loadSuccess()
        } else {
          this.$toast.warning(res.message)
          this.loadFail()
        }
      } catch (e) {
        // console.log(e)
      }
      this.loading = false
    },
    async getData () {},
    loadFail () {},
    loadSuccess () {}
  }
}
