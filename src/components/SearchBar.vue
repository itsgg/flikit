<template>
  <div class="field has-addons">
    <div class="control">
      <input
        v-model="tags"
        class="input"
        type="search"
        placeholder="Search..."
        @keyup.enter="onSubmit"
      >
    </div>
    <!-- XXX: Support or tag search -->
    <div class="buttons">
      <button
        class="button is-primary"
        @click="onSubmit"
      >
        <i class="fas fa-search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

 props: { q: { type: String, default: "" } },

  data() {
    return {
      searchText: "",
    };
  },

  computed: {
    tags: {
      get() {
        return this.q;
      },
      set(value) {
        this.searchText = value;
      },
    },
  },

  methods: {
    onSubmit() {
      if (this.searchText.trim() === "") {
        return;
      }
      this.$router.push({
        name: "Home",
        query: { q: this.searchText },
      });
    },
  },
};
</script>
