import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src="/src/assets/neko-noodles-logo-text.png" alt="Neko Noodles Logo" />
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
        </ul>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}> </div>
    </Fragment>
  );
};

export default Header;
