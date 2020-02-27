<template>
  <v-app fluid class="md:tw-h-full">
    <section class="white tw-flex tw-flex-wrap md:tw-h-full">
      <div class="tw-bg-gray-600 tw-h-64 md:tw-h-full tw-w-full md:tw-w-1/2">
        <v-img src="https://area.sinaapp.com/bingImg/" class="tw-bg-gray-600 tw-h-64 md:tw-h-full" />
      </div>
      <div class="tw-w-full md:tw-w-1/2">
        <router-view />
        <router-link :to="{'name': 'Home.Index'}" class="caption tw-absolute tw-bottom-0 tw-flex tw-items-center tw-text-gray-600 tw-mb-8 tw-ml-4"><v-icon small class="mr-2 tw-text-gray-600">mdi-arrow-left</v-icon> Back to Homepage</router-link>
      </div>
    </section>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style></style>
