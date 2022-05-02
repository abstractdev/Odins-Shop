import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Accessories from "../Components/Accessories";
import { accessories } from "../Data/Accessory";

test("Accessories page", () => {
  render(<Accessories accessories={accessories} />, { wrapper: MemoryRouter });
  expect(screen.getByText(/tote/i)).toBeVisible();
});

test("Accessories click", () => {
  render(<Accessories accessories={accessories} />, { wrapper: MemoryRouter });
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/acc0/i));
    expect(screen.getByText(/case/i)).toBeVisible();
  };
});
