import { FC } from "react";
import frontendCertificate from "../assets/images/frontend_certificate.png";
import backendCertificate from "../assets/images/backend_certificate.png";
import { useTranslation } from "react-i18next";

const CertificatesList: FC = () => {
  const { t } = useTranslation("aboutme");

  const certificates = [
    {
      title: t("certificatesSection.backendCertificate.title"),
      description: t("certificatesSection.backendCertificate.description"),
      year: "2024",
      image: backendCertificate,
    },
    {
      title: t("certificatesSection.frontendCertificate.title"),
      description: t("certificatesSection.frontendCertificate.description"),
      year: "2022",
      image: frontendCertificate,
    },
  ];

  return (
    <div className="certificates mt-6">
      <h2 className="certificates__title title mb-5">
        {t("certificatesSection.title")}
      </h2>
      <div className="columns is-centered is-multiline is-gap-4">
        {certificates.map((certificate, index) => (
          <div key={index} className="column is-12-mobile is-8-tablet">
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
                    href="https://mate.academy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mate academy
                  </a>
                  <p className="has-text-grey">{certificate.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesList;
