<template>
  <transition mode="out-in" name="fade">
    <div class="mask" />
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mask {
  z-index: 2;
  background-color: $mask-color;
  opacity: $mask-opacity;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
