import { FC, useState } from "react";

const LanguageButton: FC = () => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className="language-buttons">
      <a className="en" onClick={() => toggleLanguage("EN")}>
        EN
      </a>
      <a className="fr" onClick={() => toggleLanguage("FR")}>
        FR
      </a>
    </div>
  );
};

export default LanguageButton;
