<template>
  <top-nav />

  <div class="content">
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <i class="fas fa-search"></i>
  </div>

  <bottom-footer />
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import BottomFooter from "@/components/BottomFooter.vue";

export default {
  name: "Home",

  components: {
    TopNav,
    BottomFooter
  },
};
</script>
