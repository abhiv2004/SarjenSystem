import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./index.css";

export function Layout({ children }) {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : "light"}>
      {children}
    </div>
  );
}