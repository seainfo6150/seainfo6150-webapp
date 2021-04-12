import React from "react";
import DynamicArticle from "./DynamicArticle.jsx";

describe("DynamicArticle tests", () => {
    it("renders correctly", () => {
        const { container } = render(<DynamicArticle/>)
        expect(container).toMatchSnapshot();
    })
})