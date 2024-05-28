import React from "react";
import Header from "./components/UI/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from "./components/UI/Layout/Meals";
import CartModal from "./components/UI/Modal/CartModal";

function App() {
  return (
    <div>
      <CartModal/>
      <Header/>
      <Meals/>
    </div>
  );
}

export default App;
