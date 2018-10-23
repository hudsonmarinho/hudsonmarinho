<template>
  <div class="portfolio">
    <figure class="portfolio-cover">
      <img :src="background(cover)" :alt="client">
    </figure>

    <section class="portfolio-description">
      <h2 class="portfolio-title">{{ client }}</h2>

      <div class="portfolio-desktop">
        <div class="portfolio-date">{{ year }}</div>
        <div class="portfolio-type">{{ type }}</div>

        <article class="portfolio-text">
          <slot></slot>
        </article>

        <div class="portfolio-details">
          <div class="portfolio-details-col">
            <div class="portfolio-tags">
              <span><strong>Client:</strong> {{ client }}</span>
              <span><strong>Team:</strong> {{ team }}</span>
            </div>
          </div>

          <div class="portfolio-details-col">
            <div class="portfolio-tags">
              <span v-for="(tag, i) in tags.left" :key="i">#{{ tag }}</span>
            </div>
          </div>

          <div class="portfolio-details-col">
            <div class="portfolio-tags">
              <span v-for="(tag, i) in tags.right" :key="i">#{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <a class="portfolio-visit" target="_blank" :href="url">
        <span class="text-split">Visit site</span>

        <span class="text-arrow">
          <img class="portfolio-visit-arrow clone" src="@/assets/images/v1/icons/arrow.svg" role="presentation">
          <img class="portfolio-visit-arrow" src="@/assets/images/v1/icons/arrow.svg" role="presentation">
        </span>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Portfolio',
    props: {
      client: String,
      cover: String,
      year: Number,
      team: String,
      type: String,
      url: String,
      tags: Array
    },
    methods: {
      background (image) {
        return require(`../assets/images/v1/portfolio/${image}`)
      }
    }
  }
</script>

<style lang="scss" scoped></style>
