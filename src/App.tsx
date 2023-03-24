import React from 'react';
import Header from './Components/Header/Header';
import CataloguePage from './Pages/CataloguePage';
import "./SCSS/App.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <CataloguePage/>

    </div>
  );
}

export default App;
