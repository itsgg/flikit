import { mount } from "@vue/test-utils";

import Images from "@/components/Images.vue";
import Loader from "@/components/Loader.vue";
import NotFound from "@/components/NotFound.vue";
import ImageCard from "@/components/ImageCard.vue";

import seeds from "../../seeds.js";
import mocks from "../../mocks.js";

let wrapper;

describe("Images", () => {
  beforeEach(() => {
    wrapper = mount(Images, { global: { mocks } });
  });

  it("displays loader", async () => {
    await wrapper.setData({ loading: true });
    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });

  it("displays not found", async () => {
    await wrapper.setData({ images: [] });
    expect(wrapper.findComponent(NotFound).exists()).toBe(false);
  });

  it("displays images", async () => {
    await wrapper.setData({ loading: false, images: seeds.images });
    expect(wrapper.findAllComponents(ImageCard).length).toBe(
      seeds.images.length
    );
  });

  it("allows tag search", async () => {
    await wrapper.setData({ loading: false, images: seeds.images });
    await wrapper.get(".tag").trigger("click");
    expect(mocks.$router.push).toHaveBeenCalledTimes(1);
    expect(mocks.$router.push).toHaveBeenCalledWith({
      name: "Home",
      query: { q: "one" },
    });
  });
});
