import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
    isAuth: state.auth.isAuth
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
