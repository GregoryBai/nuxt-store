<template>
  <div class="cart">
    <h3 class="cart__title">Корзина</h3>
    <p class="cart__text">Пока что вы ничего не добавили в корзину.</p>
    <button class="cart__button" type="button">Перейти к выбору</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cart {
  z-index: 100;
  background-color: $main-color;
  padding: 52px 48px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
}

.cart__title {
  font-size: 32px;
  font-weight: bold;
  align-self: start;
}

.cart__text {
  font-size: 22px;
}

.cart__button {
  @include button;
  width: 100%;
}
</style>
