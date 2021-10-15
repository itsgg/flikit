<template>
  <div class="card">
    <div class="card-content">
      {{ image }}
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
