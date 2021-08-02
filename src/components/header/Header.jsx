import React from "react";
import s from "./Header.module.css";
import LogoHeader from "./headerComponents/LogoHeader";
import LoginBox from "./loginBox/LoginBox";

const Header = (props) => {
  return (
    <header className={s.headerMain}>
      <LogoHeader />
      <LoginBox
        isAuth={props.isAuth}
        login={props.login}
        logout={props.logout}
      />
    </header>
  );
};

export default Header;
