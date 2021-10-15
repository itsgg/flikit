<template>
  <top-nav />
  <div class="hero is-small is-info">
    <div class="hero-body">
      <div class="title">
        {{ q || "Latest" }}
      </div>
    </div>
  </div>
  <images v-bind:q="q" />
  <bottom-footer />
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import BottomFooter from "@/components/BottomFooter.vue";
import Images from "@/components/Images.vue";

export default {
  name: "Home",

  props: { q: { type: String } },

  components: {
    TopNav,
    BottomFooter,
    Images,
  },
};
</script>
