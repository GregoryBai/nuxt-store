<template>
  <div v-if="!inCart" class="card">
    <img src="~assets/img/bag.png" alt="catalogue item" class="card__img" />
    <p class="card__text">{{ name.toLowerCase() }}</p>
    <p class="card__price">{{ price }} ₽</p>
    <div class="card__rating">
      <span class="rating__icon"><CardStarIcon /></span>
      <span class="rating__score"> {{ rating }}</span>
    </div>
    <span class="card__add" @click="handleCartClick"> <CardCartIcon /> </span>
  </div>
  <div v-else class="card--cart">
    <img src="~assets/img/bag.png" alt="catalogue item" class="card__img" />
    <div class="card__description">
      <p class="card__text">{{ name.toLowerCase() }}</p>
      <p class="card__price">{{ price }} ₽</p>
      <div class="card__rating">
        <span class="rating__icon"><CardStarIcon /></span>
        <span class="rating__score"> {{ rating }}</span>
      </div>
    </div>
    <span class="card__remove" @click="handleRemove"> <CardBinIcon /> </span>
  </div>
</template>

<script>
export default {
  props: [
    'img-url',
    'price',
    'rating',
    'name',
    'add-item',
    'in-cart',
    'remove-item',
  ],

  methods: {
    handleCartClick() {
      this.$emit('add-item')
    },

    handleRemove() {
      this.$emit('remove-item')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background: $main-color;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  & {
    padding: 18px 16px 16px 16px;
    position: relative;
    height: 264px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card__img {
      height: 180px;
      margin-bottom: 16px;
    }

    .card__text {
      align-self: flex-start;
      font-size: 14px;
      color: $font-secondary-color;
      text-transform: capitalize;
      margin-bottom: 6px;
    }

    .card__price {
      align-self: flex-start;
      font-size: 14px;
      font-weight: 700;
      color: $font-primary-color;
    }

    .card__rating {
      position: absolute;
      top: 20px;
      left: 20px;

      .rating__score {
        color: $icon-accent-color;
      }
    }

    .card__add {
      position: absolute;
      color: $icon-primary-color;
      top: 18px;
      right: 18px;
      user-select: none;
      @include transition;

      &:hover {
        color: $font-cart-color;
      }
    }
  }

  &--cart {
    padding: 12px 22px;
    display: flex;
    justify-content: space-between;
    gap: 22px;

    align-items: center;

    .card__img {
      max-height: 90px;
    }

    .card__description {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 0 1 170px;
      gap: 6px;
      height: 100%;

      .card__text {
        justify-self: flex-start;
        font-size: 14px;
        color: $font-secondary-color;
        text-transform: capitalize;
        margin-bottom: 6px;
      }

      .card__price {
        font-size: 14px;
        font-weight: 700;
        color: $font-primary-color;
      }

      .card__rating {
        position: absolute;
        bottom: 0;
        justify-self: flex-end;
        @media screen and (max-width: 768px) {
          position: static;
        }
        .rating__score {
          color: $icon-accent-color;
        }
      }
    }

    .card__remove {
      color: $icon-primary-color;
      user-select: none;
      @include transition;

      &:hover {
        color: $font-cart-color;
      }
    }
  }
}
</style>
