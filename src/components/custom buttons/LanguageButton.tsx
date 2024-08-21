import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLanguage =
      selectedLanguage === languages[0].name
        ? languages[1].name
        : languages[0].name;

    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  const currentLanguage = languages.find(
    (lang) => lang.name === selectedLanguage
  );

  return (
    <button className="language-button button " onClick={toggleLanguage}>
      <span className="icon is-small">
        <img
          src={`https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/${currentLanguage?.countryForImage}-512.png`}
          alt={currentLanguage?.countryForImage}
        />
      </span>
    </button>
  );
};

export default LanguageButton;
