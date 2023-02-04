import React from "react";
import { useDispatch } from "react-redux";
import { selectedIndividual } from "../../../helpers/recursiveHelpers";
import { toggleVisibility } from "../../../store/slices/dataSlice";
import FolderIcon from "@mui/icons-material/Folder";
import "./Button.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
        <FolderIcon style={{ color: "rgb(209, 185, 10)", fontSize: 20 }} />
        {individual.personalInformation.name}
      </button>
      <br></br>
    </div>
  );
};

export default FamilyMember;
