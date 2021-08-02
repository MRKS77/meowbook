// import React from 'react';
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  // updateNewMessageTextActionCreator,
  // deleteNewMessageTextActionCreator,
} from "../../../../../redux/chatReducer";
import Messenger from "./Messenger";
import { reset } from 'redux-form';

// const MessengerContainer = (props) => {
//     let state = props.store.getState().chatPage.messages;

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     };

//     let updateNewMessageText = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     };

//     let deleteNewTextMessage = () => {
//         props.store.dispatch(deleteNewMessageTextActionCreator())
//     };

//     return <Messenger addMessage={addMessage}
//         updateNewMessageText={updateNewMessageText}
//         deleteNewTextMessage={deleteNewTextMessage}
//         newMessageText={props.store.getState().chatPage.newMessageText}
//         state={state} />
// }

let mapStateToProps = (state) => {
  return {
    messages: state.chatPage.messages,
    // newMessageText: state.chatPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (values) => {
      dispatch(addMessageActionCreator(values.newMessage));
      dispatch(reset("newMessage"));
    },
    // updateNewMessageText: (text) => {
    //   dispatch(updateNewMessageTextActionCreator(text));
    // },
    // deleteNewTextMessage: () => {
    //   dispatch(deleteNewMessageTextActionCreator());
    // },
  };
};

const MessengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messenger);

export default MessengerContainer;
