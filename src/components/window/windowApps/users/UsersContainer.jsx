import React from "react";
import { connect } from "react-redux";
import {
  changePage,
  follow,
  unfollow,
  getUsers,
} from "../../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../../common/preloader/Preloader";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching === true ? (
          <Preloader />
        ) : (
          <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowing={this.props.toggleFollowing}
            isFollowing={this.props.isFollowing}
            changePage={this.props.changePage}
            getUsers={this.props.getUsers}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         changePage: (currentPage) => {
//             dispatch(changePageAC(currentPage))
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
// };

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { follow, unfollow, changePage, getUsers })
)(UsersContainer);
