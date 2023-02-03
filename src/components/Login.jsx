import { useState, useRef } from "react";
import PasswordVisibility from "./PasswordVisibility";

export default function Login() {
  const [inputType, setInputType] = useState("password");
  const loginEmail = useRef();
  const loginPassword = useRef();

  const storedInfo = JSON.parse(localStorage.getItem("user"));

  const loginForm = (event) => {
    event.preventDefault();
    const loginInfo = {
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    };

    if (
      storedInfo.email === loginInfo.email &&
      storedInfo.password === loginInfo.password
    ) {
      console.log(storedInfo);
    } else {
      alert("User Not Found!!!");
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl mb-4">خوش آمدید</h1>
      <form className="flex gap-4 flex-col" onSubmit={loginForm}>
        <input
          type="email"
          placeholder="پست الکترونیک"
          required
          ref={loginEmail}
          className="bg-transparent border-[#44535a] border-2 p-1 "
        />
        <div className=" border-[#44535a] border-2 p-1 flex items-center justify-between">
          <input
            type={inputType}
            placeholder="کلمه عبور"
            required
            ref={loginPassword}
            className="bg-transparent w-11/12"
          />
          <PasswordVisibility setInputType={setInputType} />
        </div>
        <p className="text-xs text-[#1ab08a] ">فراموش کردید ؟</p>
        <button className="bg-[#1ab08a] p-2" type="submit">
          ورود
        </button>
      </form>
    </div>
  );
}
