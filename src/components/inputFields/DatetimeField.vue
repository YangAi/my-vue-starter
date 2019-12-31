<template>
  <v-dialog v-model="display" :width="dialogWidth">
    <template v-slot:activator="{ on }">
      <text-field
        v-bind="$attrs"
        :field="field"
        v-model="formattedDatetime"
        v-on="on"
        @click.native="display = true"
        readonly />
    </template>

    <v-card>
      <v-card-text class="px-0 py-0">
        <v-tabs fixed-tabs v-model="activeTab">
          <v-tab key="calendar">
            <slot name="dateIcon">
              <v-icon v-if="!date">mdi-calendar</v-icon>
              <span v-else>{{ date }}</span>
            </slot>
          </v-tab>
          <v-tab key="timer" :disabled="dateSelected">
            <slot name="timeIcon">
              <v-icon v-if="time">mdi-clock-outline</v-icon>
              <span v-else>{{ time }}</span>
            </slot>
          </v-tab>
          <v-tab-item key="calendar">
            <v-date-picker flat v-model="date" v-bind="datePickerProps" @input="showTimePicker" full-width class="rounded-none elevation-0" />
          </v-tab-item>
          <v-tab-item key="timer">
            <v-time-picker
              ref="timer"
              class="v-time-picker-custom rounded-none elevation-0"
              v-model="time"
              v-bind="timePickerProps"
              full-width />
          </v-tab-item>
        </v-tabs>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <slot name="actions" :parent="this">
          <v-btn color="grey lighten-1" text @click.native="clearHandler">{{ clearText }}</v-btn>
          <v-btn color="green darken-1" text @click="okHandler">{{ okText }}</v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dayjs from 'dayjs'
import TextField from './TextField'
const DEFAULT_DATE = ''
const DEFAULT_TIME = '18:00:00'
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
const DEFAULT_TIME_FORMAT = 'HH:mm:ss'
const DEFAULT_DIALOG_WIDTH = 340
const DEFAULT_CLEAR_TEXT = 'CLEAR'
const DEFAULT_OK_TEXT = 'OK'
export default {
  name: 'BaseDatetimePicker',
  components: { TextField },
  model: {
    prop: 'datetime',
    event: 'input'
  },
  props: {
    field: {
      type: Object
    },
    datetime: {
      type: [Date, String],
      default: null
    },
    dialogWidth: {
      type: Number,
      default: DEFAULT_DIALOG_WIDTH
    },
    dateFormat: {
      type: String,
      default: DEFAULT_DATE_FORMAT
    },
    timeFormat: {
      type: String,
      default: 'HH:mm'
    },
    clearText: {
      type: String,
      default: DEFAULT_CLEAR_TEXT
    },
    okText: {
      type: String,
      default: DEFAULT_OK_TEXT
    },
    textFieldProps: {
      type: Object
    },
    datePickerProps: {
      type: Object
    },
    timePickerProps: {
      type: Object
    }
  },
  data () {
    return {
      display: false,
      activeTab: 0,
      date: DEFAULT_DATE,
      time: DEFAULT_TIME
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    dateTimeFormat () {
      return this.dateFormat + ' ' + this.timeFormat
    },
    defaultDateTimeFormat () {
      return DEFAULT_DATE_FORMAT + ' ' + DEFAULT_TIME_FORMAT
    },
    formattedDatetime () {
      return this.selectedDatetime ? dayjs(this.selectedDatetime).format(this.dateTimeFormat) : ''
    },
    selectedDatetime () {
      if (this.date && this.time) {
        let datetimeString = this.date + ' ' + this.time
        if (this.time.length === 5) {
          datetimeString += ':00'
        }
        return dayjs(datetimeString).toString()
      } else {
        return null
      }
    },
    dateSelected () {
      return !this.date
    }
  },
  methods: {
    init () {
      if (!this.datetime) {
        return
      }
      // let initDateTime
      // // if (this.datetime instanceof Date) {
      // //   initDateTime = this.datetime
      // // } else if (typeof this.datetime === 'string' || this.datetime instanceof String) {
      // //   // see https://stackoverflow.com/a/9436948
      // //   initDateTime = parse(this.datetime, this.dateTimeFormat, new Date())
      // // }
      this.date = dayjs(this.datetime).format(DEFAULT_DATE_FORMAT)
      this.time = dayjs(this.datetime).format(DEFAULT_TIME_FORMAT)
    },
    okHandler () {
      this.resetPicker()
      // this.$emit('input', this.selectedDatetime)
      this.$emit('input', this.formattedDatetime)
    },
    clearHandler () {
      this.resetPicker()
      this.date = DEFAULT_DATE
      this.time = DEFAULT_TIME
      this.$emit('input', null)
    },
    resetPicker () {
      this.display = false
      this.activeTab = 0
      if (this.$refs.timer) {
        this.$refs.timer.selectingHour = true
      }
    },
    showTimePicker () {
      this.activeTab = 1
    }
  },
  watch: {
    datetime: function () {
      this.init()
    }
  }
}
</script>
