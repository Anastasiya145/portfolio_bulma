import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./language-select.scss";

const languages = [
  {
    name: "en",
    countryForImage: "usa",
  },
  {
    name: "fr",
    countryForImage: "france",
  },
];

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");

  const toggleLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="language-buttons">
      {languages.map((lang) => (
        <button
          className={`language-buttons__button button ${
            selectedLanguage === lang.name ? "is-active" : ""
          }`}
          onClick={(ev) => {
            console.log(ev.target);
            toggleLanguage(lang.name);
          }}
        >
          <img
            src={`https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/${lang.countryForImage}-512.png`}
            alt={lang.name}
          />
          <span>{lang.name.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;
