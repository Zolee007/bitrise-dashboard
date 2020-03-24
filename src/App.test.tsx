import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const select = screen.getByText(/Select user/i);
  expect(select).toBeInTheDocument();
  const button = screen.getByText(/Login/i);
  expect(button).toBeInTheDocument();
});
