import { useState } from "react";
import PasswordVisibility from "./PasswordVisibility";

export default function Register() {
  const [inputType, setInputType] = useState("password");

  const registerForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center text-xl mb-4">رایگان ثبت نام کنید</h1>
      <form className="flex gap-4 flex-col" onSubmit={registerForm}>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="نام"
            required
            className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            required
            className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
          />
        </div>
        <div>
          <select className="bg-transparent border-[#44535a] border-2 p-1">
            <option value="kardani" className="bg-gray-500">
              کاردانی
            </option>
            <option value="karshenasi" className="bg-gray-500">
              کارشناسی
            </option>
            <option value="karshenasi-arshad" className="bg-gray-500">
              کارشناسی ارشد
            </option>
          </select>
        </div>
        <input
          type="email"
          placeholder="پست الکترونیک"
          required
          className="bg-transparent border-[#44535a] border-2 p-1 "
        />
        <div className="border-[#44535a] border-2 p-1 flex items-center justify-between">
          <input
            type={inputType}
            placeholder="کلمه عبور"
            required
            className="bg-transparent w-11/12"
          />
          <PasswordVisibility setInputType={setInputType} />
        </div>
        <button className="bg-[#1ab08a] p-2" type="submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
}
