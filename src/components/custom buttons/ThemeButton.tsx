import { FC, useState, useEffect } from "react";

const ThemeButton: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="theme-button button" onClick={toggleTheme}>
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
