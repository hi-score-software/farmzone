const initialState = {
  user: {},
  isRegistering: false,
  isRegisteringSuccessful: false,
  isRegisteringFailed: false,
  success: false,
  error: false,
  isLogin: false,
  isLoginSuccessful: false,
  isLoginFailed: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_PENDING":
      return {
        ...state,
        isRegistering: true
      };
    case "REGISTER_USER_FULFILLED":
      return {
        ...state,
        isRegistering: false,
        isRegisteringSuccessful: true,
        user: action.payload
      };
    case "REGISTER_USER_REJECTED":
      return {
        ...state,
        isRegistering: false,
        isRegisteringSuccessful: false,
        isRegisteringFailed: true
      };
    
      case "LOGIN_USER_PENDING":
        return {
          ...state,
          isLogin: true
        };
      case "LOGIN_USER_FULFILLED":
        return {
          ...state,
          isLogin: false,
          isLoginSuccessful: true,
          user: action.payload
        };
      case "LOGIN_USER_REJECTED":
        return {
          ...state,
          isLogin: false,
          isLoginSuccessful: false,
          isLoginFailed: true
        };

     default: 
      return {
        ...state,
      }
  }
};

export default userReducer;
