// Your root component file
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomeLayout from "./layouts/home-layout";
import Root from "./routes/root";
import { Provider } from "react-redux";
import store from "./store/store";
import FoodItem from "./routes/food-item";
import Cart from "./routes/cart";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Root />} />
            <Route path="cart" element={<Cart />} />

            <Route path="food-item/:id" element={<FoodItem />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
