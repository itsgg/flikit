import { mount } from "@vue/test-utils";

import App from "@/App.vue";

import router from "@/router.js";

import Home from "@/views/Home.vue";

const wrapper = mount(App, {
  global: {
    plugins: [router],
  },
});

describe("App", () => {
  it("Loads Home", async () => {
    await router.push("/");
    const home = wrapper.findComponent(Home);
    expect(home.exists()).toBe(true);
  });
});
