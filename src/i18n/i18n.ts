import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translations.json";
import frTranslations from "./locales/fr/translations.json";

const normalizeLanguage = (value?: string | null) => {
  const language = (value || "en").split("-")[0].toLowerCase();

  return ["en", "fr"].includes(language) ? language : "en";
};

const initialLanguage = normalizeLanguage(
  localStorage.getItem("theme-language"),
);

i18n.use(initReactI18next).init({
  ns: ["translations"],
  defaultNS: "translations",
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "fr"],
  nonExplicitSupportedLngs: true,
  load: "languageOnly",
  debug: false,
  returnNull: false,
  resources: {
    en: {
      translations: enTranslations,
    },
    fr: {
      translations: frTranslations,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
