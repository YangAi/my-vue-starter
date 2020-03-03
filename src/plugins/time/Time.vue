<template>
    <v-tooltip small bottom v-if="tooltips" :tag="tag">
        <template v-slot:activator="{ on }">
            <span v-on="on">
                {{ date }}
                <slot />
            </span>
        </template>
        <span :class="textClass">{{ time }}</span>
    </v-tooltip>
    <component v-else :is="tag">
        {{ date }}
        <slot />
    </component>
</template>
<script>
import Time from './time'
import dayjs from 'dayjs'
export default {
  name: 'Time',
  props: {
    tooltips: {
      type: Boolean,
      default: true
    },
    time: {
      type: [Number, Date, String],
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    type: {
      type: String,
      validator (value) {
        return ['relative', 'date', 'datetime'].indexOf(value) > -1
      },
      default: 'relative'
    },
    interval: {
      type: Number,
      default: 60
    },
    textClass: {
      type: String
    }
  },
  mounted () {
    this.setTime()
    this.timer = setInterval(() => {
      this.setTime()
    }, 1000 * this.interval)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  },
  data () {
    return {
      date: ''
    }
  },
  methods: {
    setTime () {
      // const type = typeof this.time
      // this.date =
      // if (type === 'number') {
      //   const timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000
      //   time = (new Date(timestamp)).getTime()
      // } else if (type === 'object') {
      //   time = this.time.getTime()
      // } else if (type === 'string') {
      //   time = (new Date(this.time.replace(/-/g, '/'))).getTime()
      // }
      this.date = Time(dayjs(this.time), this.type)
    }
  }
}
</script>
