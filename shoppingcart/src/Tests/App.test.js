import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("homepage render", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/enter/i)).toBeInTheDocument();
});
test("Enter click", () => {
  render(<App />, { wrapper: MemoryRouter });
  const testClick = async () => {
    await userEvent.click(screen.getByText(/enter/i));
    expect(screen.getByText(/Men's Tee/i)).toBeVisible();
  };
});
