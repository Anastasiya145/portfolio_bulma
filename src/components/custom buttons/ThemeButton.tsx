import { FC, useState, useEffect } from "react";

const ThemeButton: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const currentTheme =
      savedTheme ||
      document.documentElement.getAttribute("data-theme") ||
      "light";

    setIsDarkMode(currentTheme === "dark");
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button type="button" className="theme-button button" onClick={toggleTheme}>
      <span className="icon">
        <i
          className={`fas fa-lg  ${
            isDarkMode ? "fa-sun has-text-warning" : "fa-moon has-text-link"
          }`}
        ></i>
      </span>
    </button>
  );
};

export default ThemeButton;
