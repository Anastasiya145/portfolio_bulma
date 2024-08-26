import { FC } from "react";
import { ProjectType } from "../ProjectsList";
import classNames from "classnames";
import "./tag-button.scss";

type TagButtonProps = {
  isSelected: boolean;
  onClick: (value: ProjectType) => void;
  projectType: ProjectType;
};

const TagButton: FC<TagButtonProps> = ({
  isSelected,
  onClick,
  projectType,
}) => {
  return (
    <div className="tag is-rounded">
      <button
        className="tag__button"
        onClick={() => onClick(isSelected ? "All Projects" : projectType)}
      >
        {projectType}
      </button>

      <button
        className={classNames("tag__button-delete delete is-small ml-2", {
          "is-selected": isSelected,
        })}
        disabled={!isSelected}
        onClick={() => onClick("All Projects")}
      ></button>
    </div>
  );
};

export default TagButton;
