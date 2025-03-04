import { FC } from "react";
import frontendCertificate from "../assets/images/frontend_certificate.png";
import backendCertificate from "../assets/images/backend_certificate.png";
import busuuCertificate from "../assets/images/Busuu.png";
import delfCertificate from "../assets/images/delf_b2.jpg";
import univDiploma from "../assets/images/Univ_diploma.jpg";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import CertificateCardsList from "../components/CertificateCardList";

export type Certificate = {
  title: string;
  year: string;
  companyLink: string;
  companyName: string;
  image: string;
};

const CertificatesSection: FC = () => {
  const { t } = useTranslation();

  const certificatesDev: Certificate[] = [
    {
      title: t("certificatesSection.backendCertificate.title"),
      year: "2024",
      companyLink: "https://mate.academy/",
      companyName: "Mate academy",
      image: backendCertificate,
    },
    {
      title: t("certificatesSection.frontendCertificate.title"),
      year: "2022",
      companyLink: "https://mate.academy/",
      companyName: "Mate academy",
      image: frontendCertificate,
    },
  ];

  const certificatesLang: Certificate[] = [
    {
      title: t("certificatesSection.langCertificate.title"),
      year: "2024",
      companyLink:
        "https://www.france-education-international.fr/diplome/delf-tout-public",
      companyName: "Delf B2",
      image: delfCertificate,
    },
    {
      title: t("certificatesSection.langCertificate.title"),
      year: "2023",
      companyLink: "https://busuu.com/",
      companyName: "Busuu",
      image: busuuCertificate,
    },
  ];

  const certificatesEduc: Certificate[] = [
    {
      title: t("certificatesSection.universityCertificate.title"),
      year: "2014-2020",
      companyLink: "https://mechmat.knu.ua/?lang=en",
      companyName: "Taras Shevchenko National University of Kyiv",
      image: univDiploma,
    },
  ];

  return (
    <SectionLayout
      title={t("certificatesSection.title")}
      titleSpan={t("certificatesSection.titleSpan")}
      className="certificates"
    >
      <CertificateCardsList
        certificates={certificatesDev}
        title={t("certificatesSection.sections.dev")}
      />
      <CertificateCardsList
        certificates={certificatesLang}
        title={t("certificatesSection.sections.lang")}
      />
      <CertificateCardsList
        certificates={certificatesEduc}
        title={t("certificatesSection.sections.educ")}
      />
    </SectionLayout>
  );
};

export default CertificatesSection;
