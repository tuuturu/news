<template>
  <div class="Feed">
    <FeedList :items="items" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import FeedList from '~@/components/FeedList.vue'

export default {
  name: 'Feed',
  components: { FeedList },
  computed: {
    ...mapState('source', ['sources']),
    ...mapState('articles', ['articles']),
    items() {
      return this.articles.filter(article => !article.read)
    },
  },
  created() {
    this.$store.dispatch('articles/loadFromSources', this.sources)
  }
}
</script>

<style lang="scss" scoped>
.Feed {
}
</style>
