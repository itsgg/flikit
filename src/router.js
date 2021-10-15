import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({
      q: route.query.q,
    }),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
