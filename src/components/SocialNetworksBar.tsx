import { FC } from "react";

type SocialLink = {
  href: string;
  icon: string;
};

const SocialNetworksBar: FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Anastasiya145",
      icon: "fab fa-github",
    },
    {
      href: "https://www.linkedin.com/in/anastasiya-ivanova-494567109/",
      icon: "fab fa-linkedin",
    },
    {
      href: "mailto:asiva@ukr.net",
      icon: "fab fa-google",
    },
  ];

  return (
    <div className="social-icons">
      <div className="social-icons__buttons">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="social-icons__button"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-large">
              <i className={`${link.icon} fa-lg`} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialNetworksBar;
