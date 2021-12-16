import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../storage/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Лишнее удалено</h1>
        </header>
      </div>
    </Provider>
  );
}

export default App;
