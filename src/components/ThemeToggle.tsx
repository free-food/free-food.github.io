import { useState } from "react";
import { getTheme, toggleTheme, type Theme } from "../lib/theme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(getTheme);

  const handleToggle = () => {
    setThemeState(toggleTheme());
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.icon} aria-hidden>
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
