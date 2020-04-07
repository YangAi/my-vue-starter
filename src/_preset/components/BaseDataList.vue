<template>
  <v-data-iterator
    :items="items === 'loading' ? [] : items"
    :loading="items === 'loading'"
  >
    <template v-slot:default="props">
      <slot :items="props.items" />
    </template>
    <template v-slot:loading>
      <slot name="loading">
        <v-skeleton-loader :type="loadingType" v-for="n in 4" :key="n" />
      </slot>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  name: 'BaseDataList',
  props: {
    items: {
      type: [Array, String]
    },
    loadingType: {
      type: [Array, String],
      default: 'list-item-avatar-three-line'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
