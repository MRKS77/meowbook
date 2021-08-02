import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.chatPage.dialogs,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
