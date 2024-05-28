import React from "react";
import Header from "./components/UI/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from "./components/UI/Layout/Meals";
import CartProvider from "./components/Context/CartProvier";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Meals />
      </div>
    </CartProvider>

  );
}

export default App;
