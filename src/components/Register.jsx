import { useRef, useState } from "react";
import cityName from "../db";

import PasswordVisibility from "./PasswordVisibility";

export default function Register() {
  const [inputType, setInputType] = useState("password");
  const [showField, setShowField] = useState(false);
  const [showCounty, setShowCounty] = useState(false);
  const [listOfCounty, setListOfCounty] = useState([]);
  const [county, setCounty] = useState([]);
  const [degree, setDegree] = useState("");

  const firstName = useRef(null);
  const lastName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const cityOfUniversity = useRef(null);
  const cityOfUser = useRef(null);

  // display cite of user university
  const educationDegree = (event) => {
    if (event.target.value !== "") {
      setShowField(true);
      setDegree(event.target.value);
    } else {
      setShowField(false);
    }
  };

  // display user city
  const getCity = () => {
    const inputCity = cityName[cityOfUser.current.value];
    if (inputCity !== undefined) {
      setShowCounty(true);
      setListOfCounty(inputCity);
    }
  };

  const getCounty = (event) => {
    setCounty(event.target.value);
  };

  // get user information
  const registerForm = (event) => {
    event.preventDefault();
    const userInfo = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      degree: degree,
      cityOfUniversity: cityOfUniversity.current.value,
      city: cityOfUser.current.value,
      county: county,
      email: userEmail.current.value,
      password: userPassword.current.value,
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
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
            ref={firstName}
            className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            required
            ref={lastName}
            className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
          />
        </div>

        <select
          className="w-1/2 bg-transparent border-[#44535a] border-2 p-1"
          onChange={educationDegree}
        >
          <option value="" className="bg-gray-500">
            تحصیلات
          </option>
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
        <input
          type="text"
          placeholder=" محل تحصیل"
          required={showField}
          ref={cityOfUniversity}
          className="bg-transparent border-[#44535a] border-2 p-1"
          style={showField ? { display: "block" } : { display: "none" }}
        />
        <input
          type="text"
          placeholder="استان"
          required
          ref={cityOfUser}
          onChange={getCity}
          className="bg-transparent border-[#44535a] border-2 p-1"
        />
        <select
          name="county"
          onChange={getCounty}
          className="bg-transparent border-[#44535a] border-2 p-1"
          style={showCounty ? { display: "block" } : { display: "none" }}
        >
          {listOfCounty.map((item) => {
            return (
              <option value={item} key={item} className="bg-gray-500">
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="email"
          placeholder="پست الکترونیک"
          required
          ref={userEmail}
          className="bg-transparent border-[#44535a] border-2 p-1 "
        />
        <div className="border-[#44535a] border-2 p-1 flex items-center justify-between">
          <input
            type={inputType}
            placeholder="کلمه عبور"
            required
            ref={userPassword}
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
