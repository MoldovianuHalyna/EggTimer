import { Moon, Sun } from "lucide-react";

const ThemeTogglebtn = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeLabel =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={themeLabel}
    >
      <span className="themeToggle__icon" aria-hidden>
        {theme === "dark" ? <Moon /> : <Sun />}
      </span>
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeTogglebtn;
