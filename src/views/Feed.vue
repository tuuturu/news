<template>
  <div class="Feed">
    <FeedList :items="items" />
  </div>
</template>

<script>
import FeedList from '~@/components/FeedList.vue'

export default {
  name: 'Feed',
  components: { FeedList },
  data: () => ({
    items: [
      {title: "Something happened!"}
    ]
  })
}
</script>

<style lang="scss" scoped>
.Feed {
}
</style>
