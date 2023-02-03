import { createContext, useContext, useReducer } from "react";

export const IsLogin = createContext({
  switchButton: {},
  dispatch: () => {},
});

const initialState = {
  login: false,
};

const reducer = (state, action) => {
  // if (action.type === "login") return false;
  // return true;
  console.log("state", state);

  switch (action.type) {
    case "login":
      return { login: (state.login = false) };
    case "register":
      return { login: (state.login = true) };
  }
};

function IsLoginProvider({ children }) {
  const [switchButton, dispatch] = useReducer(reducer, initialState);
  return (
    <IsLogin.Provider value={{ switchButton, dispatch }}>
      {children}
    </IsLogin.Provider>
  );
}
export default IsLoginProvider;
export const useLogin = () => useContext(IsLogin);
