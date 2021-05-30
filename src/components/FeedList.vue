<template>
  <ul class="FeedList">
    <FeedListItem v-for="item in items" :key="item.title" :item="item" />
  </ul>
</template>

<script>
import FeedListItem from '~@/components/FeedListItem.vue'

export default {
  name: 'FeedList',
  props: {
    items: {
      type: Array,
      required: true,
      default: [],
    },
  },
  components: { FeedListItem },
}
</script>

<style lang="scss" scoped>
.FeedList {
}
</style>
