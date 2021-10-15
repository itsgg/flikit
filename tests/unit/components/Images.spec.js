import { mount } from "@vue/test-utils";

import Images from "@/components/Images.vue";
import Loader from "@/components/Loader.vue";
import ImageCard from "@/components/ImageCard.vue";

import seeds from "../../seeds.js";

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

  it("displays images", async () => {
    expect(wrapper.findAllComponents(ImageCard).length).toBe(0);

    await wrapper.setData({
      images: seeds.images,
    });

    expect(wrapper.findAllComponents(ImageCard).length).toBe(
      seeds.images.length
    );
  });
});
