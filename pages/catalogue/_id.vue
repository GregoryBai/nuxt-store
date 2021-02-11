<template>
  <div class="catalogue__items">
    <div class="items__sort">
      <p class="sort__text">Сортировать по:</p>
      <select class="sort__select" :value="sortOptions[0]" @change="() => {}">
        <option v-for="option in sortOptions" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { CATEGORY_URL } from '~/assets/js/utils'

export default {
  data() {
    const data = []
    const sortOptions = [
      { name1: 'цене', text: 'По цене', value: 'price' },
      { name1: 'популярности', text: 'По популярности', value: 'popularity' },
    ]
    return {
      data,
      sortOptions,
    }
  },

  created() {
    fetch(CATEGORY_URL(this.$route.params.id))
      .then((resp) => resp.json())
      .then((data) => {
        this.data = data
        console.log(data)
      })
  },
}
</script>

<style lang="scss" scoped>
.catalogue__items {
  padding: 42px 88px 66px 49px;
}

.items__sort {
  display: flex;
  justify-content: flex-end;
}
.sort__text {
}
</style>
