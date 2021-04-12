import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleImage />);
      expect(container).toMatchSnapshot();
    });
})
