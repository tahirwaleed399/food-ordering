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
import Checkout from "./routes/checkout";
import Success from "./routes/success";
import Login from "./routes/login";
import AuthContextProvider from "./providers/FirebaseProvider";
import NotAuthenticatedPage from "./guards/NotAuthenticated";
import AuthenticatedPage from "./guards/Authenticated";
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthContextProvider>

      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<AuthenticatedPage><Root /></AuthenticatedPage>}/>
            <Route path="cart" element={<AuthenticatedPage><Cart /> </AuthenticatedPage>}/>
            <Route path="checkout" element={<AuthenticatedPage><Checkout /> </AuthenticatedPage>}/>
            <Route path="success" element={<AuthenticatedPage><Success /> </AuthenticatedPage>}/>
          

            <Route path="food-item/:id" element={<FoodItem />} />
          
          </Route>
          <Route path="/">
          
            <Route path="login" element={<NotAuthenticatedPage><Login></Login></NotAuthenticatedPage>} />


          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>

      </Provider>
    </React.StrictMode>
  );
}
