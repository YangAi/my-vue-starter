<template>
  <v-avatar v-bind="$attrs" class="tw-bg-gray-300" :size="size">
    <v-img v-if="self && $auth.user.avatar" :src="$auth.user.avatar + '?imageView2/1/w/' + size*2 + '/h/' + size*2" class="tw-bg-gray-600" />
    <v-img v-else-if="img" :src="img + '?imageView2/1/w/' + size*2 + '/h/' + size*2" class="tw-bg-gray-600" />
    <v-icon v-else class="tw-text-gray-500">mdi-account</v-icon>
  </v-avatar>
</template>

<script>
export default {
  name: 'BaseAvatar',
  props: {
    img: {
      type: String,
      default: ''
    },
    self: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 48
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
