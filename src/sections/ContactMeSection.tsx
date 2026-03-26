import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import SocialNetworksBar from "../components/SocialNetworksBar";

const ContactMeSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className="contact-me">
      <div className="contact-me__content has-text-centered">
        <h2 className="contact-me__title title mb-5">
          {t("contactMeSection.titleSingle")}
        </h2>
        <p className="contact-me__text subtitle mb-6">
          {t("contactMeSection.description")}
        </p>
        <SocialNetworksBar />
      </div>
    </SectionLayout>
  );
};

export default ContactMeSection;
