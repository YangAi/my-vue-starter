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
          v-model="innerTime"
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
        v-model="innerTime"
        full-width
    ></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'BaseTimePicker',
  props: {
    time: {
      time: String,
      required: true
    }
  },
  computed: {
    innerTime: {
      get () {
        return this.time
      },
      set (val) {
        return this.$emit('update', val)
      }
    }
  },
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>

</style>
