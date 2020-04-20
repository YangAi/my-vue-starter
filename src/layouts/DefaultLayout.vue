<template>
  <v-app id="inspire">
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
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        {{'城市模拟'}}
      </v-toolbar-title>
      <v-spacer />
      <v-btn @click="time.stop = !time.stop">{{ time.stop ? '继续' : '暂停' }}游戏</v-btn>
    </v-app-bar>

    <v-content>
      <router-view ref="content" :game="gameOutput" />
    </v-content>

    <v-footer
        color="indigo"
        app
    >
      <v-spacer />
      <span class="white--text">&copy; {{ gameOutput.date }}</span>
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
