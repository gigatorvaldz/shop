import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CataloguePage from './Pages/CataloguePage';
import "./SCSS/App.scss"

// [Notes]:

// Loader, Error Boundary components (Utils)

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <CataloguePage/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
