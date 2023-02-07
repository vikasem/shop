import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import MenuContainer from './components/Menu/MenuContainer';

let App = () => {
  return (
    <div className="App">
      <Header />
      <div>
      <Routes>
        <Route exact path='/' element={<Navigate to={"/main"} />} />
        <Route path='/menu' element={<MenuContainer />} />
        <Route path='/main' element={<Main />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
