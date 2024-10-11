import { useState, useEffect } from "react";
import "./scroll-button.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 450 ? true : false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`button is-link is-large scroll-to-top-button ${
        isVisible ? "is-active" : "is-hidden"
      }`}
      onClick={scrollToTop}
    >
      <span className="icon is-small">
        <i className="fas fa-arrow-up"></i>
      </span>
    </button>
  );
};

export default ScrollToTopButton;
