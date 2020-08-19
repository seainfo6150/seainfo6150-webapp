import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

const renderWithProviders = ({ children }) => {
  return <Router>{children}</Router>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: renderWithProviders, ...options });

global.render = customRender;
global.fireEvent = fireEvent;