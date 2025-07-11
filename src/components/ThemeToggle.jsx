import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer w-14 h-7">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only peer"
        aria-label="Toggle Dark Mode"
      />
      <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full peer-focus:ring-2 peer-focus:ring-primary transition-colors duration-300 peer-checked:bg-primary" />
      <div className="absolute left-0.5 top-0.5 h-6 w-6 bg-white rounded-full transition-all duration-300 transform peer-checked:translate-x-7 flex items-center justify-center">
        {isDarkMode ? (
          <Moon className="h-4 w-4 text-blue-700" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </label>
  );
};
