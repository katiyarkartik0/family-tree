import React from "react";
import { useDispatch } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { toggleVisibility } from "store/slices/dataSlice";

import "components/buttons/familyMember/FamilyMember.css";

const FamilyMember = ({ individual }) => {
  const dispatch = useDispatch();

  return (
    <div className="parentButton">
      <button
        className="buttonStyle"
        onClick={() => dispatch(toggleVisibility(individual.uid))}
      >
        {individual.levelVisibility ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )}
        <FolderIcon className="folderIcon" />
        {individual.personalInformation.name}
      </button>
      <br></br>
    </div>
  );
};

export default FamilyMember;
