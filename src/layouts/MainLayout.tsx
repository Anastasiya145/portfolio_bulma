import { FC, ReactNode } from "react";

type Props = {
  className: string;
  title: string;
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ className, title, children }) => {
  return (
    <div className={className}>
      <div className="container py-5">
        <h1
          className={`${className}__title title is-size-2`}
          style={{ marginBottom: "32px" }}
        >
          {title}
        </h1>
        <div className={`${className}__content`}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
