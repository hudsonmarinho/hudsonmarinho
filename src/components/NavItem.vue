<template>
  <div class="nav-item">
    <router-link :to="href">
      <span class="nav-item-copy nav-item-copy--base">{{ name }}</span>
      <span class="nav-item-copy nav-item-copy--clone">{{ name }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    props: {
      name: String,
      href: String
    }
  }
</script>

<style lang="scss" scoped>
  .nav-item{
    flex-basis: 16.66%;
    position: relative;

    a{
      display: inline-block;
      padding: 5px;
      position: relative;
      line-height: 1;
      will-change: transform;

      &:after{
        display: block;
        opacity: 0;
        content: "";
        position: absolute;
        top: 50%;
        right: -10px;
        margin-top: -3px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #f68b9d;
        transition: .35s;
        transform: scale(0);
      }

      &.router-link-exact-active{
        &:after{
          opacity: 1;
          transform: scale(1);
        }
      }

      .nav-item-copy{
        display: inline-block;
        transition: .3s cubic-bezier(.215,.61,.355,1);
        pointer-events: none;

        &--clone{
          padding: 5px;
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
          opacity: 0;
          visibility: hidden;
        }
      }

      &:hover{
        & .nav-item-copy--base{
          opacity: 0;
          visibility: hidden;
          transform: translateY(-100%);
        }

        & .nav-item-copy--clone{
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }
  }
</style>
