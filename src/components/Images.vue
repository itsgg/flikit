<template>
  {{ images }}
</template>

<script>
export default {
  name: "Images",

  data() {
    return {
      images: [
        {
          title: "One",
          src: "https://picsum.photos/id/237/200/300",
        },
        {
          title: "Two",
          src: "https://picsum.photos/id/238/200/300",
        },
      ],
    };
  },
};
</script>
