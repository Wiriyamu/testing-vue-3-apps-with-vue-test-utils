import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createStore } from "vuex";

const createVuexStore = () => {
  return createStore({
    state: () => ({
      count: 0,
    }),
    mutations: {
      increment(state) {
        state.count += 1;
      },
    },
  });
};

function factory() {
  const store = createVuexStore();

  return mount(App, {
    global: {
      plugins: [store],
      mocks: {
        $route: {
          params: {
            postId: "1",
          },
        },
      },
    },
  });
}

describe("App", () => {
  it("render count when odd", async () => {
    const wrapper = factory();
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count: 1. Count is odd");
  });

  it("render count when even", async () => {
    const wrapper = factory();
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count: 2. Count is even");
  });

  it("render router", async () => {
    const wrapper = factory();
    expect(wrapper.html()).toContain("PostID: 1");
  });
});
