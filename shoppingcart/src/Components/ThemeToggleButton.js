import React from "react";
import "../Styles/ThemeToggleButton.css";

function ThemeToggleButton({ handleSetTheme }) {
  return (
    <>
      <label class="toggle-switch" for="toggle-input">
        <input id="toggle-input" type="checkbox" />
        <div class="toggle-switch__control" onClick={handleSetTheme}></div>
      </label>
    </>
  );
}

export default ThemeToggleButton;
