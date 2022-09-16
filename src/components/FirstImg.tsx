import Styles from "./firstImg.module.css";
import firstImg from "../assets/img/firstimg.png";

const FirstImg = () => {
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={firstImg} alt='' />
      <p className={Styles.text}>
        Det gjør noe med deg når du har det fint hjemme.
      </p>
    </div>
  );
};

export default FirstImg;
