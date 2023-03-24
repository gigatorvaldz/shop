import React from 'react';
import Header from './Components/Header/Header';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { increment } from './Redux/Reducers/catalogueSlice';
import "./SCSS/App.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      App page

    </div>
  );
}

export default App;
