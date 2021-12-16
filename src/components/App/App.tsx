import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../storage/store';
import TreeEditor from '../TreeEditor/TreeEditor';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <TreeEditor width={300} height={300} />
    </Provider>
  );
}

export default App;
