import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status ? this.props.status : "",
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false, status: this.props.status });
  };

  updateStatus = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.block}>
        <div className={s.statusHeader}>
          <div className={s.cls}>Status:</div>
          {!this.state.editMode && (
            <i
              onClick={this.activateEditMode}
              className={"fas fa-cog " + s.icon}
            ></i>
          )}
        </div>
        <div className={s.dat}>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          )}
          {this.state.editMode && (
            <div className={s.updStatus}>
              <input
                onChange={this.onStatusChange}
                value={this.state.status}
                autoFocus={true}
              ></input>
              <button onClick={this.updateStatus}>Update</button>
              <i className="fas fa-times" onClick={this.deactivateEditMode}></i>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
