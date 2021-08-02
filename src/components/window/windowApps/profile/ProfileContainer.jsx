import React from "react";
import Profile from "./Profile";
import Preloader from "../../../common/preloader/Preloader";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../../../redux/profileReducer";
import { withRouter } from "react-router";
import { compose } from "redux";
// import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  state = {
    isOwner: false,
  };

  refreshProfile() {
    let userId = Number(this.props.match.params.userId);
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.setState({
      isOwner: userId === this.props.userId ? true : false,
    });
    debugger;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
    if (prevProps.userId !== this.props.userId) {
      this.setState({ isOwner: false });
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching === true ? (
          <Preloader />
        ) : (
          <Profile isOwner={this.state.isOwner} {...this.props} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  contactsTemp: state.profilePage.contactsTemp,
  isFetching: state.usersPage.isFetching,
  status: state.profilePage.status,
  userId: state.auth.userId,
});

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
