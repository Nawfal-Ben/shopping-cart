import React from "react";
import ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import Products from "./components/Products";
import Root from "./layout/Root";
import Cart from "./components/Cart";
import { store } from "./rtk/store";
import { Provider } from "react-redux";

// CSS
import "./App.css";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route index element={<Products />} />
         <Route path="/cart" element={<Cart />} />
      </Route>
   )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
);
