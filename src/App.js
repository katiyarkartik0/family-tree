import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "./store/slices/dataSlice";
import "./App.css"

function App() {
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.data);
  const recursiveDisplay = (data = []) => {
    return data.map((individual, index) => {
      return (
        <div className="family">
          <button onClick={() => dispatch(toggleVisibility(individual.uid))}>
            {individual.name}
          </button>
          <br></br>
          {individual.levelVisibility && recursiveDisplay(individual.children)}
        </div>
      );
    });
  };
  return <div className="App">{recursiveDisplay(currentData)}</div>;
}

export default App;
