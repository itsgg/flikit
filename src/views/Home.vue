<template>
  <top-nav />
  <images />
  <bottom-footer />
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import BottomFooter from "@/components/BottomFooter.vue";
import Images from "@/components/Images.vue";

export default {
  name: "Home",

  components: {
    TopNav,
    BottomFooter,
    Images,
  },
};
</script>
