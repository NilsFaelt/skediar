import Styles from "./topHeader.module.css";

const TopHeader = () => {
  return (
    <aside className={Styles.container}>
      <p className={Styles.text}>
        Skeidar Puss - Bli medlem av vår kundeklubb {">"}{" "}
      </p>
    </aside>
  );
};

export default TopHeader;
