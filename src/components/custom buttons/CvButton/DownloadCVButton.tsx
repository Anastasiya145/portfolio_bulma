import { FC } from "react";
import { useTranslation } from "react-i18next";

const DownloadCVButton: FC = () => {
  const { t, i18n } = useTranslation();

  const resumeLink =
    i18n.language === "fr"
      ? "https://drive.google.com/uc?export=download&id=1oM8bIhzKNnOJy7VpumlC12GfVvTyTpVR"
      : "https://drive.google.com/uc?export=download&id=1MsNlpziDCVHHLQ5mCD1MvidurxFszsC_";

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
