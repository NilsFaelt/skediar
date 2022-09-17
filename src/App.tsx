import "./App.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import SecondNav from "./components/SecondNav";
import FirstImg from "./components/FirstImg";
import KontaktaOss from "./components/KontaktaOss";
import FirstImgRender from "./components/FirstImgRender";
import ImgCarousel from "./ImgCarousel";

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
      <KontaktaOss />
    </div>
  );
}

export default App;
