import { FC } from "react";
import { Certificate } from "../sections/CertificatesSection";
import CertificateCard from "./CertificateCard";

type CertificateCardsListProps = {
  certificates: Certificate[];
  title: string;
};

const CertificateCardsList: FC<CertificateCardsListProps> = ({
  certificates,
  title,
}) => {
  return (
    <div className="certificates-list py-5">
      <h1 className="title is-size-4">{title}</h1>
      <div className="columns is-gap-4">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="column is-12-mobile is-6-tablet is-4-desktop"
          >
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateCardsList;
