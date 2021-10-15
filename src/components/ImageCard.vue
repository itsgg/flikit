<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ image.title }}</p>
      <p class="subtitle is-6 has-text-primary">{{ authorName }}</p>
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
    authorName() {
      // nobody@flickr.com (\"pipetpeacedream\") => pipetpeacedream
      return this.image.author.match(/"(.*?)"/g)[0].replace(/"/g, "");
    },
  },
};
</script>
