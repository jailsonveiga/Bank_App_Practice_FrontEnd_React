import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListAccountComponent from "./components/ListAccountComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListAccountComponent />
      </div>

      <FooterComponent />
    </div>
  );
}

export default App;
