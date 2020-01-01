<template>
  <v-dialog v-bind="$attrs">

  </v-dialog>
</template>

<script>
export default {
  name: 'BasePermissionDialog',
  props: {
    permission: {
      type: [Array, String],
      required: true
    }
  },
  async created () {
    if (this.$auth.permission) {}
  },
  data () {
    return {
      loading: true,
      verified: false
    }
  }
}
</script>

<style scoped>

</style>
