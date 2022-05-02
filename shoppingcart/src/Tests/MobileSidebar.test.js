import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MobileSidebar from "../Components/MobileSidebar";
import userEvent from "@testing-library/user-event";
const theme = "light";
const mobileSidebarIsOpen = true;
const setMobileSidebarIsOpen = jest.fn();

test("Sidebar open", () => {
  render(
    <MobileSidebar
      theme={theme}
      setMobileSidebarIsOpen={setMobileSidebarIsOpen}
      mobileSidebarIsOpen={mobileSidebarIsOpen}
    />,
    { wrapper: MemoryRouter }
  );
  expect(screen.getByTestId(/close-mobile-sidebar/i)).toBeVisible();
});
test("Sidebar click close", () => {
  render(
    <MobileSidebar
      theme={theme}
      setMobileSidebarIsOpen={setMobileSidebarIsOpen}
      mobileSidebarIsOpen={mobileSidebarIsOpen}
    />,
    { wrapper: MemoryRouter }
  );
  const testClick = async () => {
    await userEvent.click(screen.getByTestId(/close-mobile-sidebar/i));
    expect(screen.getByTestId(/mobile-sidebar/i)).not.toBeVisible();
  };
});
