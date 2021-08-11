import { h } from "preact";
import { shallow } from 'enzyme';

import Hello from "../src/app";

describe("Hello Snapshot", () => {
  test("should render header with content", () => {
    const tree = shallow(<Hello />);
    expect(tree.find("h1").text()).toBe("Hello, World!");
  });
});
