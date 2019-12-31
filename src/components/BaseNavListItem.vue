<template>
  <v-divider v-if="item === 'divider'" />
  <v-subheader v-else-if="_.isString(item)" v-bind="$attrs">{{ item }}</v-subheader>
  <v-list-group v-else-if="_.some(item, _.isObject)" v-bind="$attrs" no-action>
    <template v-slot:activator>
      <v-list-item-icon v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ item.label }}</v-list-item-title>
    </template>
    <base-nav-list-item v-for="(child, index) in item.children" :item="child" :key="'z' + index" sub-group no-action />
  </v-list-group>
  <v-list-item v-else v-bind="$attrs" link :to="{name: item.to}">
    <v-list-item-icon v-if="item.icon">
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ item.label }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: 'BaseNavListItem',
  props: {
    item: {
      type: [Object, String]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
