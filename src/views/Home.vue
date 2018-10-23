<template>
  <main class="view home">
    <slider ref="slider" :options="options">
      <slideritem v-for="(item, index) in itens" :key="index">
        <portfolio :client="item.client"
                   :cover="item.cover"
                   :year="item.year"
                   :team="item.team"
                   :type="item.type"
                   :url="item.url"
                   :tags="item.tags">
          {{ item.description }}
        </portfolio>
      </slideritem>
    </slider>
  </main>
</template>

<script>
  import axios from 'axios'
  import { slider, slideritem } from 'vue-concise-slider'
  import Portfolio from '@/components/Portfolio.vue'

  export default {
    data () {
      return {
        itens: null,
        options: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay: 5000,
          loop: true,
          direction: 'vertical',
          loopedSlides: 1,
          slidesToScroll: 1,
          timingFunction: 'ease',
          speed: 800,
          centeredSlides: false
        }
      }
    },
    components: {
      slider,
      slideritem,
      Portfolio
    },
    mounted () {
      setTimeout(() => {
        axios
          .get('/portfolio.json')
          .then(response => (this.itens = response.data.objects))
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped></style>
