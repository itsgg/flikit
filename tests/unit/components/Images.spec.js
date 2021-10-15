import { mount } from "@vue/test-utils";

import Images from "@/components/Images.vue";
import Loader from "@/components/Loader.vue";

let wrapper;

describe("Images", () => {
  beforeEach(() => {
    wrapper = mount(Images);
  });

  it("displays loader", async () => {
    await wrapper.setData({ loading: false });
    expect(wrapper.findComponent(Loader).exists()).toBe(false);
    await wrapper.setData({ loading: true });
    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });
});
