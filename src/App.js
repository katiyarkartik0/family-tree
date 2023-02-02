import { cloneDeep } from "lodash";
import { data } from "./FamilyData/data";

function App() {
  const recursivelyManipulate = (uniqueId, arrayOfSiblings) => {
    for (const individual of arrayOfSiblings) {
      console.log(individual)
      if (individual.uid === uniqueId) {
        const isVisible = individual.levelVisibility;
        individual.levelVisibility = !isVisible;
        return;
      } else {
        if(individual.children.length>0){
          return recursivelyManipulate(uniqueId, individual.children);
        }
      }
    }
    arrayOfSiblings.forEach((individual, index) => {
      console.log(individual);
    });
  };
  const toggleVisibility = (uniqueId) => {
    const cloneData = cloneDeep(data);
    recursivelyManipulate(uniqueId, cloneData);
    console.log(cloneData);
  };
  const recursiveDisplay = (data = []) => {
    return data.map((individual, index) => {
      return (
        <>
          <button onClick={() => toggleVisibility(individual.uid)}>
            {individual.name}
          </button>
          <br></br>
          {individual.levelVisibility && recursiveDisplay(individual.children)}
        </>
      );
    });
  };
  return <div className="App">{recursiveDisplay(data)}</div>;
}

export default App;
