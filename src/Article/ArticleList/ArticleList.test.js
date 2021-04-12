import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleList />);
      expect(container).toMatchSnapshot();
    });
})
