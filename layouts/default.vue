<template>
  <div>
    <TheHeader />
    <TheCart v-if="false" />
    <TheMask v-if="false" />
    <div class="layout__wrapper">
      <TheNavbar class="wrapper__item--nav" />
      <main class="wrapper__item--content">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

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
  min-height: 100vh;
  background-color: $secondary-color;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
}

.layout__wrapper {
  display: flex;

  & .wrapper__item--nav {
    flex: 248px 0 1;
  }

  & .wrapper__item--content {
    flex: 1 1;
  }
}
</style>
