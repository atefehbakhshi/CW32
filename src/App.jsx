import { useContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import SwitchButtons from "./components/SwitchButtons";
import { LoginContext } from "./context/LoginContext";
import "./App.css";

function App() {
  const { switchBtn } = useContext(LoginContext);

  return (
    <div className="bg-[#25333c] h-screen flex items-center justify-center">
      <div className="w-1/3 text-white border-white border-2 p-4">
        <SwitchButtons />
        {!switchBtn ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default App;
