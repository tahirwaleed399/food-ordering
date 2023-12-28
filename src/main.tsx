// Your root component file
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./layouts/home-layout";
import Root from "./routes/root";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Root />} />
            <Route path="about" element={<h1>About</h1>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
