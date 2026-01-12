import { useEffect, useState } from "react";
import Egglist from "./components/EggList/Egglist";
import Header from "./components/Header/Header";
import ThemeTogglebtn from "./components/ThemeToggleBtn/ThemeTogglebtn";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const stored = localStorage.getItem("egg-timer-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("egg-timer-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="appRoot">
      <ThemeTogglebtn theme={theme} setTheme={setTheme} />
      <Header />
      <Egglist />
    </div>
  );
}

export default App;
