import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouteSwitch from "./RouteSwitch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouteSwitch />
  </StrictMode>
);