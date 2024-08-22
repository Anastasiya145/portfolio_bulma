import { FC } from "react";
import { ProjectType } from "./ProjectsList";

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
        className="tag-button"
        onClick={() => onClick(isSelected ? "All Projects" : projectType)}
      >
        {projectType}
      </button>
      {isSelected && (
        <button
          className="delete is-small ml-2"
          onClick={() => onClick("All Projects")}
        ></button>
      )}
    </div>
  );
};

export default TagButton;
