<template>
  <v-card :outlined="outlined" v-bind="$attrs" v-on="$listeners">
    <template v-for="(slotContent, slot) of $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
    <template v-slot:default>
      <v-card-title v-if="title">
        <slot name="title">
          {{ title }}
        </slot>
      </v-card-title>
      <component :is="noGutter ? 'template' : 'v-container'">
        <slot />
      </component>
    </template>
  </v-card>
</template>

<script>
import { VContainer } from 'vuetify/lib'
export default {
  name: 'Card',
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    noGutter: {
      type: Boolean,
      default: false
    }
  },
  components: { VContainer }
}
</script>

<style scoped>

</style>
