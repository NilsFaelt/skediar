import Styles from "./secondImgRender.module.css";
import first from "../assets/img/scondImgRender/first.png";
import second from "../assets/img/scondImgRender/second.png";
import third from "../assets/img/scondImgRender/third.png";
import fourth from "../assets/img/scondImgRender/fourth.png";

const SecondImgRender = () => {
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={first} alt='' />
      <img className={Styles.img} src={second} alt='' />
      <img className={Styles.img} src={third} alt='' />
      <img className={Styles.img} src={fourth} alt='' />
    </div>
  );
};

export default SecondImgRender;
