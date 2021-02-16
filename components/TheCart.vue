<template>
  <div class="cart">
    <div class="cart__header">
      <h3 class="cart__title">Корзина</h3>
      <div class="cart__close" @click="handleClose" />
    </div>
    <div v-if="cartEmpty && !orderSubmitted" class="cart__empty">
      <p class="empty__text">Пока что вы ничего не добавили в корзину.</p>
      <button class="empty__button" type="button" @click="toggleCart">
        Перейти к выбору
      </button>
    </div>
    <div v-else-if="!orderSubmitted" class="cart__filled">
      <p class="filled__text">Товары в корзине</p>
      <Card
        v-for="item in cartItems"
        :key="item.id + Math.random() * Math.random()"
        class="cart__item"
        :img-url="item.photo"
        :price="item.price"
        :rating="item.rating"
        :name="item.name"
        :in-cart="true"
        @remove-item="removeCartItem(item.id)"
      />

      <form class="cart__form" @submit.prevent="onSubmit">
        <input
          v-model="name"
          min="1"
          placeholder="Ваше имя"
          type="text"
          class="form__name"
        /><input
          v-model="tel"
          placeholder="Телефон"
          type="tel"
          class="form__tel"
        /><input
          v-model="address"
          min="5"
          placeholder="Адрес"
          class="form__address"
          type="text"
        />

        <button
          :disabled="!formFilled && warningVisible"
          type="submit"
          class="form__button"
        >
          Отправить
        </button>
        <div v-if="!formFilled && warningVisible" class="form__warning">
          <span class="warning__sign">!!</span>
          <p class="warning__text">
            Все поля обязательные.После удачной отправки формы содержимое
            корзины очищается
          </p>
        </div>
      </form>
    </div>

    <div v-else class="cart__submitted">
      <div class="submitted__emoji" />
      <h4 class="submitted__header">Заявка успешно отправлена</h4>
      <p class="submitted__text">Вскоре наш менеджер свяжется с Вами</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      warningVisible: false,
      orderSubmitted: false,
      name: '',
      tel: '',
      address: '',
    }
  },
  computed: {
    formFilled() {
      return this.name.trim() && this.tel.trim() && this.address.trim()
    },

    cartItems() {
      return this.$store.getters.getCartItems
    },
    numberOfItems() {
      return this.$store.getters.getCartItemsLength
    },

    cartEmpty() {
      return this.numberOfItems === 0
    },
  },

  methods: {
    ...mapMutations(['toggleCart', 'submitOrder', 'removeCartItem']),
    handleClose() {
      this.orderSubmitted = false
      this.warningVisible = false
      this.toggleCart()
    },

    onSubmit() {
      if (this.formFilled) {
        this.submitOrder()
        this.orderSubmitted = true
        this.warningVisible = false
      } else {
        this.warningVisible = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  @include scroll;
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

  @media screen and (max-width: 768px) {
    left: 0;
    width: auto;
  }
}

.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.cart__title {
  font-size: 32px;
  font-weight: bold;
  align-self: start;
}

.cart__close {
  background: center no-repeat url(~assets/svg/cross.svg);
  width: 14px;
  height: 14px;
}

.cart__form,
.cart__empty,
.cart__filled {
  gap: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  input {
    @include input;
  }

  .filled__text {
    color: $font-secondary-color;
    font-size: 18px;
  }

  .empty__text {
    font-size: 22px;
  }

  .empty__button {
    @include button;
    width: 100%;
  }

  .form__button {
    @include button;
    margin-bottom: 20px;
  }
}

.form__warning {
  width: 100%;
  display: flex;
  gap: 8px;

  .warning__sign {
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
    line-height: 100%;
    color: $icon-warning-color;
  }

  .warning__text {
  }
}

.cart__submitted {
  width: 100%;
  height: 100%;
  @include flex-center;
  flex-direction: column;
  gap: 2px;
  .submitted__emoji {
    background: center no-repeat url(~assets/img/ok_emoji.png);
    margin-bottom: 22px;
    min-height: 80px;
    min-width: 80px;
  }
  .submitted__header {
    font-weight: bold;
    font-size: 24px;
    color: $font-cart-color;
  }
  .submitted__text {
    font-size: 16px;
    color: $font-secondary-color;
  }
}
</style>
