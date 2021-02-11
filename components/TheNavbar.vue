<template>
  <nav class="nav">
    <h1 class="nav__header">Каталог</h1>
    <ul class="nav__links">
      <li v-for="link in navLinks" :key="link.id">
        <NuxtLink :to="`/catalogue/${link.id}`" class="nav__link">{{
          link.name
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { CATEGORIES_URL } from '~/assets/js/utils'

export default {
  data() {
    const navLinks = []
    return { navLinks }
  },
  async created() {
    this.navLinks = await fetch(CATEGORIES_URL).then((resp) => resp.json())
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__header {
  margin-top: 32px;
  font-size: 32px;
  color: $font-primary-color;
}

.nav__links {
  list-style: none;
  margin-top: 24px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.nav__link {
  @include link-active;
  color: $link-visited-color;
  &:hover {
    color: $link-to-visit-color;
  }

  &.nuxt-link-active {
    color: $link-active-color;
    border-bottom: 1px solid $link-active-color;

    &:hover {
      color: $link-active-color;
    }
  }
}
</style>
