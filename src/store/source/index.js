

const state = () => ({
  sources: [
    {
      name: "Hacker News",
      url: "https://news.ycombinator.com/rss"
    }
  ],
})

const actions = {
  add({ commit }, name, url) {
    commit('addSource', {
      name: name,
      url: url,
    })
  },
}

const mutations = {
  addSource(state, source) {
    state.sources.push(source)
  }
}

const getters = {}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}
