<template>
  <v-container>
    <v-row dense>
      <v-col :cols="6">
        <g-card no-gutter title="市场数据" image-keyword="mosaic">
          <v-row>
            <v-col :cols="6">
              <g-stat label="城市人口" :number="$store.state.city.population.total" unit="人" icon />
            </v-col>
            <v-col :cols="6">
              <g-stat label="互联网率" :number="$store.getters['city/internetRate']" unit="%" icon />
            </v-col>
            <v-col :cols="6">
              <g-stat label="网络质量指数" :number="$store.getters['city/internetQualityIndex']" icon />
            </v-col>
          </v-row>
        </g-card>
      </v-col>
      <v-col :cols="6">
        <g-card no-gutter title="城市数据" image-keyword="mosaic">
          <v-row dense>
            <v-col :cols="6">
              <g-stat label="城市人口" :number="$store.state.city.population.total" unit="人" />
            </v-col>
            <v-col :cols="6">
              <g-stat label="互联网率" :number="$store.getters['city/internetRate']" unit="%" />
            </v-col>
            <v-col :cols="6">
              <g-stat label="网络质量指数" :number="$store.getters['city/internetQualityIndex']" />
            </v-col>
          </v-row>
        </g-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="6">
        <g-card title="操作面板">
          <g-slider v-model="price" label="每月订阅价格" unit="元" />
          <g-slider v-model="networkQuality" label="网络带宽质量" />
          <g-slider v-model="maintenanceQuality" label="售后和客服支出" />
        </g-card>
      </v-col>
      <v-col :cols="6">
        <g-card title="基础设施">
          <div>
            <v-list-item two-line class="tw-pl-0">
              <v-list-item-content>
                <v-list-item-title>网络工人数量</v-list-item-title>
                <v-list-item-subtitle>雇佣和解雇工人需要10000元一次性支出</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <g-btn icon @click="$store.dispatch('telecom/cutDownEmployee')">
              <v-icon>mdi-minus</v-icon>
            </g-btn>
            <g-number :number="$store.state.telecom.employee" unit="人" class="tw-mx-4" />
            <g-btn icon @click="$store.dispatch('telecom/recruitEmployee')">
              <v-icon>mdi-plus</v-icon>
            </g-btn>

          </div>
          <v-item-group>
          </v-item-group>
          <g-slider v-model="infrastructureRate" label="基础设施投资" />
        </g-card>
      </v-col>
    </v-row>
    <slot name="append" />
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    console.log(this.$refs.test)
  },
  computed: {
    price: {
      get () {
        return this.$store.state.telecom.price
      },
      set (val) {
        this.$store.dispatch('telecom/setPrice', val)
      }
    },
    networkQuality: {
      get () {
        return this.$store.state.telecom.networkQuality
      },
      set (newNetworkQuality) {
        this.$store.dispatch('telecom/setNetworkQuality', newNetworkQuality)
      }
    },
    maintenanceQuality: {
      get () {
        return this.$store.state.telecom.maintenanceQuality
      },
      set (newMaintenanceQuality) {
        this.$store.dispatch('telecom/setMaintenanceQuality', newMaintenanceQuality)
      }
    },
    infrastructureRate: {
      get () {
        return this.$store.state.telecom.infrastructureRate
      },
      set (newInfrastuctureRate) {
        this.$store.dispatch('telecom/setInfrastructureRate', newInfrastuctureRate)
      }
    }
  },
  methods: {
    yes (e) {
      console.log(this.$refs.test)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
