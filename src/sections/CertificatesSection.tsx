import { FC } from "react";
import frontendCertificate from "../assets/images/frontend_certificate.png";
import backendCertificate from "../assets/images/backend_certificate.png";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";

const CertificatesSection: FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      title: t("certificatesSection.backendCertificate.title"),
      description: t("certificatesSection.backendCertificate.description"),
      year: "2024",
      companyLink: "https://mate.academy/",
      companyName: "Mate academy",
      image: backendCertificate,
    },
    {
      title: t("certificatesSection.frontendCertificate.title"),
      description: t("certificatesSection.frontendCertificate.description"),
      year: "2022",
      companyLink: "https://mate.academy/",
      companyName: "Mate academy",
      image: frontendCertificate,
    },
  ];

  return (
    <SectionLayout
      title={t("certificatesSection.title")}
      titleSpan={t("certificatesSection.titleSpan")}
      className="certificates"
    >
      <div className="columns is-gap-4">
        {certificates.map((certificate, index) => (
          <div key={index} className="column is-12-mobile is-6-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="card-footer">
                <div className="certificates__content p-4">
                  <h3 className="title is-size-5">{certificate.title}</h3>
                  <a
                    className="button is-ghost p-0"
                    href={certificate.companyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {certificate.companyName}
                  </a>
                  <p className="has-text-grey">{certificate.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CertificatesSection;
