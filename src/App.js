import "./App.css";
import { useEffect, useState } from "react";
import { clickedIndividual } from "./helpers/recursiveHelpers";
import FamilyMember from "./Components/Buttons/FamilyMember";
import { useSelector } from "react-redux";
import { getCurrentFamilyTree } from "./helpers/selectorGetters";
import AddFamily from "./Components/Buttons/AddFamily";

function App() {
  const [currentIndividual, setCurrentIndividual] = useState(clickedIndividual);
  const familyTreeData = useSelector(getCurrentFamilyTree);

  const individual = clickedIndividual;

  useEffect(() => {
    setCurrentIndividual(individual);
  }, [individual]);

  console.log(currentIndividual);

  const recursiveDisplay = (data = []) => {
    return data.map((individual, index) => {
      return (
        <div className="family">
          <FamilyMember individual={individual} />
          {individual.levelVisibility && recursiveDisplay(individual.children)}
        </div>
      );
    });
  };
  return (
    <>
      <div className="App">{recursiveDisplay(familyTreeData)}</div>
      <div>
        <AddFamily />
      </div>
    </>
  );
}

export default App;
