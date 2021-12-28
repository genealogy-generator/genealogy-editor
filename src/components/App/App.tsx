import React from "react";
import { Provider } from "react-redux";
import { store } from "../../storage/store";
import TreeEditor from "../TreeEditor/TreeEditor";
import CharacterRedactor from "../CharacterRedactor/CharacterReductor";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TreeEditor width={600} height={600} />
        <CharacterRedactor />
      </div>
    </Provider>
  );
}

export default App;
