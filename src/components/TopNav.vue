<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item" id="logo">
        flikit
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <search-bar v-bind:q="q" />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "TopNav",

  props: {
    q: { type: String },
  },

  components: {
    SearchBar,
  },
};
</script>

<style scoped>
#logo {
  font-size: 1.5rem;
}
</style>
