<template>
  <v-card :outlined="outlined" v-bind="$attrs" v-on="$listeners">
    <template v-for="(slotContent, slot) of $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
    <template v-slot:default>
      <v-img v-if="imageSrc" :src="imageSrc" :height="imgHeight" gradient="to right, rgba(0,0,0,0.4), rgba(0,0,0,0)">
        <v-card-title v-if="title" class="tw-absolute tw-bottom-0 tw-text-white tw-leading-none">
          <slot name="title">
            {{ title }}
          </slot>
        </v-card-title>
      </v-img>
      <v-card-title v-else-if="title">
        <slot name="title">
          {{ title }}
        </slot>
      </v-card-title>
      <component :is="noGutter ? 'div' : 'v-container'">
        <slot />
      </component>
    </template>
  </v-card>
</template>

<script>
import { VContainer } from 'vuetify/lib'
export default {
  name: 'Card',
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    imageKeyword: {
      type: String
    },
    noGutter: {
      type: Boolean,
      default: false
    },
    imgHeight: {
      type: [Number, String],
      default: '100px'
    }
  },
  components: { VContainer },
  computed: {
    imageSrc () {
      return this.imageKeyword ? this.$utils.getRandomImage(this.imageKeyword) : this.src
    }
  }
}
</script>

<style scoped>

</style>
