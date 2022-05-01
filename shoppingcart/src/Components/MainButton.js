import React from "react";
import "../Styles/MainButton.css";

function MainButton({ text }) {
  return (
    <button className="main-button" type="submit">
      {text}
    </button>
  );
}
export default MainButton;
