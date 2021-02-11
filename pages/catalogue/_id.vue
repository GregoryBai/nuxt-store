<template>
  <div class="catalogue__items">
    <div class="items__sort">
      <Select
        :options="selectOptions"
        :value="selectValue"
        @input="handleSelect"
      />
    </div>
    <div class="item__output">
      <div v-for="item in items" :key="item.id" class="catalogue__item">x</div>
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
      return this.$store.getters.getNCategoryItems(12)
    },
  },

  created() {
    this.$store.dispatch('getCategoryItems', this.$route.params.id)
  },

  methods: {
    handleSelect(value) {
      this.selectValue = value
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
}

.catalogue__item {
  background-color: red;
  /* &:nth-child(1n + 13) {
    background-color: yellow;
    display: none;
  } */
}

.items__sort {
  display: flex;
  justify-content: flex-end;
}

.item__output {
  height: 100%;
  justify-content: center;
  align-content: start;
  display: grid;
  gap: 16px;
  grid-template-rows: repeat(auto-fit, 272px);
  grid-template-columns: repeat(auto-fit, 264px);
}
</style>
