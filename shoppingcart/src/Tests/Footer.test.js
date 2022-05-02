import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Components/Footer";
const theme = "light";

test("Socials link", () => {
  render(<Footer theme={theme} />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("github")).toHaveAttribute(
    "href",
    "http://www.github.com/abstractdev"
  );
});
test("Contact link", () => {
  render(<Footer theme={theme} />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("contact")).toHaveAttribute(
    "href",
    "http://www.github.com/abstractdev"
  );
});
