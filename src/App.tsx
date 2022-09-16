import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <TopHeader />
      <Header />
    </div>
  );
}

export default App;
