<template>
  <header class="header">
    <nav class="nav">
      <h1 class="header-title">
        <router-link to="/">
          hudsonmarinho.
          <span>front end developer</span>
        </router-link>
      </h1>

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

<style lang="scss" scoped>
  .header{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 30px 0;
    transform: translateZ(0);
    z-index: 1000;
  }

  .nav{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-family: "Theinhardt", sans-serif;
  }

  .header-title,
  .mobile-header-title{
    font-size: .875rem;
    line-height: 1;
    font-weight: 400;
    margin-right: auto;

    span{
      display: inline-block;
      margin-left: 5px;
      color: #63637e;
    }
  }
</style>
