<template>
  <v-app>
    <v-navigation-drawer
        v-model="layout.drawer"
        app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        color="indigo"
        dark
        fade-img-on-scroll
    >
      公司现金：
      <v-card light class="px-4">
        <g-number :number="$store.state.company.cash" prefix="¥" />
      </v-card>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="layout.drawer = !layout.drawer" />
    </v-app-bar>

    <v-content>
      <router-view ref="content" :game="gameOutput" />
    </v-content>

    <v-btn fab dark class="tw-fixed" style="bottom: 48px; right: 16px" @click="time.stop = !time.stop">
      <v-icon color="white">
        {{ time.stop ? 'mdi-play' : 'mdi-pause' }}
      </v-icon>
    </v-btn>

    <v-footer
        color="indigo"
        class="tw-items-center"
        app
    >
      <v-spacer />
      <v-card class="tw-px-2">
        {{ gameOutput.date }}
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'DefaultLayout',
  created () {
    this.date = dayjs('2000-01-01')
  },
  computed: {
    formatedDate () {
      return dayjs(this.date).format('YYYY年MM月DD日')
    },
    gameOutput () {
      return {
        date: this.formatedDate
      }
    }
  },
  data () {
    return {
      layout: {
        drawer: false
      },
      time: {
        stop: true,
        instance: ''
      },
      instance: '',
      timeStop: false,
      date: ''
    }
  },
  watch: {
    'time.stop': {
      handler: function (val) {
        if (!val) {
          this.startTime()
        } else {
          this.stopTime()
        }
      },
      immediate: true
    }
  },
  methods: {
    timer () {
      this.time.instance = setInterval(() => {
        // this.$refs.content.nextDay()
        this.date = dayjs(this.date).add(1, 'month')
      }, 1000)
    },
    startTime () {
      this.timer()
    },
    stopTime () {
      if (this.time.instance) {
        clearInterval(this.time.instance)
      }
    }
  }
}
</script>

<style scoped>

</style>
