import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import CartContainer from './components/Cart/CartContainer';
import Header from './components/Header';
import MainContainer from './components/Main/MainContainer';
import MenuContainer from './components/Menu/MenuContainer';

let App = () => {
  return (
    <div className="App">
      <Header />
      <div>
      <Routes>
        <Route exact path='/' element={<Navigate to={"/main"} />} />
        <Route path='/menu' element={<MenuContainer />} />
        <Route path='/main' element={<MainContainer />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
