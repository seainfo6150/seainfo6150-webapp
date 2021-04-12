import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleTextToggleButton/>)
        expect(container).toMatchSnapshot();
    })
})