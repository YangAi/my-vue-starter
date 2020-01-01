<template>
  <v-avatar v-bind="$attrs" class="tw-bg-gray-200">
    <img v-if="self && !_.isEmpty($auth.user.avatar)" :src="$auth.user.avatar" />
    <img v-else-if="!_.isEmpty(img)" :src="img" />
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
