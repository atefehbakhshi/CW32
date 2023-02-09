import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const SwitchButtons = () => {
  const { switchBtn, dispatchFn } = useContext(LoginContext);

  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={() => dispatchFn({ type: "login" })}
        className={`w-1/2 text-center py-2 ${
          !switchBtn ? "bg-[#1ab08a]" : "bg-[#44535a]"
        }`}
      >
        ورود
      </button>
      <button
        onClick={() => dispatchFn({ type: "register" })}
        className={`w-1/2 text-center py-2 ${
          switchBtn ? "bg-[#1ab08a]" : "bg-[#44535a]"
        }`}
      >
        ثبت نام
      </button>
    </div>
  );
};

export default SwitchButtons;
