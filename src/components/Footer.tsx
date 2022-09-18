import Styles from "./footer.module.css";
import footerImg from "../assets/img/footerImg.png";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface Props {
  toTop: () => void;
}

const Footer: React.FC<Props> = ({ toTop }) => {
  return (
    <footer className={Styles.container}>
      <div className={Styles.divUpper}>
        <ChevronUpIcon onClick={toTop} className={Styles.upIcon} />
        <p onClick={toTop} className={Styles.clickableText}>
          TIL TOPPEN
        </p>
      </div>
      <div className={Styles.divMiddle}>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Aktuelt</h5>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Om Skeidar</h5>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Kundservice</h5>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Følg oss</h5>
        </div>
        <div className={Styles.middleDivInnerDivIMg}>
          <img className={Styles.img} src={footerImg} alt='' />
        </div>
      </div>
      <div className={Styles.divLower}></div>
    </footer>
  );
};

export default Footer;
