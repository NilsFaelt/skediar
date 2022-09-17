import Styles from "./thirdImgRender.module.css";
import first from "../assets/img/thirdRender/first.png";
import scond from "../assets/img/thirdRender/second.png";
import third from "../assets/img/thirdRender/third.png";
import fourth from "../assets/img/thirdRender/fourth.png";
import fifth from "../assets/img/thirdRender/fifth.png";
import sixth from "../assets/img/thirdRender/sixth.png";
import seventh from "../assets/img/thirdRender/seventh.png";

const ThirdImgRender = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.firstDiv}>
        <img className={Styles.imgSmal} src={first} alt='' />
        <img className={Styles.imgSmal} src={scond} alt='' />
        <img className={Styles.imgSmal} src={third} alt='' />
        <img className={Styles.imgSmal} src={fourth} alt='' />
      </div>
      <div className={Styles.secondDiv}>
        <img className={Styles.bigImg} src={fifth} alt='' />
      </div>
      <div className={Styles.thirdDiv}>
        <img className={Styles.twoImgs} src={sixth} alt='' />
        <img className={Styles.twoImgs} src={seventh} alt='' />
      </div>
    </div>
  );
};

export default ThirdImgRender;
