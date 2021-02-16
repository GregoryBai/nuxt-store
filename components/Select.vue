<template>
  <div class="select">
    <span class="select__text">Сортировать по: </span>
    <span class="select__value" @click="toggleDropdown">{{ value }}</span>
    <div
      v-if="dropVisible"
      class="dropdown__padding"
      @mouseleave="dropVisible = false"
    >
      <div class="select__dropdown">
        <p
          v-for="opt in options"
          :key="opt"
          class="select__option"
          @click="chooseOption"
        >
          {{ opt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'value', 'input'],

  data() {
    return { dropVisible: false }
  },

  methods: {
    toggleDropdown() {
      this.dropVisible = !this.dropVisible
    },
    chooseOption(e) {
      this.$emit('input', e.target.textContent.trim())
      this.dropVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  z-index: 2;
  font-size: 16px;
  position: relative;
  user-select: none;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }
}

.select__value {
  color: $font-secondary-color;
  position: relative;
  padding-right: 8px;

  &::after {
    position: absolute;
    right: 0;
    top: 11px;
    content: '';
    display: inline-block;
    background: no-repeat center url(~assets/svg/select_arrow.svg);
    width: 5px;
    height: 3px;
  }
}

.dropdown__padding {
  padding: 5px 10px 10px 10px;
  top: 28px;
  right: -10px;
  position: absolute;
  @media screen and (max-width: 768px) {
    position: static;
    padding: 0;
  }
}

.select__dropdown {
  padding: 8px 0;
  width: 160px;
  background: $main-color;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: auto;
    margin: 10px auto;
  }
}

.select__option {
  font-size: 14px;
  padding: 4px 12px;
  color: $font-secondary-color-light;

  &:hover {
    color: $font-primary-color;
    background-color: $secondary-color;
  }
}
</style>
