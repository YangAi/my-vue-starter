<template>
  <div class="content-list">
    <template v-if="loading">
      <slot name="loading">
        <v-skeleton-loader :type="skeletonLoader" v-for="i in n" :key="i" />
      </slot>
    </template>
    <template v-else-if="!_.isEmpty(list)">
      <slot :list="list" />
    </template>
    <template v-else>
      <v-container class="py-8">
        <slot name="emptyText">
          <div class="body-2 tw-text-gray-600">{{ emptyText }}</div>
        </slot>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BaseContentList',
  props: {
    loading: {
      type: Boolean
    },
    n: {
      type: Number,
      default: 3
    },
    skeletonLoader: {
      type: String,
      default: 'article'
    },
    emptyText: {
      type: String,
      default: 'There is no content here.'
    },
    list: {
      type: [Array, Object]
    }
  }
}
</script>

<style scoped>

</style>
