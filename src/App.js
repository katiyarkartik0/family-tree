import "./App.css";
import { useEffect, useState } from "react";
import { selectedIndividual } from "./helpers/recursiveHelpers";
import FamilyMember from "./Components/Buttons/FamilyMember";
import { useSelector } from "react-redux";
import { getCurrentFamilyTree } from "./helpers/selectorGetters";
import AddFamily from "./Components/Buttons/AddFamily";
import FamilyDetails from "./Components/FamilyDetails/FamilyDetails";

function App() {
  const familyTreeData = useSelector(getCurrentFamilyTree);
  console.log(familyTreeData);

  const isAddFamilyButtonDisabled = Object.keys(selectedIndividual).length === 0;

  const recursiveDisplay = (data = []) => {
    return data.map((individual, index) => {
      return (
        <div className="family">
          <div
            className={
              individual.uid === selectedIndividual.uid ? "clicked" : ""
            }
          >
            <FamilyMember individual={individual} />
          </div>
          {individual.levelVisibility &&
            recursiveDisplay(individual.personalInformation.children)}
        </div>
      );
    });
  };
  return (
    <>
      <div className="parent">
        <div className="App">{recursiveDisplay(familyTreeData)}</div>
        <div className="familyDetails">
          <FamilyDetails selectedIndividual={selectedIndividual} />
        </div>
      </div>
      <div>
        <AddFamily isDisabled={isAddFamilyButtonDisabled} />
      </div>
      {isAddFamilyButtonDisabled && <p>please select a folder to add family</p>}
    </>
  );
}

export default App;
