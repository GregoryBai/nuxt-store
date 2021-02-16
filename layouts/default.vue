<template>
  <div class="layout__root">
    <TheHeader />
    <TheCart v-if="cartVisible" />
    <TheMask v-if="cartVisible" />
    <div class="layout__wrapper">
      <TheNavbar class="layout__nav" />
      <main class="layout__content">
        <Nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cartVisible']),
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  @include main-font;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: $secondary-color;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  @include scroll;
}
.layout__root {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.layout__wrapper {
  display: flex;
  flex: 1 1 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & .layout__nav {
    flex: 0 1 248px;
  }

  & .layout__content {
    flex: 1 1 auto;
  }
}
</style>
