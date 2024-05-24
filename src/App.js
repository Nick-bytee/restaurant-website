import React from "react";
import Header from "./components/UI/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from "./components/UI/Layout/Meals";

function App() {
  return (
    <div>
      <Header/>
      <Meals/>
    </div>
  );
}

export default App;
