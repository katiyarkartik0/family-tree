import React from "react";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../../store/slices/dataSlice";

const FamilyMember = ({ individual }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${individual.clicked ? "clicked" : ""}`}>
      <button onClick={() => dispatch(toggleVisibility(individual.uid))}>
        {individual.name}
      </button>
      <br></br>
    </div>
  );
};

export default FamilyMember;
