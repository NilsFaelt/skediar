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
          <p className={Styles.text}>Kundeklubb</p>
          <p className={Styles.text}>Våre butikker</p>
          <p className={Styles.text}>Finansiering</p>
          <p className={Styles.text}>#skeidar</p>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Om Skeidar</h5>
          <p className={Styles.text}>Om Skeidar</p>
          <p className={Styles.text}>Miljø</p>
          <p className={Styles.text}>Presse</p>
          <p className={Styles.text}>Jobb hos Skeidar</p>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Kundservice</h5>
          <p className={Styles.text}>Kontakt</p>
          <p className={Styles.text}>Ofte stilte spørsmål</p>
          <p className={Styles.text}>Kjøpsvilkår netthandel</p>
          <p className={Styles.text}>Book personlig kjøpshjelp</p>
        </div>
        <div className={Styles.middleDivInnerDiv}>
          <h5>Følg oss</h5>
          <p className={Styles.text}>facebook.com/skeidar</p>
          <p className={Styles.text}>@skeidarnorge</p>
          <p className={Styles.text}>
            #skeidar <br /> Del ditt Skeidar hjem
          </p>
        </div>
        <div className={Styles.middleDivInnerDivIMg}>
          <img className={Styles.img} src={footerImg} alt='' />
        </div>
      </div>
      <hr className={Styles.hr} />
      <div className={Styles.divLower}>
        <div className={Styles.lowerDivInnerDivLeft}>
          <h3 className={Styles.lowerDivTitle}>S K E I D A R</h3>
          <p className={Styles.lowerDivText}>
            I Skeidar Pluss får du en rekke medlemsfordeler og eksklusive
            tilbud.
          </p>
          <div className={Styles.bliMedlemDiv}>
            <p>Bli medlem</p>
          </div>
        </div>
        <div className={Styles.lowerDivInnerDivRight}>
          <p className={Styles.lowerDivText}>
            © 2000-2022 SkeidarLivingGroup AS <br />
            Org.nr. 915 920 020
          </p>
          <p className={Styles.lowerDivText}>
            Personvernerklæring &nbsp; &nbsp; &nbsp; &nbsp; Bruk av
            informasjonskapsler
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
