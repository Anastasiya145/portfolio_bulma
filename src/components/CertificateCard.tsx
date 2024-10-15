import { FC } from "react";
import { Certificate } from "../sections/CertificatesSection";

type CertificateCardProps = {
  certificate: Certificate;
};

const CertificateCard: FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="certificate-card card">
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
  );
};

export default CertificateCard;
