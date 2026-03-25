import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Task19() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}