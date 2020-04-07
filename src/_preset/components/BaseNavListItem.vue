<template>
  <v-divider inset v-if="item === 'divider'" />
  <v-subheader v-else-if="_.isString(item)" v-bind="$attrs">{{ item }}</v-subheader>
  <v-list-group v-else-if="_.some(item, _.isObject)" v-bind="$attrs" no-action>
    <template v-slot:activator>
      <slot name="left">
        <v-list-item-icon v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
      </slot>
      <slot>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </slot>
      <slot name="right">
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </slot>
    </template>
    <base-nav-list-item v-for="(child, index) in item.children" :item="child" :key="'z' + index" sub-group no-action />
  </v-list-group>
  <v-list-item v-else v-bind="$attrs" @click="$emit('click', item)">
    <slot name="left">
      <v-list-item-icon v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
    </slot>
    <slot>
      <v-list-item-title>{{ item.label }}</v-list-item-title>
    </slot>
    <slot name="right">
      <v-list-item-action>
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item-action>
    </slot>
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
