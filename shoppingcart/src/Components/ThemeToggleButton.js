import React from "react";
import "../Styles/ThemeToggleButton.css";

function ThemeToggleButton({ handleSetTheme }) {
  return (
    <>
      <label className="toggle-switch" htmlFor="toggle-input">
        <input id="toggle-input" type="checkbox" />
        <div
          data-testid="toggle"
          className="toggle"
          onClick={handleSetTheme}
        ></div>
      </label>
    </>
  );
}

export default ThemeToggleButton;
