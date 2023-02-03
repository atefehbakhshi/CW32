import { useReducer } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import SwitchButtons from "./components/SwitchButtons";

import "./App.css";
import IsLoginProvider, { useLogin } from "./context";

function App() {
  const { switchButton, dispatch } = useLogin();
  console.log("switchButtons", switchButton);
  return (
    <IsLoginProvider>
      <div className="bg-[#25333c] h-screen flex items-center justify-center">
        <div className="w-1/3 text-white border-white border-2 p-4">
          <SwitchButtons />
          {!switchButton.login ? <Login /> : <Register />}
        </div>
      </div>
    </IsLoginProvider>
  );
}

export default App;
