import { useState } from "react";
import first from "./assets/imgcarousel/first.png";
import second from "./assets/imgcarousel/second.png";
import third from "./assets/imgcarousel/third.png";
import fourth from "./assets/imgcarousel/fourth.png";
import fifth from "./assets/imgcarousel/fifth.png";
import sixth from "./assets/imgcarousel/sixth.png";
import Styles from "./imgCarousel.module.css";

const ImgCarousel = () => {
  const [tooglePics, setTooglePics] = useState(true);
  const lefClick = () => {
    setTooglePics(true);
  };
  const rightClick = () => {
    setTooglePics(false);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.carousel}>
        <img
          onClick={() => {
            lefClick();
          }}
          className={Styles.img}
          src={tooglePics ? first : fourth}
          alt=''
        />
        <img className={Styles.img} src={tooglePics ? second : fifth} alt='' />
        <img
          onClick={() => {
            rightClick();
          }}
          className={Styles.img}
          src={tooglePics ? third : sixth}
          alt=''
        />
      </div>
    </div>
  );
};

export default ImgCarousel;
