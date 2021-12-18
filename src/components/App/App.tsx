import React from 'react';
import { Provider } from 'react-redux';
import Characteristics from '../Characteristics/Characteristics';
import { store } from '../../storage/store';
import TreeEditor from '../TreeEditor/TreeEditor';
import './App.css';


function App() {
  return (
    <Provider store={store}>
        <TreeEditor width={300} height={300} />
        <div className="App">
      <header className="App-header">
        <h1>Лишнее удалено</h1>
        <Characteristics/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
