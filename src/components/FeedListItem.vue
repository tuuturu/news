<template>
  <li class="FeedListItem">
    <img alt="" src="https://via.placeholder.com/300x100" />

    <h1>{{ item.title }}</h1>
    <h2>{{ item.source.name }} / {{ item.age }}</h2>
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
  text-align: left;
}

img {
  width: 100%;
}

h1 {
  font-size: 14pt;
}

h2 {
  font-size: 12pt;
}
</style>
