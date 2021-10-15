<template>
  <top-nav :q="q" />

  <!-- XXX: Extract TitleBar  -->
  <div class="hero is-small is-info">
    <div class="hero-body">
      <div class="title">
        {{ q || "Latest" }}
      </div>
    </div>
  </div>
  
  <images :q="q" />

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

  props: { q: { type: String, default: "" } },
};
</script>
