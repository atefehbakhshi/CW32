import { useReducer, useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import SwitchButtons from "./components/SwitchButtons";

import "./App.css";
const reducer = (state, action) => {
  if (action.type === "login") return false;
  return true;
};

function App() {
  const [switchButton, dispatch] = useReducer(reducer, false);
  return (
    <div className="bg-[#25333c] h-screen flex items-center justify-center">
      <div className="w-1/3 text-white border-white border-2 p-4">
        <SwitchButtons switchButton={switchButton} dispatch={dispatch} />
        {!switchButton ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default App;
