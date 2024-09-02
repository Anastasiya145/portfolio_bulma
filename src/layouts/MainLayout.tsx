import { FC, ReactNode } from "react";
import AppBar from "../components/AppBar";

type Props = {
  className: string;
  title?: string;
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ className, title, children }) => {
  return (
    <div className="App">
      <div className="header">
        <AppBar />
      </div>
      <div className="content">
        <div className={className}>
          <div className="container py-5">
            {title && (
              <h1
                className={`${className}__title title is-size-2`}
                style={{ marginBottom: "32px" }}
              >
                {title}
              </h1>
            )}
            <div className={`${className}__content`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
