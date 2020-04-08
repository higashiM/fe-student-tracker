import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <MainSection />
    </div>
  );
}

export default App;
