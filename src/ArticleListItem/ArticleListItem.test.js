import React from "react";
import ArticleListItem from "./ArticleListItem";

describe("ArticleListItem tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleListItem article={{}}/>)
        expect(container).toMatchSnapshot();
    })
})