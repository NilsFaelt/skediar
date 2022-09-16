import Styles from "./SecondNav.module.css";

const SecondNav = () => {
  return (
    <div className={Styles.container}>
      <nav className={Styles.nav}>
        <li className={Styles.li}>Alle produkter</li>
        <li className={Styles.li}>Alle rom</li>
        <li className={Styles.li}>Merkevarer</li>
        <li className={Styles.li}>Nyheter</li>
      </nav>
      <hr className={Styles.hr} />
    </div>
  );
};

export default SecondNav;
