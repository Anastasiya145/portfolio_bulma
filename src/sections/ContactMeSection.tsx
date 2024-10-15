import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import ContactForm from "../components/forms/ContactForm";

const ContactMeSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      title={t("contactMeSection.title")}
      titleSpan={t("contactMeSection.titleSpan")}
      upperSubTitle={t("contactMeSection.subtitle")}
      className="contact-me"
    >
      <div className="columns is-centered is-multiline is-variable is-8">
        <div className="column is-12-mobile is-6-tablet">
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactMeSection;
