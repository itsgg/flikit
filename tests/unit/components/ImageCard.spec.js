import { mount } from "@vue/test-utils";

import ImageCard from "@/components/ImageCard.vue";
import seeds from "../../seeds";

let wrapper;
let image;

describe("ImageCard", () => {
  beforeEach(() => {
    image = seeds.images[0];
    wrapper = mount(ImageCard, {
      props: {
        image,
      },
    });
  });

  it("has title", async () => {
    expect(wrapper.get(".title").text()).toContain(image.title);
  });

  it("has author", async () => {
    expect(wrapper.get(".subtitle").text()).toContain("one");
  });
});
