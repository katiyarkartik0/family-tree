import "./App.css";
import { selectedIndividual } from "./helpers/recursiveHelpers";
import FamilyMember from "./Components/Buttons/FamilyMember/FamilyMember";
import { useSelector } from "react-redux";
import { getCurrentFamilyTree } from "./helpers/selectorGetters";
import AddFamily from "./Components/Buttons/AddFamily/AddFamily";
import FamilyDetails from "./Components/FamilyDetails/FamilyDetails";
import ImportJSON from "./Components/Buttons/ImportJSON/ImportJSON";
import ExportJSON from "./Components/Buttons/ExportJSON/ExportJSON";
import PrintFamilyTree from "./Components/Buttons/PrintFamilyTree/PrintFamilyTree";

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
      <div className="parent">
        <div>
          <div
            className="App"
            style={{
              width: "30vw",
              height: "60vh",
              overflow: "auto",
              border:"solid grey",
              borderRadius:"2%"
            }}
          >
            {recursiveDisplay(familyTreeData)}
          </div>
          <div
            style={{
              width: "30vw",
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridTemplateRows: "auto auto",
              padding: "10px",
            }}
          >
            <AddFamily isDisabled={isAddFamilyButtonDisabled} />
            <ImportJSON />
            <ExportJSON />
            <PrintFamilyTree />
          </div>
        </div>
        <div className="familyDetails">
          <FamilyDetails selectedIndividual={selectedIndividual} />
        </div>
      </div>

      {isAddFamilyButtonDisabled && <p>please select a folder to add family</p>}
    </>
  );
}

export default App;
