import { createStore } from 'vuex'

import articles from '~@/store/articles'
import source from '~@/store/source'

export default createStore({
  modules: {
    articles,
    source,
  }
})
