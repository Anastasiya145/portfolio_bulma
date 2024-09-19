import { FC } from "react";
import "./social-networks-bar.scss";
import { Link } from "react-router-dom";

type SocialLink = {
  href: string;
  className: string;
  icon: string;
  ariaLabel: string;
};

const SocialNetworksBar: FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Anastasiya145",
      className: "github",
      icon: "fab fa-github",
      ariaLabel: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/anastasiya-ivanova-494567109/",
      className: "linkedin",
      icon: "fab fa-linkedin",
      ariaLabel: "LinkedIn",
    },
    {
      href: "mailto:asiva@ukr.net",
      className: "mail",
      icon: "fab fa-google",
      ariaLabel: "Email",
    },
  ];

  return (
    <div className="social-icons">
      <div className="social-icons__buttons buttons is-flex is-flex-direction-column are-large">
        {socialLinks.map((link) => (
          <Link
            className={`social-icons__button button ${link.className}`}
            to={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.ariaLabel}
          >
            <span className="icon has-text-white">
              <i className={link.icon}></i>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialNetworksBar;
