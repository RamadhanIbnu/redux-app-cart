import React from 'react';
import './App.css';
import Cart from './components/Cart';
import {Product} from './pages/Product';

function App() {
  return (
    <div>
      <Cart/>
      <hr/>
      <Product/>  
    </div>
  );
}

export default App;
