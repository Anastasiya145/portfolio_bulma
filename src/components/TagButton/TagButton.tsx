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
    <div className="control">
      <div className="tags has-addons are-medium">
        <button
          className="tags__button tag"
          onClick={() => onClick(isSelected ? "All Projects" : projectType)}
        >
          {projectType}
        </button>

        <button
          className={classNames("tags__button-delete tag is-delete", {
            "is-selected": isSelected,
          })}
          disabled={!isSelected}
          onClick={() => onClick("All Projects")}
        ></button>
      </div>
    </div>
  );
};

export default TagButton;
