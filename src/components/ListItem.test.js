import React from "react";
import { render } from "../enzyme";

import List from "./List";

describe("List tests", () => {
  it("renders list-items", () => {
    const items = ["one", "two", "three"];
    const wrapper = render(<List items={items} />);
    wrapper.addClass("foo");

    expect(wrapper.find(".list-items")).toBeDefined();
    expect(wrapper.find(".item")).toHaveLength(items.length);
  });
});
