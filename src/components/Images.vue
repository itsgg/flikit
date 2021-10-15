<template>
  <loader v-if="loading" />
  {{ images }}
</template>

<script>
import fetchJsonp from "fetch-jsonp";
import config from "@/config.js";

import Loader from "@/components/Loader.vue";

export default {
  name: "Images",

  components: {
    Loader,
  },

  data() {
    return {
      loading: false,
      images: [],
    };
  },

  beforeMount() {
    this.getImages();
  },

  methods: {
    async getImages() {
      this.loading = true;
      const query = new URLSearchParams({
        format: "json",
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
