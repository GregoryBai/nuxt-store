<template>
  <header class="header">
    <p class="header__text">TestList</p>
    <div class="header__cart" @click="toggleCart">
      <span class="cart__number">{{ numberOfItems }}</span>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    numberOfItems() {
      return this.$store.getters.getCartItemsLength
    },
  },

  methods: {
    ...mapMutations(['toggleCart']),
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 66px;
  @include flex-center;
  justify-content: space-between;
  background-color: $main-color;
  position: sticky;
  padding: 0 108px 0 88px;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
}

.header__text {
  @include bold-font;
  color: $font-secondary-color;
  font-size: 22px;
}

.header__cart {
  position: relative;
  min-width: 24px;
  min-height: 26px;
  background: no-repeat center url(~assets/svg/cart.svg);
}

.cart__number {
  font-size: 8px;
  font-weight: bold;
  color: $font-contrast;
  text-align: center;
  line-height: 12px;
  display: inline-block;
  background-color: $icon-primary-color;
  position: absolute;
  top: -2px;
  right: -3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
