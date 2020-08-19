import React from "react";
import AddingMachineHooks from "./AddingMachineHooks";
import { fireEvent } from "@testing-library/react";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<AddingMachineHooks startNum={0} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly when currentNum is 10", () => {
    const { container } = render(<AddingMachineHooks startNum={10} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly after button is clicked", () => {
    const { container, getByText } = render(
      <AddingMachineHooks startNum={0} />
    );
    const button = getByText("Click me to add 1");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
