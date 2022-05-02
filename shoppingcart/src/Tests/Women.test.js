import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Women from "../Components/Women";
import { womenTees } from "../Data/Tee";
import { womenHoodies } from "../Data/Hoodie";

test("Womens page", () => {
  render(<Women womenTees={womenTees} womenHoodies={womenHoodies} />, {
    wrapper: MemoryRouter,
  });
  expect(screen.getByTestId(/wh0/i)).toBeInTheDocument();
});
test("Womens click", () => {
  render(<Women womenTees={womenTees} womenHoodies={womenHoodies} />, {
    wrapper: MemoryRouter,
  });
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/wh0/i));
    expect(screen.getByText(/pink/i)).toBeVisible();
  };
});
