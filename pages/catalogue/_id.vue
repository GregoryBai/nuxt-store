<template>
  <div class="catalogue__items">
    <div class="items__sort">
      <Select v-model="selectValue" :options="selectOptions" />
    </div>
    <div class="item__output">
      <Card
        v-for="item in items"
        :key="item.id"
        class="catalogue__item"
        :img-url="item.photo"
        :price="item.price"
        :rating="item.rating"
        :name="item.name"
        @add-item="addItem(item)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    const selectOptions = ['цене', 'популярности']
    const selectValue = 'цене'
    return {
      selectValue,
      selectOptions,
    }
  },

  computed: {
    ...mapGetters(['getCategoryName']),

    items() {
      switch (this.selectValue) {
        case 'цене':
          return this.itemsByPrice
        case 'популярности':
          return this.itemsByPopularity
        default:
          return this.itemsDefault
      }
    },

    itemsDefault() {
      return this.$store.getters.getNCategoryItems(12)
    },
    itemsByPopularity() {
      return [...this.itemsDefault].sort((a, b) => b.rating - a.rating)
    },
    itemsByPrice() {
      return [...this.itemsDefault].sort((a, b) => b.price - a.price)
    },
  },

  created() {
    this.$store.dispatch('getCategoryItems', this.$route.params.id)
  },

  methods: {
    handleSelect(value) {
      this.selectValue = value
    },

    addItem(data) {
      this.$store.commit('addCartItems', data)
    },
  },
}
</script>

<style lang="scss" scoped>
.catalogue__items {
  height: 100%;
  padding: 42px 88px 0 49px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
}

.items__sort {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 34px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}

.item__output {
  height: 100%;
  justify-content: center;
  align-content: start;
  display: grid;
  gap: 16px 32px;
  grid-template-rows: repeat(auto-fit, 272px);
  grid-template-columns: repeat(auto-fit, 264px);
}
</style>
