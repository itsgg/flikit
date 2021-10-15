import { mount } from "@vue/test-utils";

import Home from "@/views/Home.vue";
import TopNav from "@/components/TopNav.vue";
import BottomFooter from "@/components/BottomFooter.vue";
import Images from "@/components/Images.vue";

let wrapper;

describe("Home", () => {
  beforeEach(() => {
    wrapper = mount(Home);
  });

  it("has logo text", () => {
    expect(wrapper.get("#logo").text()).toBe("flikit");
  });

  it("has TopNav", () => {
    expect(wrapper.getComponent(TopNav)).toBeTruthy();
  });

  it("has BottomFooter", () => {
    expect(wrapper.getComponent(BottomFooter)).toBeTruthy();
  });

  it("has Images", () => {
    expect(wrapper.getComponent(Images)).toBeTruthy();
  });
});
