import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Shop from "../Components/Shop";
import { menTees } from "../Data/Tee";
import { menHoodies } from "../Data/Hoodie";
import { womenTees } from "../Data/Tee";
import { womenHoodies } from "../Data/Hoodie";
import { accessories } from "../Data/Accessory";
const theme = "light";

test("Home click", () => {
  render(
    <Shop
      womenTees={womenTees}
      womenHoodies={womenHoodies}
      menTees={menTees}
      menHoodies={menHoodies}
      accessories={accessories}
      theme={theme}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByText(/home/i));
    expect(screen.getByText(/enter/i)).toBeVisible();
  };
});
test("Cart click", () => {
  render(
    <Shop
      womenTees={womenTees}
      womenHoodies={womenHoodies}
      menTees={menTees}
      menHoodies={menHoodies}
      accessories={accessories}
      theme={theme}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/cart-link/i));
    expect(screen.getByText(/cart/i)).toBeVisible();
  };
});
test("Icon click", () => {
  render(
    <Shop
      womenTees={womenTees}
      womenHoodies={womenHoodies}
      menTees={menTees}
      menHoodies={menHoodies}
      accessories={accessories}
      theme={theme}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/icon-text/i));
    expect(screen.getByText(/enter/i)).toBeVisible();
  };
});
test("Toggle click", () => {
  render(
    <Shop
      womenTees={womenTees}
      womenHoodies={womenHoodies}
      menTees={menTees}
      menHoodies={menHoodies}
      accessories={accessories}
      theme={theme}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/toggle/i));
    expect(screen.getByTestId(/nav/i)).toHaveStyle(
      "background-color : #181a1b"
    );
  };
});
test("Sidebar collapse", () => {
  render(
    <Shop
      womenTees={womenTees}
      womenHoodies={womenHoodies}
      menTees={menTees}
      menHoodies={menHoodies}
      accessories={accessories}
      theme={theme}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/side-burger-container/i));
    expect(screen.getByText(/Accessories/i)).not.toBeVisible();
  };
});
