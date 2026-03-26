import { FC } from "react";
import { Certificate } from "../sections/CertificatesSection";

type CertificateCardProps = {
  certificate: Certificate;
  onPreview: (certificate: Certificate) => void;
};

const CertificateCard: FC<CertificateCardProps> = ({
  certificate,
  onPreview,
}) => {
  return (
    <div className="certificate-card card">
      <div className="certificate-card__container">
        <button
          type="button"
          className="certificate-card__preview"
          onClick={() => onPreview(certificate)}
          aria-label={`Open ${certificate.title}`}
        >
          <figure className="certificate-card__media image is-4by3">
            <img
              className="certificate-card__picture"
              src={certificate.image}
              alt={certificate.title}
              style={{ objectFit: "cover" }}
            />
          </figure>
        </button>

        <div className="certificate-card__body">
          <p className="certificate-card__eyebrow">{certificate.year}</p>
          <h3 className="certificate-card__title title is-size-5 mb-2">
            {certificate.title}
          </h3>
          <a
            className="certificate-card__company"
            href={certificate.companyLink}
            target="_blank"
            rel="noreferrer"
          >
            <span>{certificate.companyName}</span>
            <span className="icon" aria-hidden="true">
              <i className="fas fa-arrow-up-right-from-square"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
