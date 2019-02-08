import React from "react";
import { shallow } from "../enzyme";

import List from "./List";
describe("List tests", () => {
  it("renders list-items", () => {
    const items = ["one", "two", "three"];
    const wrapper = shallow(<List items={items} />);

    expect(wrapper.find("ListItem")).toBeDefined();
    expect(wrapper.find("ListItem")).toHaveLength(items.length);
  });
});
