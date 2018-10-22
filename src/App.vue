<template>
  <div id="root">
    <div class="shell is-home">
      <AppHeader />

      <main class="main">
        <div class="view home">
          <router-view/>
        </div>
      </main>

      <AppFooter />

      <div class="overlay"></div>
    </div>
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
