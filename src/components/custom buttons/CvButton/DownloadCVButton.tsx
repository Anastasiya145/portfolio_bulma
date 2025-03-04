import { FC } from "react";
import { useTranslation } from "react-i18next";

const DownloadCVButton: FC = () => {
  const { t, i18n } = useTranslation();

  const resumeLink =
    i18n.language === "fr"
      ? "https://drive.google.com/uc?export=download&id=1ZQPAMQO0axX91plVvNwFvavh32c_uOSG"
      : "https://drive.google.com/uc?export=download&id=1YZgD0qVf5Lw1osUj0IClHWfH0V8pFqQu";

  return (
    <div className="download-cv">
      <a
        className="download-cv__button button is-link"
        href={resumeLink}
        download
        aria-label="Download Resume"
      >
        <span className="icon">
          <i className="fas fa-download"></i>
        </span>
        <span>{t("navbar.downloadCVbutton")}</span>
      </a>
    </div>
  );
};

export default DownloadCVButton;
