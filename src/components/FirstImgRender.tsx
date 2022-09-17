import Styles from "./firstImgRender.module.css";
import secondtImg from "../assets/img/secondimg.png";
import thirdimg from "../assets/img/thirdimg.png";

const FirstImgRender = () => {
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={secondtImg} alt='' />
      <img className={Styles.img} src={thirdimg} alt='' />
    </div>
  );
};

export default FirstImgRender;
