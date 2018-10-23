<template>
  <div id="root">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from '@/components/Header.vue'
  import AppFooter from '@/components/Footer.vue'

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style src="./assets/stylesheet/application.scss" lang="scss"></style>
