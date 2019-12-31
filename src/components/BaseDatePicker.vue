<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
          v-model="innerDate"
          label="Date"
          v-bind="$attrs">
        <template v-slot:append>
          <v-icon v-on="on">
            mdi-calendar-outline
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="innerDate" @input="menu = false"></v-date-picker>
  </v-menu>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'BaseDatePicker',
  props: {
    date: {
      time: String,
      required: true
    }
  },
  computed: {
    innerDate: {
      get () {
        return this.date
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
