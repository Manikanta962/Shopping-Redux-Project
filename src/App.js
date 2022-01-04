import React from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Productinfo from "./pages/Productinfo";
import Cartpage from "./pages/Cartpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/layout.css";
import "../src/stylesheets/products.css";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/login" exact element={<Loginpage />}></Route>
          <Route path="/register" exact element={<Registerpage />}></Route>
          <Route
            path="/productinfo/:productid"
            exact
            element={<Productinfo />}
          ></Route>
          <Route path="/cart" exact element={<Cartpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
