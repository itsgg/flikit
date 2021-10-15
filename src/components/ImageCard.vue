<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image.media.m" :alt="image.title" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ image.title }}</p>
      <p class="subtitle is-6 has-text-primary">{{ authorName }}</p>
      <div class="tags" v-if="tagText.length > 0">
        <span v-for="tag in tags" :key="tag">
          <a @click="selectTag(tag)" class="tag mr-2">
            {{ tag }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",

  props: {
    image: { type: Object, required: true },
  },

  computed: {
    tagText() {
      return this.image.tags.trim();
    },
    tags() {
      return this.tagText.split(" ");
    },
    authorName() {
      // nobody@flickr.com (\"pipetpeacedream\") => pipetpeacedream
      return this.image.author.match(/"(.*?)"/g)[0].replace(/"/g, "");
    },
  },

  methods: {
    selectTag(tag) {
      this.$router.push({ name: "Home", query: { q: tag } });
    },
  },
};
</script>

<style scoped>
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tags {
  word-wrap: break-word;
}
</style>
