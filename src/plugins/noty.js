import { VNoty } from 'vue-noty-with-icon'
import 'noty/src/themes/mint.scss'

VNoty.mergeConfig({
  progressBar: false,
  withIcon: true,
  icon: {
    success: 'v-icon mdi mdi-check theme--dark',
    info: 'v-icon mdi mdi-information theme--dark',
    warning: 'v-icon mdi mdi-progress-alert theme--dark',
    alert: 'v-icon mdi mdi-alert theme--dark',
    error: 'v-icon mdi mdi-alert-circle theme--dark'
  }
})
export default VNoty
