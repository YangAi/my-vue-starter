<template>
  <v-list v-bind="$attrs">
    <base-nav-list-item
      v-for="(item, index) in list"
      :item="item"
      :key="index"
      @click.native = "$emit('click', item)"
    >
      <template v-slot:left>
        <slot :name="`${item.id}.left`" :item="item" />
      </template>
      <template v-slot:default>
        <slot :name="`${item.id}.main`" :item="item" />
      </template>
      <template v-slot:right>
        <slot :name="`${item.id}.right`" :item="item" />
      </template>
    </base-nav-list-item>
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
