import React from "react";
import s from "./LoginBox.module.css";
import { NavLink } from "react-router-dom";

const LoginBox = (props) => {
  return (
    <div className={s.loginBox}>
      {props.isAuth ? (
        <div>
          <NavLink to="/profile" className={s.userLogin}>
          {props.login}
          </NavLink>
          <div className={s.exit} onClick={props.logout}>LogOut</div>
        </div>
      ) : (
        <NavLink to="/login" className={s.loginBut}>
          Log In
        </NavLink>
      )}
    </div>
  );
};

export default LoginBox;
