import { createContext, useReducer, useState } from "react";

export const LoginContext = createContext({
  switchBtn: null,
  dispatchFn: () => {},
});

const reducerFn = (state, action) => {
  switch (action.type) {
    case "login":
      return false;
    case "register":
      return true;
    default:
      return state;
  }
};

const LoginProvider = ({ children }) => {
  const [switchBtn, dispatchFn] = useReducer(reducerFn, false);

  return (
    <LoginContext.Provider value={{ switchBtn, dispatchFn }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
