import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


describe("App Component", () => {
  it("renders Home Link", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
  });
  it("renders Shop Link", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Shop" })).toBeVisible();
  });
  it("renders Icon Text", () => {
    render(<App />);
    expect(screen.getByTestId("icon-text")).toBeVisible();
  });
  it("renders Cart Link", () => {
    render(<App />);
    expect(screen.getByTestId("cart-link")).toBeVisible();
  });
});
