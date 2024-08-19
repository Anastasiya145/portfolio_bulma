import { FC } from "react";

const Tabs: FC = () => {
  return (
    <div className="tabs">
      <ul>
        <li className="is-active">
          <a>Skills</a>
        </li>
        <li>
          <a>Education</a>
        </li>
        <li>
          <a>Languages</a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
