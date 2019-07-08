import React from "react";
import LocalStorageUserContext from "./localStorageUserContext";

class LocalStorageUserProvider extends React.PureComponent {
  state = {
    user: {}
  };

  componentDidMount() {
    let user = JSON.parse(window.localStorage.getItem("current_user"));
    if (!user || user.user === undefined) return;
    this.setState({ user: user.user.user });
  }

  render() {
    return (
      <LocalStorageUserContext.Provider value={this.state.user}>
        {this.props.children}
      </LocalStorageUserContext.Provider>
    );
  }
}

export default LocalStorageUserProvider;
