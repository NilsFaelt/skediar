import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import SecondNav from "./components/SecondNav";
import FirstImg from "./components/FirstImg";
import KontaktaOss from "./components/KontaktaOss";
import FirstImgRender from "./components/FirstImgRender";

function App() {
  return (
    <div className='App'>
      <TopHeader />
      <Header />
      <SecondNav />
      <FirstImg />
      <FirstImgRender />
      <KontaktaOss />
    </div>
  );
}

export default App;
