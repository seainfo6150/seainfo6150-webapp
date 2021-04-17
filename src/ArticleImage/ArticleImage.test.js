import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleImage title="the title" url="https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg" />);
    expect(container).toMatchSnapshot();
  });
});
