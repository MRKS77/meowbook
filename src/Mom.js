import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Window from "./components/window/Window";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";

class Mom extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <div className="preloadWall" />;
    }
    return (
      <div className="wall">
        <div className="pageWrapper">
          <HeaderContainer />
          <NavbarContainer />
          <Window />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(Mom);