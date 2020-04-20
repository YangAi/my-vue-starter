<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <g-card title="城市数据">
          ,
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
          <v-item-group>
            <g-btn @click="$store.dispatch('telecom/recruitEmployee')">雇佣工人</g-btn>
            <g-btn @click="$store.dispatch('telecom/cutDownEmployee')">裁员</g-btn>
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
