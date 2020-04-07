<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="innerValue"
        v-bind="$attrs">
        <template v-slot:append>
          <v-icon v-on="on">
            mdi-clock-outline
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-time-picker
      v-if="menu"
      v-model="innerValue"
      full-width />
  </v-menu>
</template>

<script>
import baseMixins from './baseMixins'

export default {
  name: 'TimeField',
  mixins: [baseMixins],
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>

</style>
