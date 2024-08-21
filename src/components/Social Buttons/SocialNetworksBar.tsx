import { FC } from "react";
import "./social-networks-bar.scss";

type SocialLink = {
  href: string;
  className: string;
  icon: string;
  ariaLabel: string;
};

const SocialButton: FC<SocialLink> = ({ href, className, icon, ariaLabel }) => (
  <a
    className={`button ${className}`}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={ariaLabel}
  >
    <span className="icon has-text-white">
      <i className={icon}></i>
    </span>
  </a>
);

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
    {
      href: "https://instagram.com",
      className: "instagram",
      icon: "fab fa-instagram",
      ariaLabel: "Instagram",
    },
  ];

  return (
    <div className="social-icons">
      <div className="buttons are-large">
        {socialLinks.map((link) => (
          <SocialButton key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialNetworksBar;
