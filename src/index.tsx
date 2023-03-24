import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import App from "./App";
import { store } from "./Redux/store";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import CataloguePage from "./Pages/CataloguePage";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="/app" element={<App />} />
      <Route path="/catalogue" element={<CataloguePage />} />
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
