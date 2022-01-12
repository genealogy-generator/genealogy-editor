import { Provider } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import { store } from "../../storage/store";
import TreeEditor from "../TreeEditor/TreeEditor";
import "./App.css";

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <TreeEditor/>
        <Characteristics />
      </div>
    </Provider>
  );
}

export default App;
