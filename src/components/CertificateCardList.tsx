import { FC, useEffect, useState } from "react";
import { Certificate } from "../sections/CertificatesSection";
import CertificateCard from "./CertificateCard";

type CertificateCardsListProps = {
  certificates: Certificate[];
  title?: string;
};

const CertificateCardsList: FC<CertificateCardsListProps> = ({
  certificates,
  title,
}) => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  return (
    <>
      <div className="certificates-list py-5">
        {title && <h1 className="title is-size-4">{title}</h1>}
        <div className="certificates-list__grid">
          {certificates.map((certificate) => (
            <div key={certificate.title} className="certificates-list__item">
              <CertificateCard
                certificate={certificate}
                onPreview={setSelectedCertificate}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-lightbox__dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-lightbox__close button"
              aria-label="Close certificate preview"
              onClick={() => setSelectedCertificate(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div
              className="certificate-lightbox__stage"
              style={{ backgroundImage: `url(${selectedCertificate.image})` }}
              role="img"
              aria-label={selectedCertificate.title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCardsList;
