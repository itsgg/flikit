<template>
  <nav
    class="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        id="logo"
        href="/"
        class="navbar-item"
      >
        flikit
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <search-bar :q="q" />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "TopNav",

  components: {
    SearchBar,
  },

  props: { q: { type: String, default: "" } },
};
</script>

<style scoped>
#logo {
  font-size: 1.5rem;
}
</style>
