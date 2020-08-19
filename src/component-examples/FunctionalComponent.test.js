import React from "react";
import FunctionalComponent from "./FunctionalComponent";

describe("FunctionalComponent tests", () => {
  it("renders correctly", () => {
    const { container } = render(<FunctionalComponent />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly when passed a name prop", () => {
    const { container } = render(<FunctionalComponent name="April" />);
    expect(container).toMatchSnapshot();
  });
});
