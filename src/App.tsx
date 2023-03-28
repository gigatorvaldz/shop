import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CataloguePage from "./Pages/CataloguePage";
import "./SCSS/App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import PostPage from "./Pages/PostPage";
import Breadcrumbs from "./Components/Utils/Breadcrumbs/Breadcrumbs";

// [Notes]:

// Loader, Error Boundary, Breadcrumbs components (Utils)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="catalogue/post/:code" element={<PostPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
