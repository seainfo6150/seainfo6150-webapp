import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleTextToggleButton buttonText="Hello" onClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
