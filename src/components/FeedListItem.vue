<template>
  <li class="FeedListItem">
    <h1>{{ item.title }}</h1>
  </li>
</template>

<script>
export default {
  name: 'FeedListItem',
  props: {
    item: {
      type: Object,
    }
  },
}
</script>

<style lang="scss" scoped>
.FeedListItem {
}
</style>
