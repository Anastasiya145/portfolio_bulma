import { FC } from "react";
import "./download-cv-button.scss";
import { useTranslation } from "react-i18next";

const DownloadCVButton: FC = () => {
  const { t } = useTranslation("navbar");
  const resumeLink = "URL_TO_YOUR_PDF"; //fix later

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
        <span>{t("downloadCV")}</span>
      </a>
    </div>
  );
};

export default DownloadCVButton;
