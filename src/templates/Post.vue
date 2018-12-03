<template>
  <Layout>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title,
    description,
    image,
    content
  }
}
</page-query>

<script>
import config from '../.temp/config';

export default {
  metaInfo() {
    return {
      meta: [
        // OpenGraph data (Most widely used)
        { property: 'og:title', content: this.$page.post.title },
        { property: 'og:site_name', content: config.titleTemplate },
        // The list of types is available here: http://ogp.me/#types
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: `${config.siteUrl}${this.$route.path}` },
        { property: 'og:image', content: this.$page.post.image },
        // Often the same as your meta description, but not always.
        { property: 'og:description', content: this.$page.post.description },

        // Twitter card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: `${config.siteUrl}${this.$route.path}` },
        { name: 'twitter:title', content: this.$page.post.title },
        { name: 'twitter:description', content: this.$page.post.image },

        // Google / Schema.org markup:
        { itemprop: 'name', content: this.$page.post.title },
        { itemprop: 'description', content: this.$page.post.image },
        { itemprop: 'image', content: this.$page.post.image }
      ]
    }
  },
  created() {
    console.log(this)
  }
};
</script>
