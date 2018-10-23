<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/">
        <span>h</span>udsonmarinho.
        <small>front end developer</small>
      </router-link>
    </h1>

    <nav class="menu">
      <span></span>

      <NavItem name="work" href="/" />
      <NavItem name="lab" href="lab" />
      <NavItem name="about" href="about" />
    </nav>
  </header>
</template>

<script>
  import NavItem from '@/components/NavItem.vue'

  export default {
    components: {
      NavItem
    }
  }
</script>

<style lang="scss" scoped></style>
