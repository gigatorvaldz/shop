import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CataloguePage from "./Pages/CataloguePage";
import "./SCSS/App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PostPage from "./Pages/PostPage";
import CartPage from "./Pages/CartPage";
import PostEditPage from './Pages/PostEditPage';
import CreatePostPage from "./Pages/CreatePostPage";

// [Notes]:

// Loader, Error Boundary, Breadcrumbs components (Utils)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="catalogue/post/:code" element={<PostPage />} />
          <Route path="catalogue/post-edit/:code" element={<PostEditPage />} />
          <Route path="catalogue/post-create" element={<CreatePostPage />} />
          <Route path="/*" element={<CataloguePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
