import { mount } from "@vue/test-utils";

import SearchBar from "@/components/SearchBar.vue";

import mocks from "../../mocks.js";

let search;
let wrapper;

describe("SearchBar", () => {
  beforeEach(() => {
    wrapper = mount(SearchBar, { global: { mocks } });
    search = wrapper.get("input");
  });

  it("search default", async () => {
    expect(search.element.value).toBe("");
  });

  it("search with prop", async () => {
    await wrapper.setProps({ q: "Sunset" });
    expect(search.element.value).toBe("Sunset");
  });

  it("search with text", async () => {
    search.setValue("Sunset");
    await search.trigger("keyup.enter");
    expect(mocks.$router.push).toHaveBeenCalledWith({
      name: "Home",
      query: {
        q: "Sunset",
      },
    });
  });
});
