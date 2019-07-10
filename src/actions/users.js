import { toast } from "react-toastify";

import API from "../services/api.services";
import * as Endpoints from "../services/Endpoints";


export const registerUser = data => {
  return dispatch => {
    dispatch({
      type: 'REGISTER_USER_PENDING'
    });
    return API({ "Content-Type": "application/json" })({
      url: `${Endpoints.api.baseUrl}/${Endpoints.api.user.register}`,
      method: "POST",
      data
    })
      .then(res => {
        toast.success("Account Register successful");
        console.log("the data", res.data.data)
        const userData = { user: res.data.data };
        window.localStorage.setItem("farmzone_user", JSON.stringify(userData));
        dispatch({
          type: "REGISTER_USER_FULFILLED",
          payload: res.data.data
        });
        return window.location.replace('/dashboard');
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          toast.error("Please check your internet connection");
          return dispatch({
            type: 'REGISTER_USER_REJECTED'
          });
        }else if (error.response.status === 400) {
          const errors = error.response.data.errors;
          for (var i = 0; i < errors.length; i++) {
            toast.error(errors[i]);
          }
          return  dispatch({
            type: "REGISTER_USER_REJECTED"
          });
        }
        else if(error.response.status === 403 || error.response.status === 401){
          window.localStorage.clear("current_user")
          window.location.replace('/login')
        }
      });
  };
};


export const loginUser = data => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_USER_PENDING'
    });
    return API({ "Content-Type": "application/json" })({
      url: `${Endpoints.api.baseUrl}/${Endpoints.api.user.login}`,
      method: "POST",
      data
    })
      .then(res => {
        toast.success("login successful");
        console.log("the data", res.data.data)
        const userData = { user: res.data.data };
        window.localStorage.setItem("farmzone_user", JSON.stringify(userData));
        dispatch({
          type: "LOGIN_USER_FULFILLED",
          payload: res.data.data
        });
        return window.location.replace('/dashboard');
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          toast.error("Please check your internet connection");
          return dispatch({
            type: 'LOGIN_USER_REJECTED'
          });
        }else if (error.response.status === 400) {
          const errors = error.response.data.errors;
          for (var i = 0; i < errors.length; i++) {
            toast.error(errors[i]);
          }
          return  dispatch({
            type: "REGISTER_USER_REJECTED"
          });
        }
        else if(error.response.status === 403 || error.response.status === 401){
          window.localStorage.clear("current_user")
          window.location.replace('/login')
        }
      });
  };
};


