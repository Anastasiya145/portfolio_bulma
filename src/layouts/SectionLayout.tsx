import { FC, ReactNode } from "react";

type Props = {
  className: string;
  title?: string;
  upperSubTitle?: string;
  titleSpan?: string;
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({
  className,
  title,
  upperSubTitle,
  titleSpan,
  children,
}) => {
  return (
    <div className={className}>
      <div id={className} className="container py-6">
        <div className={`${className}__titles mb-6`}>
          {upperSubTitle && (
            <p
              className={`${className}__subtitle subtitle is-size-5 has-text-link mb-2`}
            >
              {upperSubTitle}
            </p>
          )}
          {title && (
            <h1 className={`${className}__title title is-size-2 mt-0`}>
              {title.toUpperCase()}
              {titleSpan && (
                <span className="text has-text-link">{` ${titleSpan.toUpperCase()}`}</span>
              )}
            </h1>
          )}
        </div>

        <div className={`${className}__content`}>{children}</div>
      </div>
    </div>
  );
};

export default SectionLayout;
