import "./App.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import SecondNav from "./components/SecondNav";
import FirstImg from "./components/FirstImg";
import KontaktaOss from "./components/KontaktaOss";
import FirstImgRender from "./components/FirstImgRender";
import ImgCarousel from "./ImgCarousel";
import SecondImgRender from "./components/SecondImgRender";
import ThirdImgRender from "./components/ThirdImgRender";
import Footer from "./components/Footer";
import IframeDiv from "./components/IframeDiv";
import PopUp from "./components/PopUp";
import { useState } from "react";

function App() {
  const [tooglePopUp, setTooglePopUp] = useState(true);
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='App'>
      {tooglePopUp && <PopUp setTooglePopUp={setTooglePopUp} />}
      <TopHeader />
      <Header />
      <SecondNav />
      <FirstImg />
      <FirstImgRender />
      <p className='textOne'>Populært akkurat nå</p>
      <ImgCarousel />
      <p className='textTwo'>Interiørfavoritter</p>
      <IframeDiv />
      <SecondImgRender />
      <h3 className='middleTitle'>@skeidarnorge | #skeidar</h3>
      <p className='middleText'>
        Vi elsker å la oss inspirere av hjemmene deres ♥ Del gjerne bilder av
        ditt Skeidar-hjem med oss! <br /> Ser du noe du liker? Klikk på bildet
        for å se mer om produktene.
      </p>
      <ThirdImgRender />
      <div className='seMerDiv'>
        <p>SE MER</p>
      </div>
      <KontaktaOss />
      <Footer toTop={toTop} />
    </div>
  );
}

export default App;
