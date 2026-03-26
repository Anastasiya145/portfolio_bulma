import { FC } from "react";
import { useTranslation } from "react-i18next";
import { sections } from "./sections";
import "./intro.scss";
import SectionLayout from "../layouts/SectionLayout";

const visualIcons = [
  {
    className: "intro__visual-icon intro__visual-icon--mint",
    icon: "fas fa-code",
  },
  {
    className: "intro__visual-icon intro__visual-icon--sky",
    icon: "fas fa-palette",
  },
  {
    className: "intro__visual-icon intro__visual-icon--amber",
    icon: "fas fa-bolt",
  },
] as const;

const stackBadges = ["React", "TypeScript", "Sass"] as const;

const codeLines = [
  "const portfolio = {",
  "  ui: 'clear',",
  "  motion: 'soft',",
  "  responsive: true",
  "};",
] as const;

const IntroSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className="intro">
      <div className="intro__container">
        <div className="intro__copy">
          <div className="intro__content">
            <div className="intro__eyebrow-row">
              <p className="intro__eyebrow">{t("intoSection.eyebrow")}</p>
            </div>

            <h1 className="intro__title title is-2">
              <span>{t("intoSection.titleFirst")}</span>
              <span>{t("intoSection.titleSecond")}</span>
              <div>
                <span className="intro__colored-line has-background-link" />
              </div>
            </h1>

            <div className="intro__description mt-5">
              <p className="intro__lead mb-0">{t("intoSection.description")}</p>
            </div>

            <div className="intro__actions buttons mt-6">
              <a
                className="intro__portfolio-button button is-link"
                href={sections.portfolio}
              >
                <strong>{t("intoSection.primaryButton")}</strong>
              </a>
              <a className="intro__secondary-action button" href="#contact-me">
                {t("intoSection.secondaryButton")}
              </a>
            </div>
          </div>
        </div>

        <div className="intro__art">
          <div className="intro__visual">
            <div className="intro__visual-card intro__visual-card--primary">
              <span className="intro__visual-glow intro__visual-glow--left" />
              <span className="intro__visual-glow intro__visual-glow--right" />
              <span className="intro__visual-ring intro__visual-ring--one" />
              <span className="intro__visual-ring intro__visual-ring--two" />

              <div className="intro__visual-window">
                <div className="intro__visual-window-bar">
                  <span
                    className="intro__visual-window-dots"
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="intro__visual-window-label">
                    portfolio.tsx
                  </span>
                </div>

                <div className="intro__visual-grid">
                  <div className="intro__visual-panel intro__visual-panel--code">
                    {codeLines.map((line) => (
                      <span key={line} className="intro__code-line">
                        {line}
                      </span>
                    ))}
                  </div>

                  <div className="intro__visual-panel intro__visual-panel--preview">
                    <div className="intro__visual-icons">
                      {visualIcons.map((visualIcon) => (
                        <span
                          key={visualIcon.icon}
                          className={visualIcon.className}
                        >
                          <i className={visualIcon.icon}></i>
                        </span>
                      ))}
                    </div>

                    <div className="intro__visual-meter">
                      <span className="intro__visual-meter-bar intro__visual-meter-bar--strong" />
                      <span className="intro__visual-meter-bar" />
                      <span className="intro__visual-meter-bar intro__visual-meter-bar--soft" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro__visual-floaters" aria-hidden="true">
                {stackBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className={`intro__floating-badge intro__floating-badge--${index + 1}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default IntroSection;
