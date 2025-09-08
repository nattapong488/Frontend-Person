import { useState } from "react";
import "./Header.css";

export default function Header({title}) {
  const [theme, setTheme] = useState("light"); // Initialize theme state

  return (
    <nav className={theme}>
      <header>
        <h1>{title}</h1> {/* Display the header name */}
      </header>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme == "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
