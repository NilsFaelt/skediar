import { FC } from "react";
import Styles from "./PopUp.module.css";

const PopUp: FC<{
  setTooglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setTooglePopUp }) => {
  return (
    <div className={Styles.Container}>
      <h3 className={Styles.title}>PLEASE READ FIRST</h3>
      <p className={Styles.text}>
        Welcome! This website serves as a demonstration of my CSS skills in
        implementing various UI designs. Please note that this is purely a
        design showcase, showcasing how I can translate and incorporate diverse
        designer UIs into my CSS framework.{" "}
      </p>
      <button className={Styles.button} onClick={() => setTooglePopUp(false)}>
        CLOSE
      </button>
    </div>
  );
};

export default PopUp;
