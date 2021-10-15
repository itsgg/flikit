<template>
  <loader v-if="loading" />

  <not-found v-if="!loading && notFound" />

  <div v-if="!loading && !notFound" class="card-grid m-4">
    <div v-for="image in images" :key="image.link">
      <image-card :image="image" />
    </div>
  </div>
</template>

<script>
import fetchJsonp from "fetch-jsonp";
import config from "@/config.js";

import Loader from "@/components/Loader.vue";
import NotFound from "@/components/NotFound.vue";
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: "Images",

  components: {
    Loader,
    NotFound,
    ImageCard,
  },

  props: { q: { type: String, default: "" } },

  data() {
    return {
      loading: false,
      images: [],
    };
  },

  computed: {
    notFound() {
      return this.images.length === 0;
    },
  },

  watch: {
    q() {
      this.getImages();
    },
  },

  beforeMount() {
    this.getImages();
  },

  methods: {
    async getImages() {
      this.loading = true;
      const query = new URLSearchParams({
        format: "json",
        tags: this.q,
      });
      const response = await fetchJsonp(`${config.apiUrl}?${query}`, {
        jsonpCallbackFunction: "jsonFlickrFeed",
        mode: "no-cors",
      });
      const { items } = await response.json();
      this.images = items;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 1rem;
}
</style>
