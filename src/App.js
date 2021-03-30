import React, { useReducer } from 'react';
import ProductTable from './components/organisms/ProductTable';
import { ContextApp, testReducer } from "./reducers/reducers";
import productData from './productData';

import './App.css';

function App() {

  const [state, dispatch] = useReducer(testReducer, JSON.parse(localStorage.getItem('productState')) || productData);

  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <div className="App">
        <ProductTable />
      </div>
    </ContextApp.Provider>
  );
}

export default App;
