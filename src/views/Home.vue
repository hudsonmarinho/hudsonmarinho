<template>
  <div class="portfolio">
    <slider ref="slider" :options="options">
      <slideritem v-for="(item, index) in itens" :key="index">
        <div class="portfolio-content">
          <figure class="portfolio-cover">
            <img :src="cover(item.cover)" :alt="item.client">
            <!-- <img src="@/assets/images/v1/portfolio/{{ item.cover }}" :alt="item.client"> -->
            <!-- <img src="'./images/v1/portfolio/' + item.cover" :alt="item.client"> -->
            <!-- <img src="~some-npm-package/foo.png" :alt="item.client"> -->
          </figure>

          <article class="portfolio-description">
            <div class="portfolio-date">{{ item.year }}</div>
            <div class="portfolio-type">{{ item.type }}</div>

            <div class="portfolio-text">{{ item.description }}</div>

            <div class="portfolio-details">
              <div class="portfolio-details-col">
                <div class="portfolio-tags">
                  <span><strong>Client:</strong> {{ item.client }}</span>
                  <span><strong>Team:</strong> {{ item.team }}</span>
                </div>
              </div>

              <div class="portfolio-details-col">
                <div class="portfolio-tags">
                  <span v-for="(tag, i) in item.tags.left" :key="i">#{{ tag }}</span>
                </div>
              </div>

              <div class="portfolio-details-col">
                <div class="portfolio-tags">
                  <span v-for="(tag, i) in item.tags.right" :key="i">#{{ tag }}</span>
                </div>
              </div>
            </div>

            <a class="portfolio-visit" target="_blank" :href="item.url">
              <span class="text-split">Visit site</span>

              <span class="text-arrow">
                <img class="portfolio-visit-arrow clone" src="@/assets/images/v1/icons/arrow.svg" role="presentation">
                <img class="portfolio-visit-arrow" src="@/assets/images/v1/icons/arrow.svg" role="presentation">
              </span>
            </a>
          </article>
        </div>
      </slideritem>

      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>

<script>
  import axios from 'axios'
  import { slider, slideritem } from 'vue-concise-slider'

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
      slideritem
    },
    mounted () {
      setTimeout(() => {
        axios
          .get('/portfolio.json')
          .then(response => (this.itens = response.data.objects))
      }, 1000)
    },
    methods: {
      cover (image) {
        return require(`../assets/images/v1/portfolio/${image}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .portfolio{
    width: 100%;
    height: 100%;
    padding: 0px;

    &-content{
      width: 100%;
      height: 100%;
      padding: 0px;
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-rows: auto;
      grid-column-gap: 20px;
      justify-items: end;
    }

    &-cover,
    &-description{
      padding: 0px;
      margin: 0 0;
    }

    &-cover{
      width: 100%;
      height: 100%;
      padding: 0px;
      margin: 0px;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-description{
      padding: 0px 0px;
      margin: 0px;
      line-height: 1.7;
      margin: 50px 0;
      width: 84%;
      color: #bdbdd5;
      font-size: .90rem;
      font-family: "Arimo";
    }

    &-date{
      margin-bottom: 8px;
      font-size: .625rem;
      transition: .5s;
    }

    &-type{
      font-size: .625rem;
      transition: .5s;
      text-transform: uppercase;
      color: #595971;
    }

    &-text{
      line-height: 1.7;
      margin: 50px 0;
      width: 90%;

      span{
        line-height: 1.1;
        margin: 4px 8px 4px 0;
        display: inline-block;
        overflow: hidden;
      }
    }

    &-details{
      width: 100%;
      display: flex;

      &-col{
        flex-basis: 33.32%;
      }
    }

    &-tags{
      letter-spacing: .8px;
      text-transform: uppercase;
      font-size: .625rem;

      strong{
        color: #595971;
      }

      span{
        display: block;
      }
    }

    &-visit{
      margin-top: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-family: Theinhardt, sans-serif;
      font-size: .875rem;
      line-height: 1;

      .text-arrow{
        position: relative;
        display: inline-block;
        overflow: hidden;
        margin-left: 15px;
        top: 1px;

        img{
          &.clone{
            position: absolute;
            top: 2px;
            left: 0;
            transform: translateX(-150%);
          }
        }
      }

      &:hover{
        .text-arrow{
          img{
            transition: .3s cubic-bezier(.77,0,.175,1);
            transform: translateX(100%);

            &.clone{
              transform: translateX(0);
              transition: .5s cubic-bezier(.77,0,.175,1) .1s;
            }
          }
        }
      }
    }
  }

  .slider-container{
    white-space: normal;
  }

  .slider-item{
    justify-content: inherit;
    text-align: inherit;
  }
</style>
