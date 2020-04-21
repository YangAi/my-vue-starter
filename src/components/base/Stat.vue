<template>
  <v-list-item two-line color="tw-py-0">
    <v-list-item-content>
      <v-list-item-title>
        <g-number v-bind="$attrs" number-class="tw-text-xl" />
      </v-list-item-title>
      <v-divider class="tw-mt-1 tw-mb-2 tw-border-t-2" style="max-width: 24px" />
      <v-list-item-subtitle class="tw-text-xs tw-font-bold">{{ label }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action v-if="icon">
      <v-btn icon small>
        <v-icon small>{{ iconClass }}</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'Stat',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: 'mdi-chevron-right'
    }
  }
}
</script>

<style scoped>

</style>
