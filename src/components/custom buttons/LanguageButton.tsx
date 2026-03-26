import { FC, useEffect, useRef, useState } from "react";
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
  const transitionTimeoutRef = useRef<number | null>(null);
  const normalizeLanguage = (value?: string) =>
    (value || "en").split("-")[0].toLowerCase();

  const [selectedLanguage, setSelectedLanguage] = useState(
    normalizeLanguage(i18n.resolvedLanguage || i18n.language),
  );
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const normalizedLanguage = normalizeLanguage(
      i18n.resolvedLanguage || i18n.language,
    );

    setSelectedLanguage(normalizedLanguage);
    localStorage.setItem("theme-language", normalizedLanguage);
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }

      document.documentElement.classList.remove("is-language-switching");
    };
  }, []);

  const toggleLanguage = async () => {
    if (isSwitching) {
      return;
    }

    const newLanguage =
      selectedLanguage === languages[0].name
        ? languages[1].name
        : languages[0].name;

    setIsSwitching(true);
    document.documentElement.classList.add("is-language-switching");

    try {
      await i18n.changeLanguage(newLanguage);
      setSelectedLanguage(newLanguage);
    } finally {
      transitionTimeoutRef.current = window.setTimeout(() => {
        document.documentElement.classList.remove("is-language-switching");
        setIsSwitching(false);
      }, 420);
    }
  };

  const nextLanguage = languages.find((lang) => lang.name !== selectedLanguage);

  return (
    <button
      type="button"
      className={`language-button button ${isSwitching ? "is-switching" : ""}`}
      onClick={toggleLanguage}
      disabled={isSwitching}
    >
      <span className="icon is-small">
        <img
          src={`https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/${nextLanguage?.countryForImage}-512.png`}
          alt={nextLanguage?.countryForImage}
        />
      </span>
    </button>
  );
};

export default LanguageButton;
