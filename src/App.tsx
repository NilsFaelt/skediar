import "./App.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import SecondNav from "./components/SecondNav";
import FirstImg from "./components/FirstImg";
import KontaktaOss from "./components/KontaktaOss";
import FirstImgRender from "./components/FirstImgRender";
import ImgCarousel from "./ImgCarousel";
import SecondImgRender from "./components/SecondImgRender";

function App() {
  return (
    <div className='App'>
      <TopHeader />
      <Header />
      <SecondNav />
      <FirstImg />
      <FirstImgRender />
      <p className='textOne'>Populært akkurat nå</p>
      <ImgCarousel />
      <p className='textTwo'>Interiørfavoritter</p>
      <SecondImgRender />
      <h3 className='middleTitle'>@skeidarnorge | #skeidar</h3>
      <p className='middleText'>
        Vi elsker å la oss inspirere av hjemmene deres ♥ Del gjerne bilder av
        ditt Skeidar-hjem med oss! <br /> Ser du noe du liker? Klikk på bildet
        for å se mer om produktene.
      </p>
      <KontaktaOss />
    </div>
  );
}

export default App;
