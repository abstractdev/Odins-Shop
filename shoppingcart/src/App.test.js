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

describe("Shop Link", () => {
  it("When clicked, items are displayed on the page", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: "Shop" });

    userEvent.click(link);

    expect(screen.getByTestId("mTee0")).toBeVisible();
    expect(screen.getByTestId("wTee0")).toBeVisible();
    expect(screen.getByTestId("mHoodie0")).toBeVisible();
    expect(screen.getByTestId("wHoodie0")).toBeVisible();
    expect(screen.getByTestId("accessory0")).toBeVisible();
  });
});