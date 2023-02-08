import { useSelector } from "react-redux";

import FamilyMember from "components/buttons/familyMember/FamilyMember";
import AddFamily from "components/buttons/addFamily/AddFamily";
import ImportJSON from "components/buttons/importJSON/ImportJSON";
import ExportJSON from "components/buttons/exportJSON/ExportJSON";
import PrintFamilyTree from "components/buttons/printFamilyTree/PrintFamilyTree";
import FamilyDetails from "components/familyDetails/FamilyDetails";

import { selectedIndividual } from "helpers/recursiveHelpers";
import { getCurrentFamilyTree } from "helpers/selectorGetters";

import "App.css";

function App() {
  const familyTreeData = useSelector(getCurrentFamilyTree);

  const isAddFamilyButtonDisabled =
    Object.keys(selectedIndividual).length === 0;

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
      <div className="App">
        <div className="leftContainer">
          <div className="treeStructure">
            {recursiveDisplay(familyTreeData)}
          </div>
          <div className="clickables">
            <ImportJSON />
            <AddFamily isDisabled={isAddFamilyButtonDisabled} />
            <ExportJSON />
            <PrintFamilyTree />
          </div>
        </div>
        <div className="familyDetails">
          {isAddFamilyButtonDisabled ? (
            <h1>
              please select a folder to
              <ol>
                <li>add family</li>
                <li>view the respective family details</li>
              </ol>
            </h1>
          ) : (
            <FamilyDetails selectedIndividual={selectedIndividual} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
