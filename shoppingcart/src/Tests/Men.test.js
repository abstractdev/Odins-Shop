import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Men from "../Components/Men";
import { menTees } from "../Data/Tee";
import { menHoodies } from "../Data/Hoodie";

test("Mens page", () => {
  render(<Men menTees={menTees} menHoodies={menHoodies} />, {
    wrapper: MemoryRouter,
  });
  expect(screen.getByTestId(/mh0/i)).toBeInTheDocument();
});
test("Mens click", () => {
  render(<Men menTees={menTees} menHoodies={menHoodies} />, {
    wrapper: MemoryRouter,
  });
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/mh0/i));
    expect(screen.getByText(/blue/i)).toBeVisible();
  };
});
