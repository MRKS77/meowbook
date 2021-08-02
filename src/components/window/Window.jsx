import React from "react";
import s from "./Window.module.css";
// import Chat from "./windowApps/chat/Chat";
import { Route, Redirect, Switch } from "react-router-dom";
import UsersContainer from "./windowApps/users/UsersContainer";
import ProfileContainer from "./windowApps/profile/ProfileContainer";
import Login from "../common/login/Login";
import { withSuspense } from "../../hoc/withSuspense";
import NotFound404 from '../common/notFound404/NotFound404';

const Chat = React.lazy(() => import("./windowApps/chat/Chat"));

const Window = (props) => {
  return (
    <div className={s.windowMain}>
      <Switch>
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/chat" render={withSuspense(Chat)} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Redirect exact from="/" to="/profile" />
        <Route path="*" render={() => <NotFound404 />} />
      </Switch>
    </div>
  );
};

export default Window;
