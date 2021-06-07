import axios from 'axios'

import { parseRSS } from './rss.js'


const state = () => ({
  articles: [],
})

const actions = {
  async loadFromSources({ commit, dispatch }, sources) {
    const operations = []

    sources.map(source => operations.push(dispatch('loadSource', source)))

    const result = await Promise.all(operations)

    result.map(bundle => commit('articles', bundle))
  },
  async loadSource({ commit }, source) {
    const { data } = await axios.request({
      url: source.url,
      method: 'get',
    })

    const parsedData = parseRSS(data)

    parsedData.articles = parsedData.articles.map(article => {
      article.source = source

      return article
    })

    if(parsedData.articles) commit('articles', parsedData.articles)

    return parsedData
  },
}

const mutations = {
  articles(state, articles) {
    state.articles.push(...articles)
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
