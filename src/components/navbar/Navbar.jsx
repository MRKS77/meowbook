import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import BestList from "./bestList/BestList";

const Navbar = (props) => {
  return (
    <nav className={s.navbarMain}>
      {props.isAuth ? (
        <>
          <NavLink
            to="/profile"
            activeClassName={s.active}
            className={s.url + " " + s.first}
          >
            Profile
          </NavLink>
          <NavLink to="/chat" activeClassName={s.active} className={s.url}>
            Dialogs
          </NavLink>
          <NavLink to="/users" activeClassName={s.active} className={s.url}>
            Users
          </NavLink>
          {/* <div className={s.url} onClick={props.logout}>Exit</div> */}
          {/* <BestList topFriends={props.navbar.topFriends} /> */}
        </>
      ) : (
        <div className={s.navbarMain}>
          <div className={s.welcome}>
            <span>Welcome to</span> <i className="fas fa-paw"></i> MeowBook
          </div>
          <div className={s.welcomeDescrip}>
            Please register or{" "}
            <NavLink className={s.welcomeLink} to="/login">
              login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
