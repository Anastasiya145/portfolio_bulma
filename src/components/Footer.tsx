import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./footer.scss";

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="page-container footer__container">
        <p className="footer__text has-text-centered">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
