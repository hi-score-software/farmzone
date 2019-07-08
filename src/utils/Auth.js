import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export function Guest(WrappedComponent) {
  let token = '';
  const user= JSON.parse(window.localStorage.getItem("current_user"));
  if(!user || (user && user.user) === undefined){
    token = null
  }else{
    token = user.user.token
  }
  return class extends Component {
    render() {
      return !token ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/gifts" />
      );
    }
  };
}

export function Private(WrappedComponent) {
  let token = '';
  const user= JSON.parse(window.localStorage.getItem("current_user"));
  if(!user || (user && user.user) === undefined){
    token = null
  }else{
    token = user.user.token
  }
  return class extends Component {
    render() {
      return token ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  };
}
