<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ image.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",

  props: {
    image: { type: Object, required: true },
  },
};
</script>
