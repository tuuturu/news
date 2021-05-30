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
      {
        title: "Something happened!",
        age: "6min",
        source: {
          name: "Aftenposten"
        }
      },
      {
        title: "Completely different",
        age: "1 day",
        source: {
          name: "Hacker News"
        }
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.Feed {
}
</style>
