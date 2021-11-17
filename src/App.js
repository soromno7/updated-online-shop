import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
