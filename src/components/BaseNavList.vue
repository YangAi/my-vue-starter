<template>
  <v-list v-bind="$attrs">
    <base-nav-list-item
      v-for="(item, index) in list"
      :item="item"
      :key="index"
    />
  </v-list>
</template>

<script>
import BaseNavListItem from './BaseNavListItem'
export default {
  name: 'BaseNavList',
  components: { BaseNavListItem },
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
