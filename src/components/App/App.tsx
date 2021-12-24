import React from "react";
import { Provider } from "react-redux";
import Characteristics from "../Characteristics/Characteristics";
import { store } from "../../storage/store";
import TreeEditor from "../TreeEditor/TreeEditor";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TreeEditor width={600} height={600} />
        <Characteristics />
      </div>
    </Provider>
  );
}

export default App;
