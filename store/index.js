import { CATEGORIES_URL, CATEGORY_URL } from '~/assets/js/utils'

export const state = {
  categories: [],
  categoryItems: [],
  cartItems: [],
}

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  },
  setCategoryItems(state, payload) {
    state.categoryItems = payload
  },
  addCartItems(state, payload) {
    state.cartItems.push(payload)
  },
}

export const actions = {
  async getCategories({ commit }) {
    const categories = await fetch(CATEGORIES_URL).then((resp) => resp.json())
    commit('setCategories', categories)
  },
  async getCategoryItems({ commit }, catId) {
    const items = await fetch(CATEGORY_URL(catId)).then((resp) => resp.json())
    commit('setCategoryItems', items)
  },
}

export const getters = {
  getCategoryName(state) {
    return (catId) => {
      const category = state.categories.find((cat) => cat.id === Number(catId))

      return category.name
    }
  },

  getNCategoryItems(state) {
    return (number) => state.categoryItems.slice(0, number)
  },
}
