import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.container}>
      <h1 className={Styles.title}>S K E I D A R</h1>
      <form className={Styles.form} action=''>
        <input placeholder='Søk' className={Styles.input} type='text' />
        <MagnifyingGlassIcon className={Styles.serarchIcon} />
      </form>
      <div>
        <nav className={Styles.nav}>
          <li className={Styles.li}>Butiker</li>
          <li className={Styles.li}>Inspirasjon</li>
          <li className={Styles.li}>Kundservice</li>
          <UserIcon className={Styles.navIcon} />
          <ShoppingCartIcon className={Styles.navIcon} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
