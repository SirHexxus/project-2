import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthorized: false
  };

  toggleAuth = () => {
    this.setState({ isAuthorized: !this.state.isAuthorized });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
