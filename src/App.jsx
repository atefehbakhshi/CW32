import Login from "./components/Login";
import Register from "./components/Register";
import SwitchButtons from "./components/SwitchButtons";

import "./App.css";

function App() {
  return (
    <div className="bg-[#25333c] h-screen flex items-center justify-center">
      <div className="w-1/3 text-white border-white border-2 p-4">
        <SwitchButtons />
        {/* <Login /> */}
        <Register />
      </div>
    </div>
  );
}

export default App;
