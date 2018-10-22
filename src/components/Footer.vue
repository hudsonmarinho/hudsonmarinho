<template>
  <footer class="footer">
    <a class="footer-item" target="_blank" href="http://linkedin.com/in/hudsonmarinho">
      <img src="@/assets/images/v1/icons/linkedin.svg" alt="">
    </a>

    <a class="footer-item" target="_blank" href="http://twitter.com/hudsonmarinho">
      <img src="@/assets/images/v1/icons/twitter.svg" alt="">
    </a>

    <!--
    <a class="footer-item" href="#">
      <img src="@/assets/images/v1/icons/codepen.svg" alt="">
    </a>
    -->

    <a class="footer-item" target="_blank" href="http://github.com/hudsonmarinho">
      <img src="@/assets/images/v1/icons/github.svg" alt="">
    </a>

    <!-- <div class="footer-line"></div> -->
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
  .footer{
    width: 80px;
    padding: 0px 0px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;

    &-item{
      width: 100%;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease-in-out;

      &:hover{
        transform: scale(1.4);
      }

      &:not(:last-child){
      }
    }
  }
</style>
